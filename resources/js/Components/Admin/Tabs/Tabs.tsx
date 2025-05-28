import { FC, useState } from "react";
import Controls from "@/Components/Admin/Tabs/Controls";
import Content from "@/Components/Admin/Tabs/Content";
import styles from './style.module.scss';

const Tabs: FC = ({ tabs, products }) => {
	const [activeTab, setActiveTab] = useState<number>(tabs[0].id);

	return (
		<div className={styles.tabs}>
			<Controls setActiveTab={setActiveTab} tabs={tabs}/>
			<Content activeTab={activeTab} products={products} />
		</div>
	);
};

export default Tabs;
