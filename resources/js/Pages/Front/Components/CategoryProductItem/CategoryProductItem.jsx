import { Link } from '@inertiajs/react';
import Image from '@/Pages/Front/_ui/Image/Image';
import styles from './style.module.scss';

const CategoryProductItem = ({ product }) => {

  return (
    <div className={styles.category_product_item}>
	    <Image src={`${window.location.origin}/${product.image_path}`} alt={product.description} />
	    <div className={styles.info}>
		    <div className={styles.title}>{product.description}</div>
		    <strong>№: {product.origin_number}</strong>
		    <p>{product.name}</p>
	    </div>
		</div>
  );
}

export default CategoryProductItem;
