import { message } from 'antd'

export const pageConfig = (type) => {
    const pageInfo = {
        title: '',
        desc: ''
    }
    switch(type) {
        case '20':
            pageInfo.title = '拆分PDF'
            pageInfo.desc = '拆分出1个页面，或者所有页面，以便将这些页面转换为独立的PDF文件。'
            break
        case '21':
            pageInfo.title = '合并PDF'
            pageInfo.desc = '合并PDF文件，并按照您的喜好排序，简单又快速！'
            break
        case '22':
            pageInfo.title = '提取图片'
            pageInfo.desc = '合并PDF文件，并按照您的喜好排序，简单又快速！'
            break
        case '23':
            pageInfo.title = '添加水印'
            pageInfo.desc = '只需几秒钟，即可给你的PDF文件添加图片或文字水印。可选择水印的位置、透明度和字体。'
            break
        case '24':
            pageInfo.title = 'PDF加密'
            pageInfo.desc = '用密码给PDF文件加密， 以确保敏感数据的机密性。'
            break
        case '25':
            pageInfo.title = 'PDF解密'
            pageInfo.desc = '删除PDF文件的保护密码，以便您按照自己的需求使用它。'
            break
        case '26':
            pageInfo.title = 'PDF权限限制'
            pageInfo.desc = 'PDF权限限制'
            break
        case '10':
            pageInfo.title = 'PDF转WORLD'
            pageInfo.desc = '将你的PDF转换为WORD，并保持高准确度。 我们利用 Solid Documents的技术。'
            break
        case '11':
            pageInfo.title = 'PDF转图片'
            pageInfo.desc = '提取PDF文件中的所有图片，或将每一页转换为JPG图片。'
            break
        case '12':
            pageInfo.title = 'PDF转TXT'
            pageInfo.desc = '将你的PDF转换为TXT，并保持高准确度。'
            break
        case '13':
            pageInfo.title = 'PDF转PPT'
            pageInfo.desc = '将你的PDF转换为PPT，并保持高准确度。'
            break
        case '14':
            pageInfo.title = 'PDF转EXCEL'
            pageInfo.desc = '将你的PDF转换为EXCEL，并保持高准确度。'
            break
        default:
            break
    }
    return pageInfo
}

export const customerMsg = (content) => {
    message.success({
        content: content,
        style: {
            marginTop: '20vh',
        },
    })
}

export const setLoginInfo = (data) => {
    if(localStorage) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
    } 
}

export const getLoginInfo = () => {
    if(typeof window === undefined) {
        return {}
    }
    const user = localStorage.getItem('user')
    console.log('xx', JSON.parse(user))
    return {
        token: localStorage.getItem('token'),
        user: JSON.parse(user)
    }
}

export const loginOut = () => {
    if(localStorage) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }
}