import {AppContainer} from "./styles";
import {Column} from "./Column";
import {AddNewItem} from "./AddNewItem";
import {useAppState} from "./State/AppStateContext";

export const App = () => {
    const {lists} = useAppState()
    return (
        <AppContainer>
            {lists.map((list)=>(
                <Column key={list.id} text={list.text} id={list.id} />
            ))}
            <AddNewItem onAdd={console.log} toggleButtonText={'+ Add new Item'} dark={true}/>
        </AppContainer>

    )
}
