import styles from '../../styles/Optional.module.css'
import { Button, Input, message } from 'antd'
import { ArrowRightOutlined, CheckCircleOutlined, LockFilled } from '@ant-design/icons'
import useStartJob from '../../hooks/useUploadFiles'
import { useEffect, useRef, useState } from 'react'

function downloadFile(file) {
    const a = document.createElement('a')
    a.download = Math.random()
    a.href = file
    a.setAttribute('target', '_blank')
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

export const OptionPanelOCR = ({pageInfo, fileList, type})=> {
    const {loading, doUpload, clearTimmer, result} = useStartJob()
    const [params, setParams] = useState({
        operate_type: 1
    })

    useEffect(()=> {
        return ()=> {
            clearTimmer()
        }
    }, [])

    useEffect(()=> {
        if(result && result.code == 200 && result.data.result_file) {
            downloadFile(result.data.result_file)
            clearTimmer()
        }
    }, [result])

    return (
        <div className={styles.optPannel}>
            <h1 style={{borderBottom: '1px #ddd solid', padding: '25px 10px'}}>{pageInfo.title || ''}</h1>
            <div className={styles.optPanneChoices}>
                <div className={styles['optPanneChoices-item']} onClick={()=> {setParams({...params, operate_type: 1})}}>
                    无 OCR (光学字符识别) 将带有可选文本的PDF文件转换为您所需文件。
                    {params.operate_type == 1 ? <CheckCircleOutlined /> : ''}
                </div>
                <div className={styles['optPanneChoices-item']} onClick={()=> {setParams({...params, operate_type: 2})}}>
                    OCR（光学字符识别）将带有不可选择文本的扫描PDF文件转换为您所需文件。
                    {params.operate_type == 2 ? <CheckCircleOutlined /> : ''}
                </div>
            </div>
            <div style={{position: 'absolute', bottom: 20, width: '100%'}}>
                <Button loading={loading} disabled={loading} onClick={()=> {doUpload(fileList, params, type)}} type="primary" size="large" style={{width: '90%', height: '60px'}}>
                    {pageInfo.title} <ArrowRightOutlined />
                </Button>
            </div>
        </div>
    )
}

export const OptionPanelNONE = ({pageInfo, fileList, type})=> {
    const {loading, doUpload, clearTimmer, result} = useStartJob()
    const multiple = ['21'].includes(type)
    const disabled = multiple && (!fileList || fileList.length == 1)

    useEffect(()=> {
        return ()=> {
            clearTimmer()
        }
    }, [])

    useEffect(()=> {
        if(result && result.code == 200 && result.data.result_file) {
            downloadFile(result.data.result_file)
            clearTimmer()
        }
    }, [result])

    return (
        <div className={styles.optPannel}>
            <h1 style={{borderBottom: '1px #ddd solid', padding: '25px 10px'}}>{pageInfo.title || ''}</h1>
            <div className={styles.optPanneInfo}>
                {pageInfo.desc || ''}
            </div>
            <div style={{position: 'absolute', bottom: 20, width: '100%'}}>
                <Button loading={loading} disabled={loading || disabled} onClick={()=> {doUpload(fileList, {}, type)}} type="primary" size="large" style={{width: '90%', height: '60px'}}>
                    {pageInfo.title} <ArrowRightOutlined />
                </Button>
            </div>
        </div>
    )
}

export const OptionPanelPWD = ({pageInfo, fileList, type})=> {
    const {loading, doUpload, clearTimmer, result} = useStartJob()
    const password = useRef({
        pwd: '',
        sec: ''
    })

    useEffect(()=> {
        return ()=> {
            clearTimmer()
        }
    }, [])

    useEffect(()=> {
        if(result && result.code == 200 && result.data.result_file) {
            downloadFile(result.data.result_file)
            clearTimmer()
        }
    }, [result])

    function checkPwd() {
        if(!password.current.pwd) {
            message.error('请输入密码！')
            return false
        }
        if(password.current.pwd != password.current.sec && type == 24) {
            message.error('两次密码不一致！')
            return false
        } else {
            return true
        }
    }

    return (
        <div className={styles.optPannel}>
            <h1 style={{borderBottom: '1px #ddd solid', padding: '25px 10px'}}>{pageInfo.title || ''}</h1>
            <div style={{textAlign: 'left', padding: 20}}>
                <span style={{lineHeight: '38px'}}>设置密码来保护你的PDF文件：</span>
                <Input.Password onInput={e=> {password.current.pwd = e.target.value || ''} } size="large" placeholder="输入一个密码" prefix={<LockFilled />} />
                {type == 24 && (
                    <>
                        <span style={{lineHeight: '38px'}}>再次输入你的密码</span>
                        <Input.Password onInput={e=> {password.current.sec = e.target.value || ''} } size="large" placeholder="再次输入一个密码" prefix={<LockFilled />} />
                    </>
                )}
            </div>
            <div style={{position: 'absolute', bottom: 20, width: '100%'}}>
                <Button loading={loading} disabled={loading} onClick={()=> {
                    checkPwd() && doUpload(fileList, {password: password.current.pwd}, type)
                }} type="primary" size="large" style={{width: '90%', height: '60px'}}>
                    {pageInfo.title} <ArrowRightOutlined />
                </Button>
            </div>
        </div>
    )
}

export const OptionPanelSPLIT = ({pageInfo, fileList, type, splitPages})=> {
    const {loading, doUpload, clearTimmer, result} = useStartJob()
    useEffect(()=> {
        return ()=> {
            clearTimmer()
        }
    }, [])

    useEffect(()=> {
        if(result && result.code == 200 && result.data.result_file) {
            downloadFile(result.data.result_file)
            clearTimmer()
        }
    }, [result])

    return (
        <div className={styles.optPannel}>
            <h1 style={{borderBottom: '1px #ddd solid', padding: '25px 10px'}}>{pageInfo.title || ''}</h1>
            <div className={styles.optPanneInfo}>
                当前选中页面：{splitPages.join(',') || '无'}<br />
                {pageInfo.desc || ''}
            </div>
            <div style={{position: 'absolute', bottom: 20, width: '100%'}}>
                <Button loading={loading} disabled={loading || !splitPages.length} onClick={()=> {doUpload(fileList, {cut_interval: splitPages.join(',')}, type)}} type="primary" size="large" style={{width: '90%', height: '60px'}}>
                    {pageInfo.title} <ArrowRightOutlined />
                </Button>
            </div>
        </div>
    )
}

export default function OptionalPanelGen(props) {
    let types = props.type
    if(['10','12','14'].includes(props.type)) {
        types = 'ocr'
    }
    if(['11','13','21','22'].includes(props.type)) {
        types = 'none'
    }
    switch(types) {
        case 'ocr':
            return <OptionPanelOCR {...props} />
            break;
        case 'none':
            return <OptionPanelNONE {...props} />
            break;
        case '24'://pwd set
            return <OptionPanelPWD {...props} />
            break;
        case '25'://pwd
            return <OptionPanelPWD {...props} />
            break;
        case '20'://split
            return <OptionPanelSPLIT {...props} />
            break;
        case '23'://water
            return <OptionPanelNONE {...props} />
            break;
        case '26'://permit
            return <OptionPanelNONE {...props} />
            break;
        default:
            return null
            break;
    }
}