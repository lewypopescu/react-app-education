import React from 'react'
import styles from './Alert.module.css';

export default function Alert({ message }) {
  return (
    <div className={styles.card}>{ message }</div>
  )
}

