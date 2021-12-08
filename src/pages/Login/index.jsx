import React,{useEffect} from 'react'
import { token } from '../../components/request'
import { Spin, message } from 'antd'

export default function(props){
    useEffect(() => {
        getToken()
    })
    // 换取token
    const getToken=async()=>{
        let code=props.location.search.split('=')[1]
        const res = await token(code)
        if(res.data.code===20000){
            localStorage.setItem('token',res.data.data)
            // 成功后跳转
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
