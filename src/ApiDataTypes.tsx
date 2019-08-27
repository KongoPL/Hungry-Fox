export interface Category
{
	id: number,
	name: string
}


export interface CategoriesItems
{
	[categoryId: number]: {
		categoryName: string,
		items: Item[]
	}
}


export interface Item
{
	id: number,
	name: string,
	description: string,
	price: string,
	priceFormatted: string
}


export interface Coupon
{
	title: string,
	description: string,
	dateTo: string,
	dateToTimestamp: number,
}


export interface StaffMember
{
	name: string,
	position: string,
	email: string,
	phone: string,
}


export interface Job
{
	id: number,
	title: string,
	description: string
}