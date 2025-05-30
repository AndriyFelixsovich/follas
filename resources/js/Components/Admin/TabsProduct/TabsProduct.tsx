import { FC, useState } from "react";
import Controls from "@/Components/Admin/TabsProduct/Controls";
import Content from "@/Components/Admin/TabsProduct/Content";
import styles from './style.module.scss';

const TabsProduct: FC = ({ tabs, products }) => {
	const [activeTab, setActiveTab] = useState<number>(tabs[0].id);
	const [showTab, setShowTab] = useState(false)

	return (
		<div className={styles.tabs}>
			<Controls setActiveTab={setActiveTab} tabs={tabs} showTab={showTab}  />
			<Content activeTab={activeTab} products={products} setShowTab={setShowTab} />
		</div>
	);
};

export default TabsProduct;
