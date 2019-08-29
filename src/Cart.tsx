import { Item } from "ApiDataTypes";

class EventInstance
{
	private _listeners: any = [];

	listen( callback )
	{
		if ( typeof callback !== 'function' )
			return false;

		this._listeners.push( callback );

		return true;
	}


	unlisten( callback )
	{
		this._listeners = this._listeners.filter( ( v ) => v !== callback );
	}


	emit( ...data )
	{
		for ( let callback of this._listeners )
			callback( ...data );
	}
}

export default class Cart
{
	public static onCartUpdate = new EventInstance();

	private static items: CartItem[] = [];

	public static get totalValue()
	{
		let totalValue = 0;

		for ( let item of this.items )
			totalValue += item.quantity * item.item.price;

		return '$' + totalValue;
	}

	public static get itemsCount() { return this.items.length; }
	public static get isEmpty() { return this.itemsCount == 0; }


	public static init()
	{
		this.loadCartState();

		this.onCartUpdate.listen( this.saveCartState.bind( this ) );
	}


	static addItem( itemToAdd: Item, quantity: number = 1 )
	{
		const item = this.getItem( itemToAdd.id );

		if ( item )
			item.quantity += quantity;
		else
		{
			this.items.push( {
				item: itemToAdd,
				quantity: quantity
			} );
		}

		this.onCartUpdate.emit();
	}


	static removeItem( itemId: number )
	{
		const index = this.items.findIndex( ( v ) => v.item.id == itemId );

		if ( index == -1 )
			return;

		this.items.splice( index, 1 );

		this.onCartUpdate.emit();
	}


	private static getItem( itemId: number ): CartItem | undefined
	{
		return this.items.find( ( v ) => v.item.id == itemId );
	}


	static updateQuantity( itemId: number, value: number, deltaValue = false )
	{
		const item = this.getItem( itemId );

		if ( item )
			item.quantity = ( deltaValue ? item.quantity : 0 ) + value;

		this.onCartUpdate.emit();
	}


	static getItems()
	{
		return this.items;
	}


	static empty()
	{
		this.items = [];

		this.onCartUpdate.emit();
	}


	private static saveCartState()
	{
		sessionStorage.setItem( 'cart', JSON.stringify( this.items ) );
	}


	private static loadCartState()
	{
		this.items = JSON.parse( sessionStorage.getItem( 'cart' ) );

		if ( this.items )
			this.onCartUpdate.emit();
		else
			this.items = [];
	}
}




export interface CartItem
{
	item: Item,
	quantity: number
};