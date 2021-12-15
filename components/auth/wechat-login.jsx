import { useEffect, useState } from 'react'
import { weChatQrcode, getScanInfo } from '../../services/wechat'
import QrcodeGen from '../common/qrcode-gen'

let wechatLoginTimer = null

export default function WechatLogin ({onDone}) {
    const [scanUrl, setScanUrl] = useState('')
    
    useEffect(()=> {
        weChatQrcode().then(res=> {
            setScanUrl(res.data.url)

            wechatLoginTimer && clearInterval(wechatLoginTimer)
            wechatLoginTimer = setInterval(()=> {
                getScanInfo(res.data.uid).then(res=> {
                    if(res.data) {
                        clearInterval(wechatLoginTimer)
                        onDone(res.data.token)
                    }
                })
            }, 3000)
        })

        return ()=> {
            clearInterval(wechatLoginTimer)
        }
    }, [])

    return (
        <div>
            <QrcodeGen qrvalue={scanUrl} />
        </div>
    )
}