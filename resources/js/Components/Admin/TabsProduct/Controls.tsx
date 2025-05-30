import { FC } from "react";
import styles from './style.module.scss';

interface IControlsProps {
	setActiveTab: (tab: string) => void;
	showTab: boolean;
}

const Controls: FC<IControlsProps> = ({ setActiveTab, tabs, showTab }) => {

	return (
		<ul className={styles.wrap}>
			{tabs
				.filter(tab => tab.id !== 3 || showTab)
				.map((tab, index) => (
					<li key={tab.id + index} onClick={() => setActiveTab(tab.id)}>
						{tab.title}
					</li>
				))}
		</ul>
	);
};

export default Controls;
