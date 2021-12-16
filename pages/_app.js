import '../styles/globals.css'
import 'antd/dist/antd.min.css'
import { Menu, Modal } from 'antd'
import Link from 'next/link'
import { CaretDownOutlined } from '@ant-design/icons'
import LoginBox from '../components/auth/login-box'
import useOpenModal from '../hooks/useOpenModal'
import { useState, useEffect } from 'react'
import { getLoginInfo, loginOut } from '../util/utils'

const { SubMenu } = Menu

function UserInfo() {
  const [refresh, setRefresh] = useState('')
  const [loginInfo, setLoginInfo] = useState({})

  useEffect(()=> {
    setLoginInfo(getLoginInfo())
  }, [refresh])

  return (
    <div style={{cursor: 'pointer'}}>
      {
        loginInfo.token ? <span onClick={
          ()=> {
            Modal.confirm({
              content: '是否退出登录？',
              onOk: ()=> {
                loginOut()
                setRefresh(Math.random())
              }
            })
          }
        }>{loginInfo.user ? loginInfo.user.username : ''}</span> : <span onClick={()=> { useOpenModal(LoginBox, {onOk: ()=> { setRefresh(Math.random()) }}) }}>登录</span>
      }
    </div>
  )
}


function MyApp({ Component, pageProps }) {
  return (
    <div className="global-layout">
      <div className="global-layout-nav">
        <div>
          <Link  href="/">
            <a><img src="https://www.ilovepdf.com/img/ilovepdf.svg" height="20px" style={{marginLeft: 20}} /></a>
          </Link>
        </div>
        <Menu mode="horizontal" style={{flex: 1, borderBottom: 'none'}}>
          <SubMenu key="SubMenubb" title={(<>排序PDF文件 <CaretDownOutlined /></>)}>
            <Menu.Item key="pdf:20">
              <Link href="/pdf?type=20"><a>拆分PDF</a></Link>
            </Menu.Item>
            <Menu.Item key="pdf:21">
              <Link href="/pdf?type=21"><a>合并PDF</a></Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="SubMenubb1" title={(<>从PDF转换到其它格式 <CaretDownOutlined /></>)}>
            <Menu.Item key="pdf:10">
              <Link href="/pdf?type=10"><a>PDF转WORLD</a></Link>
            </Menu.Item>
            <Menu.Item key="pdf:11">
              <Link href="/pdf?type=11"><a>PDF转图片</a></Link>
            </Menu.Item>
            <Menu.Item key="pdf:12">
              <Link href="/pdf?type=12"><a>PDF转TXT</a></Link>
            </Menu.Item>
            <Menu.Item key="pdf:13">
              <Link href="/pdf?type=13"><a>PDF转PPT</a></Link>
            </Menu.Item>
            <Menu.Item key="pdf:14">
              <Link href="/pdf?type=14"><a>PDF转EXCEL</a></Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="SubMenubb2" title={(<>PDF文件的安全 <CaretDownOutlined /></>)}>
            <Menu.Item key="pdf:24">
              <Link href="/pdf?type=24"><a>PDF加密</a></Link>
            </Menu.Item>
            <Menu.Item key="pdf:25">
              <Link href="/pdf?type=25"><a>PDF解密</a></Link>
            </Menu.Item>
            <Menu.Item key="pdf:26">
              <Link href="/pdf?type=26"><a>PDF权限限制</a></Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="SubMenubb3" title={(<>编辑PDF <CaretDownOutlined /></>)}>
            <Menu.Item key="pdf:22">
              <Link href="/pdf?type=22"><a>提取图片</a></Link>
            </Menu.Item>
            <Menu.Item key="pdf:23">
              <Link href="/pdf?type=23"><a>添加水印</a></Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
        <div className='user-info'>
          <UserInfo />
        </div>
      </div>
      <div className="global-layout-main">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
