import {TodolistType} from "../App";
import {v1} from "uuid";


export const TasksReducer = (state:TodolistType[],action:ActionType):TodolistType[] => {
    switch (action.type){
        case "REMOVE-TODOLIST":{
            return state.filter((el)=>el.id !== action.payload.id)
        }
        case 'ADD-TODO':{
            const newID = v1()
            const newTodo:TodolistType = {id:newID,title:action.payload.title,filter:'all'}
            return [...state,newTodo]
        }

        default:return state
    }
}
type ActionType = RemoveTodolistACType | addTodolistAC

type RemoveTodolistACType = ReturnType<typeof removeTodolistActionCreator>
export const removeTodolistActionCreator = (id:string) => {
    return{
        type:'REMOVE-TODOLIST',
        payload:{
            id
        }
    }as const
}

type addTodolistAC = ReturnType<typeof addTodolistActionCreator>
export const addTodolistActionCreator = (title:string) => {
    return{
        type:'ADD-TODO',
        payload:{
            title
        }
    }as const
}