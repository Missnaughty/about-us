// ui组件--容器组件--redux
import { createDecrementAction, 
    createIncrementAction, 
    createIncrementAsyncAction 
} from '../../redux/actions/count_action'
// react-redux 优化  redux，容器组件能够检测redux的状态变化
import { connect } from 'react-redux'
import React, { Component } from 'react'

// 定义ui组件
 class Count extends Component {
    increment = () => {
        const { value } = this.selectNumbers
        this.props.jia(value*1)
    }
    decrement = () => {
        const { value } = this.selectNumbers
        this.props.jian(value*1)
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumbers
        if(this.props.count%2){
            this.props.jia(value*1)
        }
    }
    incrementAsync = () => {
        const { value } = this.selectNumbers
        this.props.asyncJia(value+11,500)
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
                <select ref={c => this.selectNumbers = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            <div>现在楼下的人数啊{this.props.person.length}</div>
            </div>
        )
    }
}
// 传递参数
// 定义容器组件
// 状态 + 方法 + ui组件 connect帮助生成一个容器组件
export default connect( state =>
({ count: state.he ,person:state.rens}) , {
    jia: createIncrementAction,
    jian: createDecrementAction,
    asyncJia: createIncrementAsyncAction
})(Count)

