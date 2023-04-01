import React from "react";
import { ColumnTitle, ColumnContainer} from "./styles";
import {Card} from "./Card";
import {useAppState} from "./State/AppStateContext";
import {AddNewItem} from "./AddNewItem";
import {addTask} from "./State/actions";
type ColumnProps = {
    text: string
    id:string
}
export const Column = ({text,id}: ColumnProps) => {
    const {getTasksByListId,dispatch}=useAppState()
    const tasks = getTasksByListId(id)
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {tasks.map((task)=>(
                <Card text={task.text} id={task.id}/>
            ))}
            <AddNewItem toggleButtonText="+ Add another card" onAdd={(text) => dispatch(addTask(text, id))} dark/>

        </ColumnContainer>
    )
}