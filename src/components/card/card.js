import React from 'react';
import styles from './card.module.css';

function Card({ imagename, title, description }) {
  return (
    <div class={styles.benefitWrapper}>
      <img
        src={require(`../../../assets/images/${imagename}`)}
        alt={`${title}-image`}
        class={styles.proofIcon}
      />
      <h3>{title}</h3>
      <div class={styles.subHeading}>{description}</div>
    </div>
  );
}

export default Card;
