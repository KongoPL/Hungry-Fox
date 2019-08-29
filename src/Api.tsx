import { Category, CategoriesItems, Coupon, StaffMember, Job } from 'ApiDataTypes';
import i18n from "i18next";


export default class Api
{
	private static _apiUrl = 'http://192.168.0.109/hungry-fox-api/api/';

	static getCategories(): Promise<Category[]>
	{
		return this.apiCall( 'categories' );
	}


	static getItems(): Promise<CategoriesItems>
	{
		return this.apiCall( 'items' );
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
				requestBody += key + '=' + data[key].replace( /&/g, '%26' )+ '&';

			requestBody = requestBody.substr( 0, requestBody.length - 1 );
		}

		const destinationUrl = this._apiUrl + action;
		let fetchPromise;

		if ( method == "GET" || method == "HEAD" )
			fetchPromise = fetch( destinationUrl + ( requestBody == '' ? '' : '?' + requestBody ), {
				method: method,
				headers: {
					'X-Language': i18n.language
				},
				redirect: 'follow',
				credentials: "same-origin",
			} );
		else
			fetchPromise = fetch( destinationUrl, {
				method: method,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'X-Language': i18n.language
				},
				redirect: 'follow',
				credentials: "same-origin",
				body: requestBody,
			} );

		return fetchPromise.catch( ( reason ) =>
		{
			if ( process.env.NODE_ENV || process.env.NODE_ENV === 'development' )
				console.error( reason );
			else
				alert( "API Error occured. Please contact with webmaster" );
		} ) .then( ( r ) => r.json() );
	}
}