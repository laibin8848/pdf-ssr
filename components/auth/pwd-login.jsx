import { Form, Input, Button } from 'antd'
import SendCode from '../common/send-code'
import { accountLogin, accountCodeLogin } from '../../services/account'


export default function PwdLogin ({onDone, codeLogin, pwdLogin}) {
    function onFinish(values) {
        const api = pwdLogin ? accountLogin : accountCodeLogin
        api(values).then(res=> {
            onDone(res.data)
        })
    }

    const [form] = Form.useForm()

    return (
        <div style={{textAlign: 'left'}}>
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 21 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                onFinish={onFinish}
            >
                {
                    pwdLogin && (
                        <>
                            <Form.Item
                                label="账号"
                                name="username"
                                rules={[{ required: true, message: '请输入账号!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="密码"
                                name="password"
                                rules={[{ required: true, message: '请输入密码!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                        </>
                    )
                }
                {
                    codeLogin && (
                        <>
                            <Form.Item
                                label="账号"
                                name="username"
                                rules={[{ required: true, message: '请输入手机/邮箱!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="验证码"
                                name="code"
                                rules={[{ required: true, message: '请输入验证码!' }]}
                            >
                                <Input suffix={<SendCode seconeds={10} getContact={()=> {return form.getFieldValue('username')}} />} />
                            </Form.Item>
                        </>
                    )
                }
                <Form.Item label="&nbsp;" colon={false} style={{textAlign: 'right'}}>
                    <Button type="primary" htmlType="submit">登录</Button>
                </Form.Item>
            </Form>
        </div>
    )
}