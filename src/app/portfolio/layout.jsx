import styles from './app.module.css';

const layout = ({children}) => {
  return (
    <div>
        <h1 className={styles.mainTitle}>Our Works</h1>
        {children}
    </div>
  )
}

export default layout