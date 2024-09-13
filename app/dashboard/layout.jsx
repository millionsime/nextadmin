import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar"
import styles from '../ui/dashboard/dashboard.module.css';
const Layout = ({ children }) => {
  return (
    <div className={styles.conatainer}>
        <div className={styles.menu}>
            <Sidebar/>
        </div>
        <div>
            <Navbar className={styles.content}>
               { children }
            </Navbar>
        </div>
    </div>
  )
}

export default Layout