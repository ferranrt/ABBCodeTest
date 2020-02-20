/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import styles from './PartView.module.scss';
import Feature from '../../components/Feature/Feature';

const ws = new WebSocket('ws://localhost:8080');
const CONTROLS_PER_FEATURE = 100;
export default function PartView() {
  const [dataset, setDataset] = useState(null);

  useEffect(() => {
    ws.onopen = () => {};
    ws.onclose = () => {};
  });

  useEffect(() => {
    ws.onmessage = evt => {
      const data = JSON.parse(evt.data);
      if (data.type === 'broadcast') {
        setDataset(data.content);
      } else if (data.type === 'control') {
        const newdataset = JSON.parse(JSON.stringify(dataset));
        for (let index = 0; index < data.content.length; index += 1) {
          newdataset[index].controls = [
            ...data.content[index].controls,
            ...dataset[index].controls,
          ].splice(0, CONTROLS_PER_FEATURE);
        }
        setDataset(newdataset);
      }
    };
  });

  return (
    <div className={styles.root}>
      {dataset !== null
        ? dataset.map((item, index) => <Feature key={index} data={item} />)
        : null}
    </div>
  );
}
