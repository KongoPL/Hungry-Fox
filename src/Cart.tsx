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


	public static get totalValue() { return 15; }
	public static get itemsCount() { return this.items.length; }

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


	static updateCount( itemId: number, value: number, deltaValue = false )
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
}

export interface CartItem
{
	item: Item,
	quantity: number
};