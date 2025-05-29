import { FC } from "react";
import styles from './style.module.scss';

interface IContent {
	activeTab: string;
}

const Content: FC<IContent> = ({ activeTab, products }) => {
	console.log(products)

	return (
		<div className={styles.content}>
			{activeTab === 1 && <div>all Cat.</div>}
			{activeTab === 2 && <div>new Cat.</div>}
		</div>
	);
};

export default Content;
