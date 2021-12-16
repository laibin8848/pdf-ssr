import { Button } from 'antd'
import { useEffect, useState, useRef } from 'react'

export default function SendCode({seconeds}) {
    let timer = null
    const count = useRef(0)
    const [num, setNum] = useState(0)

    function start(seconeds) {
        count.current = seconeds
        timer = setInterval(()=> {
            setNum(count.current)
            if(count.current === 0) {
                clearInterval(timer)
                return
            }
            count.current--
        }, 1000)
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