import Head from 'next/head'
import {useState} from 'react'
import { int2roman } from './Int2Romant'
import Form from './Form'


import styles from '@/pages/index.module.css'

export default function Home() {



  return (

    <div className={styles.container}>
      <Form/>
        
    </div>
  )
}
