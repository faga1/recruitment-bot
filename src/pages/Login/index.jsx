import React,{useEffect} from 'react'
import axios from 'axios'

export default function(props){
    useEffect(() => {
        getToken()

        return () => {
            
        }
    })
    var getToken=async()=>{
        let code=props.location.search.split('=')[1]
        const res=await axios({url:'https://liuchaoyang-8098.cloud.wizzstudio.com/code',method:'get',params:{code}})
        
    }
    return (
            <div>
                login
            </div>
        )
    
}
