import { FC } from "react";
import styles from './style.module.scss';

interface IControlsProps {
	setActiveTab: (tab: string) => void;
}

const Controls: FC<IControlsProps> = ({ setActiveTab, tabs }) => {
	return (
		<ul className={styles.wrap}>
			{
				tabs.map((tab, index) => (
					<li key={tab.id + index} onClick={() => setActiveTab(tab.id)}>{tab.title}</li>
				))
			}
		</ul>
	);
};

export default Controls;
