import { Button, Modal, Tabs } from "antd"
import WechatLogin from "./wechat-login"
import PwdLogin from "./pwd-login"
import { message } from 'antd'
import { setLoginInfo } from '../../util/utils'
// import { accountMine } from "../../services/account"

const TabPane = Tabs.TabPane

export default function LoginBox(props) {
    const { visible, detail = {}, onCancel, onOk, ...restProps } = props

    function loginSuccess(data) {
        // accountMine().then(res=> {
        //     console.log('res', res)
        // })
        setLoginInfo(data)
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
                    {/* <div style={{background: '#ccc', width: 200}}></div> */}
                    <div style={{flex: 1}}>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="账号密码" key="account">
                                <PwdLogin pwdLogin onDone={data=> {
                                    loginSuccess(data)
                                }}/>
                            </TabPane>
                            <TabPane tab="验证码登录" key="phone">
                                <PwdLogin codeLogin onDone={data=> {
                                    loginSuccess(data)
                                }}/>
                            </TabPane>
                            <TabPane tab="微信扫码" key="wechat">
                                <WechatLogin onDone={data=> {
                                    loginSuccess(data)
                                }} />
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </Modal>
        </div>
    )
}