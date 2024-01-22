'use client';

import {
  CalendarOutlined,
  DollarOutlined,
  MedicineBoxOutlined,
  SnippetsOutlined,
} from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import styles from './layout.module.scss';
import HeaderComponent from '../shared/header/header.component';
import LayoutCardComponent, {
  LayoutCardComponentType,
} from './layout-card/layout-card.component';

const LayoutComponent = () => {
  const [loading, setLoading] = useState(true);

  const items: LayoutCardComponentType[] = [
    {
      icon: CalendarOutlined,
      title: 'Agendamentos',
      description: 'Visualização de agendamentos',
    },
    {
      icon: SnippetsOutlined,
      title: 'Laudos',
      description: 'Visualização de laudos médicos',
    },
    {
      icon: MedicineBoxOutlined,
      title: 'Procedimentos',
      description: 'Procedimentos médicos realizados',
    },
    {
      icon: DollarOutlined,
      title: 'Pagamentos',
      description: 'Visualização de pagamentos, boletos, etc...',
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={styles.layout}>
      <HeaderComponent />
      <div className={styles.layout__list}>
        {items.map((item, index) => (
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
