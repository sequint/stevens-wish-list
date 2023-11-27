import { WishProps } from '../interfaces/WishProps'
import styles from './wish.module.css'

export default function Wish(props: WishProps) {
  const { title, url } = props

  return (
    <>
      <div className={styles.wishCardContainer}>
        <p>{ title }</p>
        <h6>{ url }</h6>
      </div>
    </>
  )
}
