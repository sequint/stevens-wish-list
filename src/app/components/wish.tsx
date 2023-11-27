import Image from 'next/image'
import { WishProps } from '../interfaces/WishProps'
import styles from './wish.module.css'

export default function Wish(props: WishProps) {
  const { title, url, image } = props

  return (
    <>
      <div className={styles.wishCardContainer}>
        <Image
          src={ image }
          width={ 100 }
          height={ 100 }
          alt='Wish Item'
        />
        <p>{ title }</p>
        <p>{ url }</p>
      </div>
    </>
  )
}
