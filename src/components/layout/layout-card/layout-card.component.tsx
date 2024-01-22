import React from 'react';
import styles from './layout-card.module.scss';
import Icon from '@ant-design/icons/lib/components/Icon';
import { Button, Card, Skeleton, Space, Typography } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useTheme } from 'antd-style';
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
  EyeOutlined,
} from '@ant-design/icons';

const { Text } = Typography;

type LayoutCardComponentProps = {
  loading: boolean;
  icon: React.ForwardRefExoticComponent<any>;
  title: string;
  description?: string;
};

export type LayoutCardComponentType = Omit<LayoutCardComponentProps, 'loading'>;

const LayoutCardComponent = ({
  icon,
  loading,
  title,
  description,
}: LayoutCardComponentProps) => {
  const token = useTheme();

  return (
    <Card
      className={styles.card}
      actions={[
        <Space key={'space'}>
          <EyeOutlined key='see-more' />
          <Text className={styles.card__actions__text}>Visualizar</Text>
        </Space>,
      ]}
      hoverable
    >
      <Skeleton loading={loading} avatar active>
        <Meta
          avatar={
            <Icon
              className={styles.card__icon}
              style={{ color: token.colorPrimary }}
              component={icon}
            />
          }
          {...{
            title,
            description,
          }}
        />
      </Skeleton>
    </Card>
  );
};

export default LayoutCardComponent;
