import { useEffect, useRef, useState } from "react"
import * as PDFJS from 'pdfjs-dist'
import { CheckCircleOutlined } from '@ant-design/icons'
PDFJS.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.943/pdf.worker.js'

export default function PdfCard(props) {
    const { pdf, multiple, onPageChange } = props
    const [pages, setPages] = useState(1)
    const selects = useRef([])

    useEffect(()=> {
        const uuid = props.pdf.uid
        const containerWrap = document.getElementById(uuid)
        PDFJS.getDocument(URL.createObjectURL(props.pdf.originFileObj)).then(async pdf=> {
            multiple && setPages(pdf.numPages)
            for(let index = 0; index< pdf.numPages; index++) {
                const container = containerWrap.getElementsByClassName("canvas")[index]
                const page = await pdf.getPage(index + 1)
                const scale = 0.9
                const viewport = page.getViewport(scale, 100)
                const canvas = document.createElement('canvas')
                canvas.setAttribute('style', `width:110px;height:140px; `)
                const context = canvas.getContext('2d')
                canvas.height = 760
                canvas.width = 550
                const renderContext = {
                    canvasContext: context,
                    viewport
                }
                page.render(renderContext)
                container && container.appendChild(canvas)
            }
        })
    }, [])

    function updateSel(page, isIn = false) {
        if(isIn) {
            const arr = selects.current.filter(item => { return item != page })
            selects.current = arr
        } else {
            selects.current.push(page)
        }
        return selects.current
    }

    function canvasList() {
        const canvas = []
        for(let i=0; i< pages; i++) {
            const page = i + 1
            canvas.push(<div className="pdf-card canvas" key={page} onClick={()=> {
                const arr = updateSel(page, selects.current.includes(page))
                onPageChange([...arr])
            }}>
                {selects.current.includes(page) ? (<span className="selctIcon"><CheckCircleOutlined /></span>) : null}
                <span className="pageNo">{page}</span>
            </div>)
        }
        return canvas
    }

    if(multiple) {
        return (<div className="pdf-multiple-card" id={pdf.uid}>{canvasList()}</div>)
    }

    return (
        <div className="pdf-card" id={pdf.uid}>
            <div className="canvas"></div>
            <div title={pdf.name} className="canvas-title">{pdf.name}</div>
        </div>
    )
}