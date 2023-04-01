import React, {createContext,Dispatch, FC, ReactNode, useContext} from "react";
import {AppState, appStateReducer, List, Task} from "./appStateReducer";
import {useImmerReducer} from "use-immer";
import {Action} from "./actions";



const appData: AppState = {
    lists: [
        {
            id: '1',
            text: "Morning Tasks",
            tasks: [{id: "1", text: "I have to make breakfast for sunday"}]
        },
        {
            id: '2',
            text: "Evening Tasks",
            tasks: [{id: "2", text: "I have to go to evening wald"}]
        }
    ]
}

type AppStateContextProps = {
    lists :List[]
    getTasksByListId(id:string):Task[]
    dispatch: Dispatch<Action>
}

const AppStateContext = createContext<AppStateContextProps>(
    {} as AppStateContextProps
)
export const useAppState = ()=> {
    return useContext(AppStateContext)
}
interface AppStateProviderProps {
    children: ReactNode
}
export const AppStateProvider:FC<AppStateProviderProps>= ({children}) => {
    const[state,dispatch]=useImmerReducer(appStateReducer,appData)
    const {lists}=state
    const getTasksByListId = (id:string) => {
        return lists.find((list)=> list.id === id )?.tasks || []
    }
    return (
        <AppStateContext.Provider value={{lists,getTasksByListId,dispatch}}>
            {children}
        </AppStateContext.Provider>
    )


}