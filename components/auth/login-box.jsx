import { Modal, Tabs } from "antd"
import WechatLogin from "./wechat-login"
import PwdLogin from "./pwd-login"
import { message } from 'antd'
import { setLoginInfo } from '../../util/utils'

const TabPane = Tabs.TabPane

export default function LoginBox(props) {
    const { visible, detail = {}, onCancel, onOk, ...restProps } = props

    function loginSuccess(token) {
        setLoginInfo(token)
        message.success({
            content: '登录成功！',
            style: {marginTop: '20vh'}
        })
        onOk()
    }

    return (
        <div>
            <Modal 
                style={{width: '80%',textAlign: 'center'}}
                {...restProps}
                title=""
                visible={visible} 
                onCancel={onCancel} 
                maskClosable={false}
                footer={null}
            >
                <div style={{display: 'flex'}}>
                    <div style={{background: '#ccc', width: 200}}></div>
                    <div>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="账号密码" key="account">
                                <PwdLogin />
                            </TabPane>
                            <TabPane tab="验证码登录" key="phone">
                                <PwdLogin />
                            </TabPane>
                            <TabPane tab="微信扫码" key="wechat">
                                <WechatLogin onDone={token=> {
                                    loginSuccess(token)
                                }} />
                            </TabPane>
                            <TabPane tab="QQ扫码" key="qq">
                                <WechatLogin onDone={token=> {
                                    loginSuccess(token)
                                }} />
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </Modal>
        </div>
    )
}