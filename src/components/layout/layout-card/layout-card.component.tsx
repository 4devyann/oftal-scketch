import React from 'react';
import { Card, Skeleton } from 'antd';
import Meta from 'antd/es/card/Meta';
import Icon from '@ant-design/icons/lib/components/Icon';
import { useTheme } from 'antd-style';
import styles from './layout-card.module.scss';

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
    <Card className={styles.card} hoverable>
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
