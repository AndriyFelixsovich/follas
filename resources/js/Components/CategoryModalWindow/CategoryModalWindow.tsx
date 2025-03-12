import { FC } from 'react';
import Image from '@/Components/_ui/Image/Image';
import CloseIcon from '@/Components/_ui/Icons/CloseIcon';
import styles from './style.module.scss';

interface ImageProps {
	image_path: string;
	description: string;
}

interface CategoryImageItemProps {
	modal: ImageProps;
	index: number;
	onClose: (modal: ImageProps) => void;
}

const CategoryModalWindow: FC<CategoryImageItemProps> = ({ modal, index, onClose }) => {

	return (
		<div>
			<div className={`${styles.md_modal} ${styles.md_effect} ${styles.md_show}`}>
				<div className={styles.md_content}>
					<h3>{modal.description}</h3>
					<Image src={`${window.location.origin}/${modal.image_path}`} width={150} height={150} alt={modal.description} />
					<button onClick={() => onClose(modal)} className={styles.md_close}>
						<CloseIcon width={25} height={25} />
					</button>
				</div>
			</div>
			<div className={styles.md_overlay} onClick={() => onClose(modal)} />
		</div>

	);
};

export default CategoryModalWindow;
