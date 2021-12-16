import { Button } from 'antd'
import { useEffect, useState, useRef } from 'react'
import { msgSend } from '../../services/account'

export default function SendCode({seconeds, getContact}) {
    let timer = null
    const count = useRef(0)
    const [num, setNum] = useState(0)

    function start(seconeds) {
        const contact = getContact()
        if(!contact) return
        msgSend({
            user_contact: contact,
            contact_type: 1//1 短信 2 邮箱
        }).then(res=> {
            count.current = seconeds
            timer = setInterval(()=> {
                setNum(count.current)
                if(count.current === 0) {
                    clearInterval(timer)
                    return
                }
                count.current--
            }, 1000)
        })
    }

    useEffect(()=> {
        return ()=> {
            clearInterval(timer)
        }
    }, [])
    
    return (
        <Button disabled={num !== 0} type='text' onClick={()=> {start(seconeds)}}>{num ? `${num}s后重新发送` : '获取手机验证码'}</Button>
    )
}