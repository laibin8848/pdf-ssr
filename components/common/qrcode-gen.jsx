import QRious from 'qrious'
import { useEffect } from 'react'

export default function QrcodeGen({qrvalue}) {
    useEffect(()=> {
        if(typeof window !== undefined) {
            new QRious({
                element: document.getElementById('myQrcode'),
                value: qrvalue
            })
        }
    }, [qrvalue])
    return (
        <canvas style={{width: 100, height: 100}} id='myQrcode'></canvas>
    )
}