import request,{ axiosInstance } from "./index.js";
import { message } from "antd";

// 判断用户是否已经拥有简历
export async function isExist(props){
    const res=request.get('/resumes/exist')
    if(res.data){
        props.history.push('/exist')
    }
}

// 提交简历
export async function sendForm(formData){
    const res=await request.post('/resumes',formData)
    if(res.code===20000){
        message.success('简历提交成功')
    }
    return res
}

// 拿到code后向后端换取token
export async function token(code,props){
    let decode_url=decodeURIComponent(code)
    const res=await axiosInstance({url:'/login',method:'post',params:{code:decode_url}})
    if(res.data.code===20000){
        localStorage.setItem('token',res.data.data)
        return res
    }
    message.error('获取授权失败')
}
