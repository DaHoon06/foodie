import * as styles from "@containers/SearchContainer.css";
import {IoIosArrowBack, IoIosSearch} from "react-icons/io";
import {useRouter} from "next/router";

export const SearchContainer = () => {
  const router = useRouter();

  const onClickHandlerCloseSearch = () => {
    router.back();
  }
  return (
    <div className={styles.homeContainerLayout}>
      <div>
        <button type={'button'} onClick={onClickHandlerCloseSearch} aria-label={'close_search_page_button'}>
          <IoIosArrowBack size={24} color={'#5e5e5e'}/>
        </button>
      </div>
      <div>

        <form>
          <input type={"text"}/>
          <button>
            <IoIosSearch size={24} color={'#5e5e5e'}/>
          </button>
        </form>
      </div>
    </div>
  )
}