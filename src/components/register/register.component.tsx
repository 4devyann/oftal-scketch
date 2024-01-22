'use client';

import { Form, Input, Button, Typography } from 'antd';
import styles from './register.module.scss';
import { useRouter } from 'next/navigation';

const { Text } = Typography;

type FieldType = {
  username?: string;
  email?: string;
  password?: string;
};

export default function RegisterComponent() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('login');
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
    handleRedirect();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.login}>
      <Form
        name='basic'
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item<FieldType>
          label='E-mail'
          name='email'
          rules={[{ required: true, message: 'Campo obrigatório' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label='Nome'
          name='username'
          rules={[{ required: true, message: 'Campo obrigatório' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label='Senha'
          name='password'
          rules={[{ required: true, message: 'Campo obrigatório' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button block type='primary' htmlType='submit'>
            Cadastrar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
