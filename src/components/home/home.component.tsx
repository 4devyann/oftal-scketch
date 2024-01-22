'use client';

import { Layout } from 'antd';
import BannerComponent from './components/banner/banner.component';
import HeaderComponent from '../shared/header/header.component';
import { homeItems } from '@/constants/home';
import styles from './home.module.scss';

const { Content } = Layout;

const HomeComponent = () => {
  return (
    <Layout>
      <HeaderComponent />
      <Content className={styles.home__content} style={{}}>
        {homeItems.map((item, index) => (
          <BannerComponent key={index} {...item} />
        ))}
      </Content>
    </Layout>
  );
};

export default HomeComponent;
