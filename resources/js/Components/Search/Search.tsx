import { Link } from '@inertiajs/react';
import {FC} from "react";
import Input from '@/Components/_ui/Input/Input';
import SearchIcon from '@/Components/_ui/Icons/SeacrhIcon';
import styles from './style.module.scss';

const Search: FC = () => {
  return (
	  <form className={styles.form} action="#">
		  <Input placeholder="Search" />
		  <button>
				<SearchIcon width="27" height="27" />
		  </button>
	  </form>
  );
}

export default Search;
