import React from "react";
import { ColumnTitle, ColumnContainer} from "./styles";
import {Card} from "./Card";
import {useAppState} from "./State/AppStateContext";

type ColumnProps = {
    text: string
    id:string
}
export const Column = ({text,id}: ColumnProps) => {
    const {getTasksByListId}=useAppState()
    const tasks = getTasksByListId(id)
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {tasks.map((task)=>(
                <Card text={task.text} id={task.id}/>
            ))}
        </ColumnContainer>
    )
}