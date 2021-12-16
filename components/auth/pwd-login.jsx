import { Form, Input, Button } from 'antd'
import SendCode from '../common/send-code'
import { accountLogin } from '../../services/account'


export default function PwdLogin ({onDone, codeLogin, pwdLogin}) {

    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 21 }}
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
                {
                    pwdLogin && (
                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                    )
                }
                {
                    codeLogin && (
                        <Form.Item
                            label="验证码"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input suffix={<SendCode seconeds={10} />} />
                        </Form.Item>
                    )
                }
            </Form>
            <div>
                <Button type="primary" htmlType="submit">
                    登录
                </Button>
            </div>
        </div>
    )
}