import React from 'react';
import styles from './contact-us.module.scss';
import Icon from '@ant-design/icons';
import { Card, Flex, Skeleton, Typography } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useTheme } from 'antd-style';

const { Text } = Typography;

type ContactUsComponentProps = {
  loading: boolean;
  icon: React.ForwardRefExoticComponent<any>;
  title: string;
  description: string[];
};

export type ContactUsComponentType = Omit<ContactUsComponentProps, 'loading'>;

const ContactUsComponent = ({
  icon,
  loading,
  title,
  description,
}: ContactUsComponentProps) => {
  const token = useTheme();

  return (
    <Card className={styles.card} bordered={false}>
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
          }}
          description={
            <Flex vertical>
              {description?.map((item, index) => (
                <Text key={index}>{item}</Text>
              ))}
            </Flex>
          }
        />
      </Skeleton>
    </Card>
  );
};

export default ContactUsComponent;
