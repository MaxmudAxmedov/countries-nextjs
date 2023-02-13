import styles from "@/styles/Header.module.css";
import {CiDark} from "react-icons/ci";

const Header = () => {
    return(
        <header>
        <div className='container'>
          <div className={styles.header}>
            <a className={styles.link} href={'/'}>Where in the world?</a>
            <button  className={styles.btnDakMode}><CiDark size={19}/> Dark Mode </button>
          </div>
        </div>
      </header>
    )
}

export default Header;