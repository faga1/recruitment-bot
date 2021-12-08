import React,{useEffect} from 'react'
import request,{axiosInstance} from '@/components/request'
import { isExist, token } from '../../components/request/request'
import { Spin, message } from 'antd'


export default function(props){
    useEffect(() => {
        getToken()
    })
    const getToken=async()=>{
        let code=props.location.search.split('=')[1]
        let decode_url=decodeURIComponent(code)
        const res=await axiosInstance({url:'/login',method:'post',params:{code:decode_url}})
        console.log(await axiosInstance.post('/resumes'))
        
        if(res.data.code===20000){
            localStorage.setItem('token',res.data.data)
            props.history.push('/resume')
            return res
        }
        message.error('获取授权失败')
    }
    
    return (
            <div className='loading' style={{width:'10vw',margin:'45vh auto'}}>
                <Spin size="large" />
            </div>
        )
    
}
