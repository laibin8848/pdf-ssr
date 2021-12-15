import { Button, Upload } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

export default function Uploader(props) {
    const { queryType, multiple, type, title,fLength, ...restProps } = props
    const single = ['20'].includes(queryType) ? true : false
    const disabled = (single && fLength == 1)

    if(disabled) {
        return null
    }

    return (
        <Upload {...restProps} disabled={disabled}>
            {
                type == 'button' ?
                    <Button type="primary" size="large">{title}</Button>
                    : (
                        <div style={{background: disabled ? '#ddd' : '#1890ff', borderRadius: 30, cursor: 'pointer', color: '#fff', padding: 10, position: 'relative'}}>
                            <div style={{width: 30, height: 30, background: disabled ? '#ddd' : '#1890ff', borderRadius: 30, position: 'absolute', top: -20, left: -10, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <span>{fLength}</span>
                            </div>
                            <PlusOutlined style={{fontSize: 30}}/>
                        </div>
                    )
            }
            
        </Upload>
    )
}