export interface Category {
	id: number;
	name: string;
}

export interface Product {
	id: number;
	name: string;
	price: string;
	image_path: string;
	description: string;
	origin_number: string;
}

export interface Products {
	current_page: number;
	data: Product[];
	links: any;
}

export interface CategoryProps {
	category: Category;
	products: Products;
}
