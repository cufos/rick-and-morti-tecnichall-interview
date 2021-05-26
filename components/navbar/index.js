import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// components
import { Logo } from '../icons/Logo'
// styles
import styles from './navbar.module.css'

export function Navbar () {
  const [character, setCharacter] = useState('')
  const router = useRouter()
  const handleSubmit = e => {
    e.preventDefault()
    setCharacter('')
    router.push(`/character/:${character}`)
  }
  return (
    <div className={styles.wraper}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link href='/'>
            <a>
              <Logo width={150} height={60} />
            </a>
          </Link>
        </h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            value={character}
            onChange={(e) => setCharacter(e.target.value)}
            type='text'
            placeholder='Search for a character...'
          />
          <button>
            Search
          </button>
        </form>
      </div>
    </div>
  )
}
