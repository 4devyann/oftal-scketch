'use client';

import { Form, Input, Button, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import styles from './login.module.scss';

const { Text } = Typography;

type FieldType = {
  username?: string;
  password?: string;
};

export default function LoginComponent() {
  const router = useRouter();

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
    handleRedirect('layout');
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
            Entrar
          </Button>
        </Form.Item>

        <Form.Item>
          <Text>Não tem cadastro ? </Text>{' '}
          <Button
            type='link'
            style={{ padding: 0 }}
            onClick={() => handleRedirect('cadastrar')}
          >
            Cadastre-se aqui
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
