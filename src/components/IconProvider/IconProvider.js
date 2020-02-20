import React from 'react';
import { ReactComponent as SuccessIcon } from '../../assets/icons/success.svg';
import { ReactComponent as WarningIcon } from '../../assets/icons/warning.svg';
import { ReactComponent as DangerIcon } from '../../assets/icons/danger.svg';
import styles from './IconProvider.module.scss';

const colors = { danger: '#C62828', warning: '#FFD54F', success: '#4CAF50' };

export default function getStatusIcon(
  status,
  size = 20,
  fillColor = colors[status],
) {
  switch (status) {
    case 'danger':
      return (
        <DangerIcon className={styles.status} height={size} fill={fillColor} />
      );
    case 'warning':
      return (
        <WarningIcon className={styles.status} height={size} fill={fillColor} />
      );
    case 'success':
      return (
        <SuccessIcon className={styles.status} height={size} fill={fillColor} />
      );
    default:
      return (
        <SuccessIcon className={styles.status} height={size} fill={fillColor} />
      );
  }
}
