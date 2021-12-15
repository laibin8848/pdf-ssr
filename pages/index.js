import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles['home-title']}>
          <h1>PDF爱好者的在线工具</h1>
          <h2 style={{width: '70%', margin: 'auto', fontSize: 16}}>完全免费、易于使用、丰富的PDF处理工具，包括：合并、拆分、压缩、转换、旋转和解锁PDF文件，以及给PDF文件添加水印的工具等。仅需几秒钟即可完成。</h2>
      </div>
      <div className="item-box">
        <div className="item-box-item">
          <div className="icon MergePDF"></div>
          <h2 style={{margin: '16px 0'}}>合并PDF</h2>
          <p>合并PDF文件，并按照您的喜好排序，简单又快速！</p>
        </div>
        <div className="item-box-item">
          <div className="icon SplitPDF"></div>
          <h2 style={{margin: '16px 0'}}>拆分 PDF</h2>
          <p>拆分出1个页面，或者所有页面，以便将这些页面转换为独立的PDF文件。</p>
        </div>
        <div className="item-box-item">
          <div className="icon PDFtoWord"></div>
          <h2 style={{margin: '16px 0'}}>PDF 转换至 Word</h2>
          <p>轻松地把PDF转换为可编辑的DOC和DOCX文件。转换后的WORD文件几乎100%正确。</p>
        </div>
        <div className="item-box-item">
          <div className="icon PDFtoJPG"></div>
          <h2 style={{margin: '16px 0'}}>PDF转图片</h2>
          <p>提取PDF文件中的所有图片，或将每一页转换为JPG图片。</p>
        </div>
        <div className="item-box-item">
          <div className="icon MergePDF"></div>
          <h2 style={{margin: '16px 0'}}>PDF转TXT</h2>
          <p>将你的PDF转换为可编辑的TXT文件。</p>
        </div>
        <div className="item-box-item">
          <div className="icon PDFtoPowerpoint"></div>
          <h2 style={{margin: '16px 0'}}>PDF转PPT</h2>
          <p>将你的PDF转换为可编辑的PPT和PPTX幻灯片文件。</p>
        </div>
        <div className="item-box-item">
          <div className="icon PDFtoExcel"></div>
          <h2 style={{margin: '16px 0'}}>PDF转EXCEL</h2>
          <p>只需几秒钟，即可将数据直接从PDF文件提取至Excel 电子表格中。</p>
        </div>
        <div className="item-box-item">
          <div className="icon ProtectPDF"></div>
          <h2 style={{margin: '16px 0'}}>PDF加密</h2>
          <p>使用密码来保护PDF文件。给PDF文件加密， 以防止未经授权的访问。 </p>
        </div>
        <div className="item-box-item">
          <div className="icon UnlockPDF"></div>
          <h2 style={{margin: '16px 0'}}>PDF解密</h2>
          <p>删除PDF文件的保护密码，以便您按照自己的需求使用它。</p>
        </div>
        <div className="item-box-item">
          <div className="icon SignPDF"></div>
          <h2 style={{margin: '16px 0'}}>PDF权限限制</h2>
          <p>给PDF文件添加权限限制。</p>
        </div>
        <div className="item-box-item">
          <div className="icon PDFtoJPG"></div>
          <h2 style={{margin: '16px 0'}}>提取图片</h2>
          <p>提取PDF文件中的所有图片，或将每一页转换为JPG图片。</p>
        </div>
        <div className="item-box-item">
          <div className="icon Watermark"></div>
          <h2 style={{margin: '16px 0'}}>添加水印</h2>
          <p>只需几秒钟，即可给你的PDF文件添加图片或文字水印。可选择水印的位置、透明度和字体。</p>
        </div>
      </div>
      <div style={{textAlign: 'center', padding: '0 0 140px 0'}}>
        这里以下内容待定~
      </div>
    </div>
  )
}
