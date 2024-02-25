import * as styles from './HomeContainer.css';
import {Carousel} from "@components/ui/carousel/CarouselUi";
import {StoreLists} from "@components/lists/StoreLists";
import {VscSettings} from "react-icons/vsc";
import {HeadlessSelect} from "@components/common/headless/selectbox/HeadlessSelect";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import {useState} from "react";
import {NavBar} from "@components/nav/NavBar";
import {Typography} from "@components/common/typography/Typography";

const selectOptions = [
  {id: '1', key: '1', label: '평점순'},
  {id: '2', key: '2', label: '리뷰순'},
  {id: '3', key: '3', label: '조회순'},
]

export const HomeContainer = () => {
  const [sort, setSort] = useState('1');
  const [filterOpen, setFilterOpen] = useState(false);
  const onChangeSelectBox = (payload: string) => {
    const index = selectOptions.findIndex(v => v.label === payload);
    setSort(selectOptions[index].key);
  }
  return (
    <div className={styles.homeContainerLayout}>
      <Carousel/>
      <div className={styles.homeListsFilterContainer}
        style={{
          borderColor: !filterOpen ? '#ededed' : 'transparent'
        }}
      >
        <HeadlessSelect items={selectOptions} onChange={onChangeSelectBox}/>
        <button type={"button"} onClick={() => setFilterOpen(!filterOpen)} className={styles.filterButton}>
          <FlexBox direction={'row'} gap={6}>
            <VscSettings size={14} color={'#8c8c8c'}/>
            <Typography color={'gray400'} fontSize={12}>
              필터
            </Typography>
          </FlexBox>
        </button>
      </div>
      <div style={{
        display: filterOpen ? 'inline-block' : 'none',
        borderColor: filterOpen ? '#ededed' : 'transparent'
      }} className={styles.filterLists}>
        <NavBar />
      </div>
      <StoreLists sort={sort}/>
    </div>
  )
}
