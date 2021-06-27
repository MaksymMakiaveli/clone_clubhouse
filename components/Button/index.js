import clsx from 'clsx';
import React from 'react';

import styles from './Button.module.scss';

const colors = {
  green: styles.buttonGreen,
  gray: styles.buttonGray,
  blue: styles.buttonBlue,
};

export const Button = ({ children, disabled, color, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className={clsx(className, styles.button, colors[color])}
      disabled={disabled}>
      {children}
    </button>
  );
};
