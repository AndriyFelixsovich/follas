import styles from './style.module.scss';  

const Container = props => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
}

export default Container;
