import React, {FC, useState} from "react";
import styles from "./style.module.scss";

const TotalHeaderQuantity: FC = () => {
	const [value, setValue] = useState('0');

	return (
		<div className={styles.total_quantity}>{value}</div>
	)
};

export default TotalHeaderQuantity;
