import {AppContainer} from "./styles";
import {Column} from "./Column";
import {AddNewItem} from "./AddNewItem";
import {useAppState} from "./State/AppStateContext";
import {addList} from "./State/actions";

export const App = () => {
    const {lists,dispatch} = useAppState()
    return (
        <AppContainer>
            {lists.map((list)=>(
                <Column key={list.id} text={list.text} id={list.id} />
            ))}
            <AddNewItem onAdd={(text)=> dispatch(addList(text))} toggleButtonText={'+ Add new Item'} dark={true}/>
        </AppContainer>

    )
}
