import React from 'react'
import styles from './SideBar.module.css'
export const SideOption = ({Icon}) => {
  return (
    <div className={styles.icon}>
        <Icon/>
    </div>
  )
}