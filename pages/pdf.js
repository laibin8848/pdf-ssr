import { useEffect, useRef, useState } from 'react'
import pdfStyles from '../styles/Pdf.module.css'
import Uploader from '../components/common/uploader'
import PdfCard from '../components/pdf/pdf-card'
import { pageConfig } from '../util/utils'
import { useRouter } from 'next/router'
import OptionalPanelGen from '../components/pdf/option-panel'

export default function Pdf() {
  const router = useRouter()
  const queryType = router.query.type
  const [fileList, setFileList] = useState([])
  const pageInfo = useRef({ title: '', desc: '' })
  const uploadProps = {
    name: 'files',
    showUploadList: false,
    onChange: ({fileList})=> {
      setFileList(fileList)
    },
    fileList: fileList
  }
  const [splits, setSplits] = useState([])

  useEffect(()=> {
    pageInfo.current = pageConfig(queryType)
    setFileList([])
  }, [queryType])

  return (
    <div className={pdfStyles.container}>
      <div className={pdfStyles.mainPannel}>
        {!fileList.length && (<h1 style={{marginTop: 80}}>{pageInfo.current.title}</h1>)}
        {!fileList.length && (<h3>{pageInfo.current.desc}</h3>)}
        <Uploader queryType={queryType} accept=".pdf" className={fileList.length ? pdfStyles.plusBtn : ''} fLength={fileList.length} title={!fileList.length ? '选择一个PDF文件' : ''} type={!fileList.length ? 'button' : ''} {...uploadProps} />
        {(fileList.length > 0) && (
          <div className={pdfStyles.fileCards}>
            {
              fileList.map(item=> {
                return (
                  <PdfCard onPageChange={val => {setSplits(val)}} multiple={queryType==20} key={item.uid} pdf={item} />
                )
              })
            }
          </div>
        )}
      </div>
      {(fileList.length > 0) && (
        <OptionalPanelGen splitPages={splits} pageInfo={pageInfo.current} fileList={fileList} type={queryType} />
      )}
    </div>
  )
}
