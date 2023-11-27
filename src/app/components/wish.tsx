import styles from './wish.module.css'

export default function Wish(props: any) {
  const { title, url } : {title: string, url: string} = props

  return (
    <>
      <div className={styles.wishCardContainer}>
        <p>{ title }</p>
        <h6>{ url }</h6>
      </div>
    </>
  )
}
