import { Fragment } from 'react'
import Title from './components/title'
import Wish from './components/wish'
import { wishesData } from './data/wishes'
import styles from './page.module.css'

export default function Home() {

  const displayAllWishes = () => {
    return wishesData.map(wish => 
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
