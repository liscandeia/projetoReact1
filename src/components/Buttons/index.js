import React from 'react';

import './styles.css'

export function Buttons({label, type}) {
  return (
    <button className={
        `button ${type === 'outlined' 
        ? 'button-outlined' : 'button-solid'}`
        }
    >
        {label}
    </button>
  )
}

