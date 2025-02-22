import { Link } from '@inertiajs/react';
import Image from '@/Pages/Front/_ui/Image/Image';
import logo from '/resources/img/follas_logo.jpg';
import styles from './style.module.scss';  

const CategoryItem = ({cat}) => {

  return (
    <div className={styles.category_item}>
			<Link href={`/category/${cat.id}`} ><Image src={logo} alt={logo} />	</Link> 
			<Link href={`/category/${cat.id}`} >{cat.name}</Link> 
		</div>
  );
}

export default CategoryItem;