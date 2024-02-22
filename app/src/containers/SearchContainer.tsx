import * as styles from "@containers/SearchContainer.css";
import {IoIosArrowBack, IoIosSearch, IoMdClose} from "react-icons/io";
import {useRouter} from "next/router";
import {primaryIconColor} from "@styles/theme.css";
import classNames from "classnames";
import {Typography} from "@components/common/typography/Typography";
import {searchButton} from "@containers/SearchContainer.css";
import FlexBox from "@components/common/headless/flex-box/FlexBox";

export const SearchContainer = () => {
  const router = useRouter();

  const onClickHandlerCloseSearch = () => {
    router.back();
  }
  return (
    <div className={styles.searchContainerLayout}>
      <div className={styles.backButtonWrapper}>
        <button type={'button'} onClick={onClickHandlerCloseSearch} aria-label={'close_search_page_button'}>
          <IoIosArrowBack size={24} color={primaryIconColor}/>
        </button>
      </div>

      <form>
        <label className={styles.searchInputLabel}>
          <input placeholder={'지역, 장소, 메뉴 검색'} type={"text"} className={styles.searchInput}/>
        </label>
      </form>

      <div>
        <Typography fontSize={14} color={'gray500'}>최근 검색어</Typography>
        <ul>
          <li className={styles.recentSearchKeywordItems}>
            <FlexBox direction={'row'} gap={8}>
              <IoIosSearch size={18} color={'#a2a2a2'}/>
              <Typography as={'span'} fontSize={12} color={'gray400'}>검색어1</Typography>
            </FlexBox>

            <button type={'button'}>
              <Typography color={'gray400'} as={'span'}>
                <IoMdClose size={14} />
              </Typography>
            </button>
          </li>
          <li className={styles.recentSearchKeywordItems}>
            <FlexBox direction={'row'} gap={8}>
              <IoIosSearch size={18} color={'#a2a2a2'}/>
              <Typography as={'span'} fontSize={12} color={'gray400'}>검색어2</Typography>
            </FlexBox>

            <button type={'button'}>
              <Typography color={'gray400'} as={'span'}>
                <IoMdClose size={14} />
              </Typography>
            </button>
          </li>
          <li className={styles.recentSearchKeywordItems}>
            <FlexBox direction={'row'} gap={8}>
              <IoIosSearch size={18} color={'#a2a2a2'}/>
              <Typography as={'span'} fontSize={12} color={'gray400'}>검색어3</Typography>
            </FlexBox>

            <button type={'button'}>
              <Typography color={'gray400'} as={'span'}>
                <IoMdClose size={14} />
              </Typography>
            </button>
          </li>
          <li className={styles.recentSearchKeywordItems}>
            <Typography fontSize={12} color={'gray400'}>검색 기록이 없습니다.</Typography>
          </li>
        </ul>
      </div>
    </div>
  )
}
