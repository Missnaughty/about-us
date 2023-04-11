// 该文件是用于创建一个为count组件服务的reducer
//   reducer函数会接受两个参数，之前的状态和动作对象
import { INCREMENT,DECREMENT } from "../constant"
const initState = 0
export default function countReducer(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState
    }


}