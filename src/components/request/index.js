import axios from "axios";
import { message } from "antd";

const baseURL='https://liuchaoyang-8099.cloud.wizzstudio.com'
// 请求拦截器
axios.interceptors.request.use((config)=>{
    if(localStorage.getItem('token')){
        config.headers.token=localStorage.getItem('token')
    }
    return config
})
// 响应拦截器
axios.interceptors.response.use((response)=>{
    if(response.data.code===41100){
        window.location.href='http://auth.risingsun.pro/open/oauth2/authorize?response_type=code&client_id=303801896127303680'
    }
    return response
})

// 判断用户是否已经拥有简历
export async function checkExist(){
    return await axios.get(`${baseURL}/resumes/exist`)
}

// 提交简历
export async function sendForm(formData){
    const res=await axios.post(`${baseURL}/resumes`,formData)
    if(res.data.code!==20000){
        return message.error(res.data.message)
    }
    sessionStorage.getItem('info')&&sessionStorage.removeItem('info')
    message.success('简历提交成功')
    return res
}

// 拿到code后向后端换取token
export async function token(code){
    let decode_url=decodeURIComponent(code)
    const res=await axios({url:`${baseURL}/login`,method:'post',params:{code:decode_url}})
    if(res.data.code===20000){
        localStorage.setItem('token',res.data.data)
        return res
    }
    message.error(res.data.message)
}
