import {
  ConfigProvider,
  Drawer,
  Menu,
  MenuItemProps,
  Space,
  Typography,
} from 'antd';
import React from 'react';
import { useTheme } from 'antd-style';
import type { DrawerClassNames } from 'antd/es/drawer/DrawerPanel';
import './drawer.module.scss';
import {
  SketchOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import useCustomStyle from '@/hooks/use-custom-style.hook';
import { MenuItem, getItem } from '../helpers/get-menu-items.helper';
import { useRouter } from 'next/navigation';

const { Text } = Typography;

type DrawerProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const items: MenuItem[] = [
  getItem('Entrar', '0', <UserOutlined />),
  getItem('Cadastrar', '1', <UserAddOutlined />),
];

const DrawerComponent = ({ open, setOpen }: DrawerProps) => {
  const { styles } = useCustomStyle();
  const token = useTheme();
  const router = useRouter();

  const classNames: DrawerClassNames = {
    header: styles['custom-drawer-header'],
  };

  const handleClickedItem = ({ key }: any) => {
    console.log('key: ', typeof key);

    switch (key) {
      case '0':
        router.push('login');
    }

    switch (key) {
      case '1':
        router.push('cadastrar');
    }
  };

  return (
    <ConfigProvider
      drawer={{
        classNames,
      }}
    >
      <Drawer
        placement='left'
        onClose={() => setOpen(false)}
        open={open}
        style={{ width: '100%' }}
        extra={
          <Space>
            <SketchOutlined
              style={{
                fontSize: 32,
                textAlign: 'center',
                color: token.colorPrimary,
              }}
            />
            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>
              Oftal Sketch
            </Text>
          </Space>
        }
      >
        <Menu
          theme='light'
          defaultSelectedKeys={['0']}
          mode='vertical'
          items={items}
          onClick={handleClickedItem}
          style={{
            border: 'none',
          }}
        />
      </Drawer>
    </ConfigProvider>
  );
};

export default DrawerComponent;
