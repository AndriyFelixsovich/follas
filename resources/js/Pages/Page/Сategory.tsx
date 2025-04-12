import {Head, router, useForm, usePage} from '@inertiajs/react';
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

const Category: FC<CategoryProps> = ({ category, products,queryParams = null }) => {
	const { data, setData } = useForm<{ page: number }>({ page: products.meta.current_page });
	const {id: categoryId} = usePage().props.category

	queryParams = queryParams || {}
	const searchFieldChanged = (name,value) => {
		if (value) {
			queryParams[name] = value
		}else {
			delete queryParams[name]
		}

		router.get(route('category.index',{id:categoryId}),queryParams)
	}

	const onKeyPress = (name, e) => {
		if (e.key !== 'Enter') return
		searchFieldChanged(name, e.target.value)
	}

	/*const [inputValuePart, setInputValuePart] = useState('');
	const [inputValueDescription, setInputValueDescription] = useState('');
	const [inputValueOrig, setInputValueOrig] = useState('');

	const handlerSearchValue = e => {
		const value = e.target.value;
		const id = e.target.id;

		if (id === 'IMS') {
			setInputValuePart(value);
		} else if (id === 'description') {
			setInputValueDescription(value);
		} else if (id === 'orig') {
			setInputValueOrig(value);
		}

		console.log('handlerSearchValue', id, value);
	};*/

	return (
		<MainLayout>
			<Head title="Main" />
			<div className={styles.category_page}>

				<Breadcrumbs categoryName={category.name}/>

				<Container>
					<h1 className={styles.title}>{category.name}</h1>

					<div className={styles.search_bar}>
						<SearchBarInput label="Search by IMS Part No."
														className=""
														placeholder={"Enter text"}
														onBlur={e=> searchFieldChanged('our_part_no', e.target.value)}
														onKeyPress={e=>onKeyPress('our_part_no', e)}
						/>
						<SearchBarInput label="Search by Description."
														className=""
														placeholder={"Enter text"}
														onBlur={e=> searchFieldChanged('description', e.target.value)}
														onKeyPress={e=>onKeyPress('description', e)}
						/>
						<SearchBarInput label="Search by Orig."
														className=""
														placeholder={"Enter text"}
														onBlur={e=> searchFieldChanged('original_no', e.target.value)}
														onKeyPress={e=>onKeyPress('original_no', e)}
						/>
						{/*<SearchBarInput label="Search by Description." id="description" inputValue={inputValueDescription} onInputHandler={handlerSearchValue} />*/}
						{/*<SearchBarInput label="Search by Orig. No" id="orig" inputValue={inputValueOrig} onInputHandler={handlerSearchValue} />*/}
					</div>

					{products.data.length > 0 ? (
						<>
							<CategoryTopBar />
								<div className={styles.category_page_wrap}>
									{products.data.map((product_cat) => (
										<CategoryProductItem product={product_cat} isWishlistPage={false} key={product_cat.id} index={0} />
									))}
								</div>

								<Pagination links={products.meta.links} setCurrentPage={(page:any) => setData('page', page)} />
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
