import React from 'react';
import { useStateContext } from '../../context/StateContextProvider';
import './Loader.css';

export default function Loader() {
  const { isLoading } = useStateContext();

  return (
    isLoading && (
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  );
}
