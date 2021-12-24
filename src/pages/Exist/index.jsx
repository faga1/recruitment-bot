import React from "react";
import successIcon from '../../../public/成功.png'
import errorIcon from '../../../public/error.png'
import './exist.scss'
export default(props)=>{
    // 用来判断是显示电脑端打开,还是已拥有简历
    const isExist = props.match.params.isExist==='true'?true:false
    return(
        <div className="exist">
            <div className="exist-icon">
                <img src={isExist?successIcon:errorIcon}/>
            </div>
            <div className='exist-text'>{isExist?'您的简历已提交至Fanbook人才库,请到移动端投递吧':'请用电脑端打开'}</div>
        </div>
    )
}