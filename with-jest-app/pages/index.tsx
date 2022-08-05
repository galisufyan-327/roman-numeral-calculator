import Head from 'next/head'
import {useState} from 'react'
import { int2roman } from './Int2Romant'

import styles from '@/pages/index.module.css'

export default function Home() {

  const [roman, setRoman]=useState('')


  return (

    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h4>Welcome to Integer to Roman Calculator</h4>
      <form action="">
          <label htmlFor="">Enter Integer :</label>
          <input onChange={(e: any)=>{setRoman(int2roman(e.target.value))}} className={styles.formInput}
           type="number"  min="1" max="3999" />

           <div className={styles.output}>
           {roman}
           </div>
        
         </form>
    </div>
  )
}
