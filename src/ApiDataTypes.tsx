export interface Category
{
	id: number,
	name: string

	imageUrl: string
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
	priceFormatted: string,
	imageUrl: string
}


export interface Coupon
{
	id: number,
	title: string,
	description: string,
	dateTo: string,
	dateToTimestamp: number,
	imageUrl: string
}


export interface StaffMember
{
	id: number,
	name: string,
	position: string,
	email: string,
	phone: string,
	imageUrl: string
}


export interface Job
{
	id: number,
	title: string,
	description: string
}