import React from 'react';
import styles from './banner.module.scss';
import { Flex, Typography } from 'antd';
import Image from 'next/image';
import { HomeItemType } from '@/constants/home';

const { Title, Text } = Typography;

const BannerComponent = ({
  description,
  image,
  invert,
  title,
  banner,
}: HomeItemType) => {
  return (
    <div className={styles.banner}>
      <Flex
        align='center'
        justify='center'
        wrap={!invert ? 'wrap-reverse' : 'wrap'}
        vertical={false}
        gap={32}
      >
        {!invert ? (
          <>
            <Flex
              align='center'
              justify='flex-start'
              style={{
                width: '100%',
                maxWidth: '700px',
              }}
              vertical={true}
            >
              <Title level={banner ? 1 : 2}>{title}</Title>
              <Text>{description}</Text>
            </Flex>
            <Image
              src={image}
              alt={image}
              style={{
                width: '100%',
                maxWidth: '400px',
                height: '100%',
              }}
            />
          </>
        ) : (
          <>
            <Image
              src={image}
              alt={image}
              style={{
                width: '100%',
                maxWidth: '400px',
                height: '100%',
              }}
            />
            <Flex
              align='center'
              justify='flex-start'
              style={{
                width: '100%',
                maxWidth: '700px',
              }}
              vertical={true}
            >
              <Title level={banner ? 1 : 2}>{title}</Title>
              <Text>{description}</Text>
            </Flex>
          </>
        )}
      </Flex>
    </div>
  );
};

export default BannerComponent;
