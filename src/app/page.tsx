import { Fragment } from 'react'
import Title from './components/title'
import Wish from './components/wish'
import styles from './page.module.css'
import zToOneImg from './images/Zto1.png'
import engAtGoogImg from './images/EngAtGoog.png'

const wishes = [
  { id: 1, title: 'Book 1', url: 'sample', image: zToOneImg },
  { id: 2, title: 'Book 2', url: 'sample again', image: engAtGoogImg }
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
