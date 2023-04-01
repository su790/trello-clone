import React, {createContext, FC, ReactNode, useContext} from "react";


type Task = {
    id: string
    text: string
}

type List = {
    id: string
    text: string
    tasks: Task[]
}

export type AppState = {
    lists: List[]
}

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
    const {lists} = appData
    const getTasksByListId = (id:string) => {
        return lists.find((list)=> list.id === id )?.tasks || []
    }
    return (
        <AppStateContext.Provider value={{lists,getTasksByListId}}>
            {children}
        </AppStateContext.Provider>
    )


}