import { Form, Input, Button, Checkbox } from 'antd'

export default function PwdLogin ({onDone}) {

    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 18 }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}