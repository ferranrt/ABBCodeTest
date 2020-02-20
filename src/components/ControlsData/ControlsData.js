/* eslint-disable react/prop-types */
import React from 'react';
import getStatusIcon from '../IconProvider/IconProvider';
import styles from './ControlsData.module.scss';

export default function ControlsData(props) {
  const { data } = props;
  return (
    <tbody>
      {data.map((item, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <tr key={index}>
            <td>{item.cname}</td>
            <td>{item.dev}</td>
            <td>{item.devout}</td>
            <td className={`${styles.header} ${styles[item.status]}`}>
              {getStatusIcon(item.tol)}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
