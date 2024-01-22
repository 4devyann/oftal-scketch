'use client';

import { Flex, Layout } from 'antd';
import BannerComponent from './components/banner/banner.component';
import HeaderComponent from '../shared/header/header.component';
import { contactUsItems, homeItems } from '@/constants/home';
import styles from './home.module.scss';
import ContactUsComponent from './components/contact-us/contact-us.component';

const { Content } = Layout;

const HomeComponent = () => {
  return (
    <Layout>
      <HeaderComponent />
      <Content className={styles.home__content}>
        {homeItems.map((item, index) => (
          <BannerComponent key={index} {...item} />
        ))}
        <Flex className={styles.contact_us__container}>
          {contactUsItems.map((item, index) => (
            <ContactUsComponent key={index} {...item} loading={false} />
          ))}
        </Flex>
      </Content>
    </Layout>
  );
};

export default HomeComponent;
