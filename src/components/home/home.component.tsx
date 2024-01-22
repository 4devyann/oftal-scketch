'use client';

import { Layout } from 'antd';
import HeaderComponent from '../shared/header/header.component';

const HomeComponent = () => {
  return (
    <Layout>
      <HeaderComponent />
      {/* <Content>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div>
      </Content> */}
    </Layout>
  );
};

export default HomeComponent;
