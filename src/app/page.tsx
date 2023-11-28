import { Fragment } from 'react'
import Image from 'next/image'
import Snowfall from './components/snowfall'
import Title from './components/title'
import Wish from './components/wish'
import christmasBG from './images/christmasBG.png'
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
    <main className={ styles.main }>
      <Image
      className={ styles.background }
      src={ christmasBG }
      alt='Christmas Sky'
      />
      <Snowfall />
      <Title />
      <div className={ styles.wishes }>
        { displayAllWishes() }
      </div>
    </main>
  )
}
