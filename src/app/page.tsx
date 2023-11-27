import { Fragment } from 'react'
import {
  zToOneImg, 
  engAtGoogImg
} from './images'
import Title from './components/title'
import Wish from './components/wish'
import styles from './page.module.css'

const wishes = [
  { id: 1, title: 'Book 1', url: 'https://www.amazon.com/s?k=zero+to+one&i=stripbooks&crid=14SKG86LRJTO7&sprefix=zero+to+one%2Cstripbooks%2C145&ref=nb_sb_ss_ts-doa-p_1_11', image: zToOneImg },
  { id: 2, title: 'Book 2', url: 'https://www.amazon.com/Software-Engineering-Google-Lessons-Programming/dp/1492082791/ref=rvi_sccl_4/144-5130831-2377427?pd_rd_w=BCyO2&content-id=amzn1.sym.f5690a4d-f2bb-45d9-9d1b-736fee412437&pf_rd_p=f5690a4d-f2bb-45d9-9d1b-736fee412437&pf_rd_r=BYY3SAPM2YFXWE0780YM&pd_rd_wg=nOB6l&pd_rd_r=ae7e4198-5811-4bcb-81d5-3c541405cd0c&pd_rd_i=1492082791&psc=1', image: engAtGoogImg }
]

export default function Home() {

  const displayAllWishes = () => {
    return wishes.map(wish => 
      <Fragment key={wish.id}>
        <Wish
          title={ wish.title }
          url={ wish.url }
          image={ wish.image }
        />
      </Fragment>
    )
  }

  return (
    <main className={styles.main}>
      <Title></Title>
      <div className={styles.wishes}>
        { displayAllWishes() }
      </div>
    </main>
  )
}
