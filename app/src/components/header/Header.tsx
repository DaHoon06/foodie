import Image from "next/image";
import * as styles from './Header.css';
import {IoSearchOutline} from "react-icons/io5";

export const Header = () => {
  return (
    <header className={styles.headerLayout}>
      <ul className={styles.headerLists}>
        <li>
          <Image className={styles.logo} src={'/images/logo.svg'} alt={'foodie_logo'} width={120} height={60}/>
        </li>
        <li>
          <button type={'button'} aria-label={'search_button'}>
            <IoSearchOutline size={24} color={'#5e5e5e'}/>
          </button>
        </li>
      </ul>
    </header>
  )
}