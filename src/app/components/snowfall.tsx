import { Fragment } from 'react'
import styles from './snowfall.module.css'

interface Snowflake {
  id: number
  inner: string
}

export default function Snowfall() {
  const snowflakes: Snowflake[] = []

  function fillSnowflakeArr() {
    for (let count: number = 1; count <= 20; count++) {
      snowflakes.push({ id: count, inner: '*' })
    }
  }

  function generateSnowflakes() {
    fillSnowflakeArr()

    return snowflakes.map(flake =>
      <Fragment key={ flake.id }>
        <div className={ styles.snowflake }>
          <div className={ styles.inner }>{ flake.inner }</div>
        </div>
      </Fragment>
    )
  }

  return (
    <div className={styles.snowflakes} aria-hidden="true">
      { generateSnowflakes() }
    </div>
  )
}
