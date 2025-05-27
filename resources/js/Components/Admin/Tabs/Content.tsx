import { FC } from "react";
import styles from './style.module.scss';

interface IContent {
	activeTab: string;
}

const Content: FC<IContent> = ({ activeTab }) => {
	return (
		<div className={styles.content}>
			{activeTab === 1 && <div>all products.</div>}
			{activeTab === 2 && <div>new product.</div>}
		</div>
	);
};

export default Content;
