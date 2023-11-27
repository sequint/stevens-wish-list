import { Fragment } from 'react'
import Title from './components/title'
import Wish from './components/wish'
import styles from './page.module.css'

const wishes = [
  { id: 1, title: 'Book 1', url: 'sample'},
  { id: 2, title: 'Book 2', url: 'sample again'}
]

export default function Home() {

  const displayAllWishes = () => {
    return wishes.map(wish => 
      <Fragment key={wish.id}>
        <Wish
          title={wish.title}
          url={wish.url}
        />
      </Fragment>  
    )
  }

  return (
    <main className={styles.main}>
      <Title></Title>
      <>
        { displayAllWishes() }
      </>
    </main>
  )
}
