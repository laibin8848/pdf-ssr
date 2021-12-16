import { useEffect, useState } from "react"
import { upload, transFiles, searchTask } from '../services/trans'
import { vipRule } from '../util/utils'

let searchTaskTimer = null

export default function useStartJob() {
    const [loading, setLoading] = useState(false)
    const [taskId, setTaskId] = useState('')
    const [result, setResult] = useState(null)
    
    function doUpload(fileList, params, type) {
        //todo, check user login and VIP here
        if(!vipRule()) {
            document.getElementById('login-btn').click()
            return
        }
        setLoading(true)
        const post = new FormData()
        fileList.map(item=> post.append('files', item.originFileObj))
        upload(post).then(res=> {
            const data = {
                'transf_type': type,
                'multiple_source_file': res.data.results.map(item => item['uid']),
                'other': params
            }
            transFiles(data).then(res=> {
                setTaskId(res.data.task_id || '')
            })
        })
    }

    useEffect(()=> {
        if(taskId) {
            if(searchTaskTimer) {
                clearInterval(searchTaskTimer)
            }
            searchTaskTimer = setInterval(()=> {
                searchTask(taskId).then(res=> {
                    setLoading(false)
                    setResult(res)
                })
            }, 2000)
        }
    }, [taskId])

    function clearTimmer() {
        clearInterval(searchTaskTimer)
    }

    return {
        loading,
        doUpload,
        clearTimmer,
        result
    }
}