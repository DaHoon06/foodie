import * as styles from './NavBar.css';
import {Typography} from "@components/common/typography/Typography";
const locationDo = [
  {label: '서울', key: '1', children: [
      {label: '강남구', key: '1_1' },
      {label: '강동구', key: '1_2' },
      {label: '강북', key: '1_3' },
      {label: '강서구', key: '1_4' },
      {label: '관악구', key: '1_5' },
      {label: '광진구', key: '1_6' },
      {label: '구로구', key: '1_7' },
      {label: '금천구', key: '1_8' },
      {label: '노원구', key: '1_9' },
      {label: '도봉구', key: '1_10' },
      {label: '동대문구', key: '1_11' },
      {label: '동작구', key: '1_12' },
      {label: '마포구', key: '1_13' },
      {label: '서대문구', key: '1_14' },
      {label: '서초구', key: '1_15' },
      {label: '성동구', key: '1_16' },
      {label: '성북구', key: '1_17' },
      {label: '송파구', key: '1_18' },
      {label: '양천구', key: '1_19' },
      {label: '영등포구', key: '1_20' },
      {label: '용산구', key: '1_21' },
      {label: '은평구', key: '1_22' },
      {label: '종로구', key: '1_23' },
      {label: '중구', key: '1_24' },
      {label: '중랑구', key: '1_25' },
    ]},
  {label: '인천', key: '2', children: [
      {label: '중구', key: '2_1' },
      {label: '동구', key: '2_2' },
      {label: '미추홀구', key: '2_3' },
      {label: '연수구', key: '2_4' },
      {label: '남동구', key: '2_5' },
      {label: '부평구', key: '2_6' },
      {label: '계양구', key: '2_7' },
      {label: '서구', key: '2_8' },
    ]},
  {label: '경기', key: '3', children: [
      {label: '수원시', key: '3_1' },
      {label: '성남시', key: '3_2' },
      {label: '안양시', key: '3_4' },
      {label: '고양시', key: '3_5' },
      {label: '안산시', key: '3_6' },
      {label: '용인시', key: '3_7' },
      {label: '부천시', key: '3_8' },
    ]},
  {label: '충북', key: '4', children: []},
  {label: '충남', key: '5', children: []},
  {label: '전북', key: '6', children: []},
  {label: '전남', key: '7', children: []},
  {label: '경북', key: '8', children: []},
  {label: '경남', key: '9', children: []},
  {label: '강원도', key: '10', children: []},
  {label: '제주도', key: '11', children: []},
]
export const NavBar = () => {
  return (
    <nav className={styles.navBarLayout}>
      <ul className={styles.navBarLists}>
        {locationDo.map((location) => {
          return (
            <li className={styles.navBarItems} key={location.key}>
              <Typography color={"gray400"} fontSize={14}>{location.label}</Typography>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
