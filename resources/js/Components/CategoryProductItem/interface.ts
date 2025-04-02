export interface Product {
	id: number;
	image_path: string;
	description: string;
	origin_number: string;
	name: string;
}

export interface CategoryProductItemProps {
	product: Product;
	index: number;
}

export interface PageProps {
	flash?: {
		success?: string;
		error?: string;
	};
}
