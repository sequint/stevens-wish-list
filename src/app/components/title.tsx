import { Fragment } from 'react'
import styles from './title.module.css'

export default function Title() {
  const titleArr: string[] = [
    'S', 't', 'e', 'v', 'e', 'n', '\'', 's', ' ',
    'W', 'i', 's', 'h', ' ',
    'L', 'i', 's', 't'
  ]
  let currentCharColor: string = 'green'

  function getCurrentColor(): string {
    const returnColor: string = currentCharColor

    currentCharColor = currentCharColor === 'green' ? 'red' : 'green'

    return returnColor;
  }

  function getTitle() {
    let charId: number = 1

    return titleArr.map(char =>
      <Fragment key={charId}>
        <span style={{ color: getCurrentColor()}}>{ char }</span>
      </Fragment>
    )
  }

  return (
    <>
      <h1 className={styles.pageTitle}>{getTitle()}</h1>
    </>
  )
}