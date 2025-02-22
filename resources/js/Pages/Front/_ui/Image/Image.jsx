import styles from './style.module.scss';  

const Container = props => {
  return (
    <img className={styles.image} src={props.src} alt={props.alt}/>
  );
}

export default Container;
