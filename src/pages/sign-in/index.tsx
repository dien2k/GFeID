import { Image, Form, Input, Button, Checkbox, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import AuthServices from '@/services/auth';
import { requiredMessage } from '@/utils/error-generator';
import { useRequest } from 'ahooks';
import { authStore } from '@/stores/auth-store';
import { RestResponse } from '@/@types/api.type';
import { AxiosError } from 'axios';

interface SignInValues {
  email: string;
  password: string;
  remember: boolean;
}

const SignIn = () => {
  // const [form] = Form.useForm()

  const loginApi = useRequest(AuthServices.login, {
    manual: true,
    onSuccess: (res, form) => {
      const timeExpired = +res.data.expire_in!;

      const expiredAt = Date.now() + timeExpired;

      authStore.setAuth({
        access_token: res.data.access_token!,
        refresh_token: res.data.refresh_token!,
        expired_at: expiredAt,
        email: form[0].email,
      });
    },
    onError: (error) => {
      const { response } = error as AxiosError<RestResponse>;
      // FIXME: move to set form error
      message.error(response!.data.error!.error_message);
    },
  });

  const onFinish = async (values: SignInValues) => {
    loginApi.run({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-5 bg-gray-100">
      <Image
        height={80}
        className="rounded-full"
        src="/logo.png"
        preview={false}
      />
      <Card className="w-full max-w-md">
        <h2 className="pb-4 text-2xl font-bold text-gray-900">Sign In</h2>
        <Form
          name="normal_login"
          className="mt-4"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          disabled={loginApi.loading}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: requiredMessage('Email'),
                type: 'email',
              },
            ]}
          >
            <Input
              type="text"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className="login-form-button w-full"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SignIn;
