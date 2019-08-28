import { Category, CategoriesItems, Coupon, StaffMember, Job } from 'ApiDataTypes';

export default class Api
{
	private static _apiUrl = 'http://localhost/hungry-fox-api/api/';

	static getCategories(): Promise<Category[]>
	{
		return this.apiCall( 'categories' );
	}


	static getItems( categoryId?: number ): Promise<CategoriesItems>
	{
		let data;

		if ( categoryId )
			data = { categoryId };

		return this.apiCall( 'items', data );
	}


	static getCoupons(): Promise<Coupon[]>
	{
		return this.apiCall( 'coupons' );
	}


	static getStaff(): Promise<StaffMember[]>
	{
		return this.apiCall( 'staff' );
	}


	static getJobOffers(): Promise<Job[]>
	{
		return this.apiCall( 'job-offers' );
	}


	static sendMessage( email: string, name: string, message: string ): Promise<string>
	{
		return this.apiCall( 'contact', { email, name, message }, "POST" );
	}


	private static apiCall( action: string, data?: object, method: string = 'get' ): Promise<any>
	{
		method = method.toUpperCase();

		let requestBody = '';

		if ( typeof data == 'object' )
		{
			for ( let key in data )
				requestBody += key + '=' + data[key].replace( /\&/g, '%26' )+ '&';

			requestBody = requestBody.substr( 0, requestBody.length - 1 );
		}

		const destinationUrl = this._apiUrl + action;
		let fetchPromise;

		if ( method == "GET" || method == "HEAD" )
			fetchPromise = fetch( destinationUrl + ( requestBody == '' ? '' : '?' + requestBody ) );
		else
			fetchPromise = fetch( destinationUrl, {
				method: method,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				redirect: 'follow',
				body: requestBody,
			} );

		return fetchPromise.catch( ( reason ) =>
		{
			if ( process.env.NODE_ENV || process.env.NODE_ENV === 'development' )
				console.error( reason );
			else
				alert( "API Error occured. Please contact with webmaster" );
		} ).then( ( r ) => r.json() );
	}
}