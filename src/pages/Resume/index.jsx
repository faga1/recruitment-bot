import React,{useEffect,useState}from "react";
import {Form,Input,Button,Upload,Select,message} from 'antd'
import './resume.scss'
import addIcon from '../../../public/添加.png'
import {  sendForm,checkExist } from "../../components/request";

const {Option}=Select
export default function(props){
    const [pdfFile,setPdfFile]=useState()
    const [form]=Form.useForm()
    const [btnDisable,setBtnDisable]=useState(false)
    useEffect(() => {
        if(checkPlatform()) return;
        redirect()
        isExist()
        if(sessionStorage.getItem('info')){
            form.setFieldsValue(JSON.parse(sessionStorage.getItem('info')))
        }
    },[])
    // 用来判断是否用手机打开
    const checkPlatform=()=>{
        var isMobile = /Android|webOS|iPhone|BlackBerry/.test(navigator.userAgent)
        if (isMobile) {
            message.warning('请使用电脑打开')
            props.history.replace('/exist/false')
            return true
        }
        return false
    }
    // 没有token,跳转授权页
    const redirect = async()=>{
        if(!localStorage.getItem('token')){
            window.location.href='http://auth.risingsun.pro/open/oauth2/authorize?response_type=code&client_id=303801896127303680'
        }
        
    }
    // 判断简历是否存在
    const isExist=async()=>{
        const res= await checkExist()
        console.log(res.data.code);
        if(res.data.data){
            props.history.replace('/exist/true')
        }
    }
    const sendResume=()=>{
        
        if(!pdfFile){
            message.error('请上传简历')
            return
        }
        // 表单预验证
        form.validateFields().then(async(val)=>{
            // window.location.href='http://auth.risingsun.pro/open/oauth2/authorize?response_type=code&client_id=303801896127303680'
            sessionStorage.setItem('info',JSON.stringify(val))
            let formData=new FormData()
            for(let i in val){
                formData.append(i,val[i])
            }
            formData.append('file',pdfFile)
            formData.get('work_year')
            setBtnDisable(true)
            const res = await sendForm(formData)
            setBtnDisable(false)
            if(res.data.code===20000){
                props.history.replace('/exist/true')
            }
            
        })
        
    }
    
    return (
        <div className='resume'>
            <div className="resume-container">
                <div className="resume-header">
                    <div className='resume-header-text'>提交简历</div>
                    <div className='resume-header-img'></div>
                </div>
                <div className='resume-content'>
                    <Form  layout='vertical' form={form}>
                        <Form.Item 
                            name="name"
                            label="姓名"
                            rules={[
                              {
                                required: true,
                                message: '请输入你的姓名',
                              },
                            ]}
                            >
                            <Input type="text" placeholder='单行输入'/>
                        </Form.Item>
                        <Form.Item 
                            label='性别'
                            name='sex'
                            rules={[
                                {
                                required: true,
                                message: '请输入你的性别',
                                },
                            ]}>
                            <Select type="text" placeholder='单行输入'>
                                <Option value={1}>男</Option>
                                <Option value={0}>女</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item 
                            label='年龄'
                            name='age'
                            rules={[
                                {
                                required: true,
                                message: '请输入你的年龄',
                                },
                                {pattern:/^[0-9]*$/,message:'年龄只允许填写数字'}
                            ]}>
                            <Input type="text" placeholder='单行输入'/>
                        </Form.Item>
                        <Form.Item 
                            label='工作年限'
                            name='workYear'
                            rules={[
                                {
                                required: true,
                                message: '请输入你的工作年限',
                                },
                            ]}>
                            <Select type="text" placeholder='单行输入'>
                                <Option value='应届'>应届</Option>
                                <Option value='一年'>一年</Option>
                                <Option value='两年'>两年</Option>
                                <Option value='三年'>三年</Option>
                                <Option value='三到五年'>三到五年</Option>
                                <Option value='五到十年'>五到十年</Option>
                                <Option value='十年以上'>十年以上</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item 
                            label='现住地址'
                            name='address'
                            rules={[
                                {
                                  required: true,
                                  message: '请输入你的现住地址',
                                },
                              ]}>
                            <Input type="text" placeholder='单行输入'/>
                        </Form.Item>
                        <Form.Item 
                            label='联系电话'
                            name='contactNumber'
                            rules={[
                                {
                                  required: true,
                                  message: '请输入你的联系电话',
                                },
                                {pattern:/^1[3-9]\d{9}$/,message:'请输入正确格式电话'}

                              ]}
                            validateTrigger='onBlur'>
                            <Input type="text" placeholder='单行输入'/>
                        </Form.Item>
                        <Form.Item 
                            label='邮箱号码'
                            name='emailAddress'
                            rules={[
                                {
                                  required: true,
                                  message: '请输入你的邮箱号码',
                                },
                                {pattern:/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,message:'请按照邮箱格式输入'}
                              ]}
                              validateTrigger='onBlur'>
                            <Input type="text" placeholder='单行输入'/>
                        </Form.Item>
                        <Form.Item 
                            label='学历'
                            name='degree'
                            rules={[
                                {
                                  required: true,
                                  message: '请输入你的学历',
                                },
                              ]}>
                            <Input type="text" placeholder='单行输入'/>
                        </Form.Item>
                        <Form.Item 
                            label='个人描述'
                            name='personalDesc'
                            rules={[
                                {
                                required: true,
                                message: '请输入你的个人描述',
                                },
                            ]}>
                            <Input.TextArea  placeholder='单行输入' />
                        </Form.Item>
                        
                    </Form>
                    <div className='resume-right'>
                        <div className='resume-addResume'>
                            <Upload 
                                accept='application/pdf'
                                beforeUpload={(file)=>{
                                    if(file.size>2000000){
                                        message.error('上传文件不得超过2M')
                                        return Promise.reject()
                                    }else{
                                        setPdfFile(file)
                                    }
                                    return false
                                }}
                                onRemove={()=>{
                                    setPdfFile(null)
                                }}
                            >
                                <div className='box-solid' >
                                    <img src={addIcon} alt="添加简历" />
                                </div>
                            </Upload>
                            <div className='addResume-text'>上传简历</div>
                            <div className='text-remark'>(上传电子文件，不超过2M)</div>
                        </div>
                        <Button type='primary' onClick={sendResume} disabled={btnDisable}>提交</Button>
                    </div>
                </div>
            </div>
        </div>
    
    )
}
                        