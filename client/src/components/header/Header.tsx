import Image from "next/image";
import * as styles from './styles/Header.css';
import {IoSearchOutline} from "react-icons/io5";
import {useRouter} from "next/router";

const SEARCH_TO = '/search'

export const Header = () => {
  const router = useRouter();

  const onClickHandlerSearchButton = async () => {
    await router.push(SEARCH_TO);
  }
  return (
    <header className={styles.headerLayout}>
      <ul className={styles.headerLists}>
        <li>
          <Image priority={true} className={styles.logo} src={'/images/logo.svg'} alt={'foodie_logo'} width={120}
                 height={60}/>
        </li>
        <li>
          <button type={'button'} aria-label={'search_button'} onClick={onClickHandlerSearchButton}>
            <IoSearchOutline size={24} color={'#5e5e5e'}/>
          </button>
        </li>
      </ul>
    </header>
  )
}
