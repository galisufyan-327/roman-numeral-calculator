import Head from 'next/head'
import Image from 'next/image'
import {useState} from 'react'


import styles from '@/pages/index.module.css'

export default function Home() {
  const [integer,setInteger]=useState(0)
  return (

    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form action="">
          <label htmlFor="">Enter Integer :</label>
          <input onChange={(e: any)=>{setInteger(e.target.value)}} className={styles.formInput} type="text" value={integer} />
          <h6>{integer}</h6>
         </form>
    </div>
  )
}
