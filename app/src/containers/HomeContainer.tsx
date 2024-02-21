import * as styles from './HomeContainer.css';
import {Carousel} from "@components/ui/carousel/CarouselUi";
import {StoreLists} from "@components/lists/StoreLists";
import {VscSettings} from "react-icons/vsc";
import {HeadlessSelect} from "@components/common/headless/selectbox/HeadlessSelect";

const selectOptions = [
  {id: '1', key: '1', label: '평점순'},
  {id: '2', key: '2', label: '리뷰순'},
  {id: '3', key: '3', label: '조회순'},
]

export const HomeContainer = () => {
  const onChangeSelectBox = () => {
    console.log('selectbox')
  }
  return (
    <div className={styles.homeContainerLayout}>
      <Carousel/>
      <div className={styles.homeListsFilterContainer}>
        <div>
          <HeadlessSelect items={selectOptions} onChange={onChangeSelectBox}/>
        </div>
        <div>
          <VscSettings size={18} color={'#8c8c8c'}/>
          필터 버튼
        </div>
      </div>
      <StoreLists/>
    </div>
  )
}