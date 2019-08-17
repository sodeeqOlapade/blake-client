import React from 'react';
import styles from './button.module.css';

function Button({ primary, textValue, click }) {
  return primary ? (
    <button className={styles.primary} onClick={click}>
      {textValue}
    </button>
  ) : (
    <button className={styles.secondary} onClick={click}>
      {textValue}
    </button>
  );
}


export default Button;
