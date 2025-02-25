import styles from "./Contauner.module.css";

function Container({ children }) {
  return <main className={styles.main}>{children}</main>;
}

export default Container;
