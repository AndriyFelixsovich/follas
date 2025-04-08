import { Head, useForm } from '@inertiajs/react';
import { FC, useState } from 'react';
import styles from './category.module.scss';
import CategoryProductItem from '@/Components/CategoryProductItem/CategoryProductItem';
import Container from '@/Components/_ui/Container/Container';
import MainLayout from "@/Layouts/MainLayout";
import Pagination from '@/Components/Pagination/Pagination';
import CategoryTopBar from '@/Components/CategoryTopBar/CategoryTopBar';
import Breadcrumbs from '@/Components/Breadcrumbs/Breadcrumbs';
import SearchBarInput from '@/Components/SearchBarInput/SearchBarInput';
import { CategoryProps } from '@/Pages/Page/category.interface';

const Category: FC<CategoryProps> = ({ category, products }) => {
	const { data, setData } = useForm<{ page: number }>({ page: products.current_page });

	const [inputValue, setInputValue] = useState('');

	const handlerSearchValue = e => {
		const value = e.target.value;
		setInputValue(value)
		console.log('handlerSearchValue', value)
	}

	return (
		<MainLayout>
			<Head title="Main" />
			<div className={styles.category_page}>

				<Breadcrumbs categoryName={category.name}/>

				<Container>
					<h1 className={styles.title}>{category.name}</h1>

					<div className={styles.search_bar}>
						<SearchBarInput label="Search by IMS Part No." id="IMS" inputValue={inputValue} onHandlerSearchValue={handlerSearchValue} />
						<SearchBarInput label="Search by Description." id="description" inputValue={inputValue} onHandlerSearchValue={handlerSearchValue} />
						<SearchBarInput label="Search by Orig. No" id="orig" inputValue={inputValue} onHandlerSearchValue={handlerSearchValue} />
					</div>

					{products.data.length > 0 ? (
						<>
							<CategoryTopBar />
								<div className={styles.category_page_wrap}>
									{products.data.map((product_cat) => (
										<CategoryProductItem product={product_cat} key={product_cat.id} index={0} />
									))}
								</div>

								<Pagination links={products.links} setCurrentPage={(page:any) => setData('page', page)} />
						</>
					) : (
						<h2>Category is empty! </h2>
					)}

				</Container>

			</div>
		</MainLayout>
	);
};

export default Category;
