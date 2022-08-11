import {useState} from 'react'
import styles from '@/styles/index.module.css'
import { RomanConverter } from '../utils/Int2Romant'

export default function Form({ }) {
  const [roman, setRoman] = useState('');
  const [error, setError] = useState(null);

  const convertToRoman = (e: any) => {
    try {
      const convertedValue = RomanConverter.convertToRoman(e.target.value);

      setRoman(convertedValue);
      setError(null);
    } catch(error: any) {

      setRoman('');
      setError(error.message);

    }
  }

  return (
    <div>
      <h4 role="heading">Welcome to Integer to Roman Calculator</h4>
      <form>
        <label htmlFor="integer">Enter Integer :</label>
        <input onChange={convertToRoman} className={styles.formInput}
          type="number"  min="1" max="1000" />

        <div className={styles.output}>
          {roman}
        </div>
        {error && <div className={styles.error}>{error}</div>}
      </form>
    </div>
  )
}