import React from 'react';
import { useStateContext } from '../../../context/StateContextProvider';
import styles from './NoResult.module.css';
export default function NoResult() {
  const { data, loading } = useStateContext();
  if (data && data.length === 0 && !loading) {
    return <p className={styles.noData}>No Users to show :|</p>;
  }
}
