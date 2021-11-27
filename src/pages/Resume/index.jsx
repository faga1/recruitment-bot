import React,{useEffect}from "react";
import {Form,Input,Avatar,Button} from 'antd'
import { UserOutlined } from '@ant-design/icons';
import './resume.scss'
import addIcon from '../../../public/添加.png'
import axios from 'axios'

export default function(){
    useEffect(() => {
        redirect()
    })
    var redirect = async()=>{
        var params={response_type:'code',client_id:'303466858458255360'}
        const res=await axios({
            url:'http://auth.risingsun.pro/auth',
            method:'get',
            params,
        })
        console.log(res);
    }
        
    return (
        <div className='resume'>
            <div className="resume-container">
                <div className="resume-header">
                    <div className='resume-header-text'>提交简历</div>
                    <div className='resume-header-img'></div>
                </div>
                <div className='resume-content'>
                    <Form layout='vertical'>
                        <Form.Item label='姓名'>
                            <Input type="text" placeholder='单行输入'/>
                        </Form.Item>
                        <Form.Item label='性别'>
                            <Input type="text" placeholder='单行输入'/>
                        </Form.Item>
                        <Form.Item label='年龄'>
                            <Input type="text" placeholder='单行输入'/>
                        </Form.Item>
                        <Form.Item label='工作年限'>
                            <Input type="text" placeholder='单行输入'/>
                        </Form.Item>
                        <Form.Item label='现住地址'>
                            <Input type="text" placeholder='单行输入'/>
                        </Form.Item>
                        <Form.Item label='联系电话'>
                            <Input type="text" placeholder='单行输入'/>
                        </Form.Item>
                        <Form.Item label='邮箱号码'>
                            <Input type="text" placeholder='单行输入'/>
                        </Form.Item>
                        <Form.Item label='求职岗位'>
                            <Input type="text" placeholder='单行输入'/>
                        </Form.Item>
                        <Form.Item label='个人描述'>
                            <Input.TextArea  placeholder='单行输入' />
                        </Form.Item>
                    </Form>
                    <div className='resume-right'>
                        <div className='resume-userInfo'>
                            <Avatar size={100} icon={<UserOutlined />} />
                            <div className='resume-username'>用户123</div>
                        </div>
                        <div className='resume-addResume'>
                            <div className='box-solid'>
                                <div className='box-dashed'>
                                    <img src={addIcon} alt="添加简历" />
                                </div>
                            </div>
                            <div className='addResume-text'>上传简历</div>
                            <div className='text-remark'>(上传电子文件，不超过10M)</div>
                        </div>
                        <Button type='primary'>提交</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}