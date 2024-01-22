'use client';

import React, { useEffect, useState } from 'react';
import styles from './layout.module.scss';
import HeaderComponent from '../shared/header/header.component';
import LayoutCardComponent from './layout-card/layout-card.component';
import { layoutItems } from '@/app/constants/layout';

const LayoutComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={styles.layout}>
      <HeaderComponent />
      <div className={styles.layout__list}>
        {layoutItems.map((item, index) => (
          <LayoutCardComponent
            key={index}
            icon={item.icon}
            loading={loading}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default LayoutComponent;
