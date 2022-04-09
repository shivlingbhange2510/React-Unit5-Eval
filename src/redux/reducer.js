import {GET_ALL_EMPLOYEE} from './action'
const init={
    employee:[{id:22, name:'xyz'}],
}
export const reducer=(store=init, action)=>{

    switch(action.type){
        case GET_ALL_EMPLOYEE:
            return{
                ...store, employee:[...store.employee, action.payload]
            }
        default:
            return(store)
    }

}