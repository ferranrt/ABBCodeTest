/* eslint-disable react/prop-types */
import React from 'react';
import styles from './FeatureHeader.module.scss';
import { ReactComponent as CircleIcon } from '../../assets/icons/circle.svg';
import getStatusIcon from '../IconProvider/IconProvider';

export default function FeatureHeader(props) {
  const { status, name } = props;
  return (
    <div className={`${styles.header} ${styles[status]}`}>
      <CircleIcon className={styles.circle} height={30} fill="white" />
      <span className={styles.title}>{name}</span>
      {getStatusIcon(status, 30, 'white')}
    </div>
  );
}
