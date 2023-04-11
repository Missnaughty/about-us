// 该文件专门为count组件生成action对象
import { INCREMENT,DECREMENT } from "../constant"


// 同步action，object形式，不能开启异步任务
export const  createIncrementAction = (data)=>({type:INCREMENT,data})
export const  createDecrementAction = (data)=>({type:DECREMENT,data})
export const createIncrementAsyncAction=(data,time)=>{
    return (dispatch)=>
    setTimeout(() => {
    dispatch(createIncrementAction(data))
   }, time)
        
           
               
       

    
}