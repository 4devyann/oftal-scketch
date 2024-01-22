'use client';

import { SketchOutlined } from '@ant-design/icons';
import { Button, Flex, Typography } from 'antd';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;

export default function NotFound() {
  const route = useRouter();

  const handleRedirect = () => {
    route.push('/');
  };
  return (
    <Flex
      align='center'
      justify='center'
      style={{
        width: '100%',
        height: '100vh',
        border: '1px solid',
      }}
    >
      <SketchOutlined
        style={{ fontSize: 200, textAlign: 'center' }}
        twoToneColor={''}
      />
      <Flex
        vertical={true}
        align='center'
        justify='center'
        style={{
          width: '100%',
          height: '100vh',
        }}
      >
        <Flex align='flex-start' justify='center' vertical={true}>
          <Text style={{ fontSize: 72, fontWeight: 'bolder' }}>404...</Text>
          <Title level={4} style={{ margin: 0, padding: 0, marginBottom: 32 }}>
            A página que você requisitou não foi encontrada.
          </Title>
        </Flex>
        <Button
          type='primary'
          style={{ width: 'fit-content', height: 'fit-content' }}
          onClick={handleRedirect}
        >
          <Title style={{ color: '#fff', margin: 0 }} level={5}>
            RETORNAR AO INÍCIO
          </Title>
        </Button>
      </Flex>
    </Flex>
  );
}
