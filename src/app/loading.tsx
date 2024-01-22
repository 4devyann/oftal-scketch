import { Flex, Spin } from 'antd';

export default async function Loading() {
  return (
    <Flex
      align='center'
      justify='center'
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
      <Spin size='large' />
    </Flex>
  );
}
