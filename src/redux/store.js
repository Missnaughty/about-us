// 该文件专门用于暴露一个store对象，整个应用只有一个store对象
import { legacy_createStore as createStore,applyMiddleware,combineReducers} from 'redux'
import countReducer from "./reducers/count_reducer"
import personReducer from './reducers/person'
import thunk  from 'redux-thunk'

const allReducers = combineReducers({
    he:countReducer,
    rens:personReducer

})
// 引入为count组件使用的reducer
export default createStore(allReducers,applyMiddleware(thunk))