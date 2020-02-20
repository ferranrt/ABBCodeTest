/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Feature.module.scss';
import FeatureHeader from '../FeatureHeader/FeatureHeader';
import ControlsHeader from '../ControlsHeader/ControlsHeader';
import ControlsData from '../ControlsData/ControlsData';
import FeatureScroll from '../FeatureScroll/FeatureScroll';

export default function Feature(props) {
  const { data } = props;
  const sizes = { XXL: styles.sizeXXL, XL: styles.sizeXL, M: styles.sizeM };

  return (
    <div className={`${styles.root} ${sizes[data.sizeComponent]}`}>
      <FeatureHeader status={data.status} name={data.name} />
      <table className={styles.controlsTable}>
        <ControlsHeader />
        <ControlsData data={data.controls} />
      </table>
    </div>
  );
}
