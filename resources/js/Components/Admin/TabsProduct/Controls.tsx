import { FC } from "react";
import { usePage, useForm, Link } from '@inertiajs/react';
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
					<Link href={route(tab.href)} key={tab.id + index} onClick={() => setActiveTab(tab.id)}
					      preserveScroll
					      preserveState
					>
						{tab.title}
					</Link>
				</li>
	)
)}
</ul>
);
};

export default Controls;
