import {FC} from 'react';
import {Link} from '@inertiajs/react';
import Image from '@/Components/_ui/Image/Image';
import ChevronRight from '@/Components/_ui/Icons/ChevronRight';
import logo from '../../../img/follas_logo.jpg';
import styles from './style.module.scss';

interface IBreadcrumbs {
	categoryName: string
}

const Breadcrumbs: FC<IBreadcrumbs> = ({categoryName}) => {
	return (
		<div className={styles.breadcrumbs}>
			<div className={styles.breadcrumbs_inner}>
				<Link href={`/`}>
					<Image src={logo} alt={logo} width={'80'} height={'80'}/>
				</Link>
				<div className={styles.divider}><ChevronRight width={15} height={15}/></div>
				<strong>{categoryName}</strong>
			</div>
		</div>
	);
};

export default Breadcrumbs;
