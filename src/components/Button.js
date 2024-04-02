import React from 'react';
import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/getClasses';

const buttonType = {
  primary: 'primary',
  secondary: 'secondary',
};

function Button({ children, varient = 'primary' }) {
  return (
    <button
      type="button"
      className={getClasses([
        styles.button,
        styles[`button--${buttonType[varient]}`],
      ])}
    >
      {children}
    </button>
  );
}

export default Button;
