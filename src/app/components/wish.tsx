import Image from 'next/image'
import { WishProps } from '../interfaces/WishProps'
import styles from './wish.module.css'
import Link from 'next/link'

export default function Wish(props: WishProps) {
  const { title, url, image } = props

  return (
    <>
      <Link
        className={ styles.wishCardContainer }
        href={url}
        target='_blank'
      >
        <Image
        className={ styles.wishCardImg }
          src={ image }
          width={ 200 }
          height={ 200 }
          alt='Wish Item'
        />
        <p className={ styles.wishCardText }>{ title }</p>
      </Link>
    </>
  )
}
