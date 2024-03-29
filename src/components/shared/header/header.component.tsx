import React, { useState } from 'react';
import { Layout, Typography, theme } from 'antd';
import { useTheme } from 'antd-style';
import { MenuOutlined, SketchOutlined } from '@ant-design/icons';
import DrawerComponent from '@/components/drawer/drawer.component';
import { useRouter } from 'next/navigation';

const { Header } = Layout;
const { Text } = Typography;

const HeaderComponent = () => {
  const token = useTheme();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0 1rem',
        background: colorBgContainer,
        height: 70.7,
        gap: 12,
      }}
    >
      <MenuOutlined
        onClick={() => setOpen(true)}
        style={{ fontSize: 24, textAlign: 'center' }}
      />
      <SketchOutlined
        style={{
          fontSize: 32,
          color: token.colorPrimary,
        }}
        onClick={() => router.push('/')}
      />
      <Text
        style={{ fontWeight: 'bold', fontSize: 24 }}
        onClick={() => router.push('/')}
      >
        Oftal Sketch
      </Text>
      <DrawerComponent {...{ open, setOpen }} />
    </Header>
  );
};

export default HeaderComponent;
