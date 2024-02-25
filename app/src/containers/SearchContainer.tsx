import * as styles from "@containers/SearchContainer.css";
import {IoIosArrowBack, IoIosSearch, IoMdClose} from "react-icons/io";
import {useRouter} from "next/router";
import {primaryIconColor} from "@styles/theme.css";
import {Typography} from "@components/common/typography/Typography";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import {useEffect, useState} from "react";
import {SearchBar} from "@components/form/SearchBar";

interface keyInterface {
  id: number
  text: string
}

export const SearchContainer = () => {
  const router = useRouter();
  const [keywords, setKeywords] = useState<keyInterface[]>([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const result = localStorage.getItem('keywords') || '[]'
      setKeywords(JSON.parse(result))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords))
  }, [keywords])

  // 검색어 추가
  const handleAddKeyword = (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text: text,
    }
    const maxKeywordLists = keywords.splice(0, 10); // 최대 10개만
    setKeywords([newKeyword, ...maxKeywordLists])
  }

  const handleRemoveKeyword = (id: number) => {
    const nextKeyword = keywords.filter((keyword) => {
      return keyword.id != id
    })
    setKeywords(nextKeyword)
  }

  //검색어 전체 삭제
  const handleClearKeywords = () => {
    setKeywords([])
  }

  const handleCloseSearch = async () => {
    await router.push('/');
  }
  return (
    <div className={styles.searchContainerLayout}>
      <div className={styles.backButtonWrapper}>
        <button type={'button'} onClick={handleCloseSearch} aria-label={'close_search_page_button'}>
          <IoIosArrowBack size={24} color={primaryIconColor}/>
        </button>
      </div>

      <SearchBar onAddKeyword={handleAddKeyword}/>

      <div>
        <FlexBox direction={'row'} justifyContent={'space-between'}>
          <Typography fontSize={14} color={'gray500'}>최근 검색어</Typography>
          <button type={'button'} onClick={handleClearKeywords}>
            <Typography fontSize={14} color={'gray500'} as={'span'}>전체 삭제</Typography>
          </button>
        </FlexBox>

        <ul>
          {keywords.length ? (
            keywords.map((keyword) => (
              <li className={styles.recentSearchKeywordItems} key={keyword.id}>
                <FlexBox direction={'row'} gap={8} justifyContent={"flex-start"}>
                  <IoIosSearch size={18} color={'#a2a2a2'}/>
                  <Typography as={'span'} fontSize={12} color={'gray400'}>{keyword.text}</Typography>
                </FlexBox>

                <button type={'button'} onClick={() => handleRemoveKeyword(keyword.id)}>
                  <Typography color={'gray400'} as={'span'}>
                    <IoMdClose size={14}/>
                  </Typography>
                </button>
              </li>
            ))
          ) : (
            <li className={styles.recentSearchKeywordItems}>
              <Typography fontSize={12} color={'gray400'}>검색 기록이 없습니다.</Typography>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
