import { useDragLayer } from "react-dnd";
import { useAppState } from "../state/DragAndDropContext";
import Column from "./Column";
import "../../globals.css"
import Card from "./Card";


export const CustomDragLayer = () => {
    const { draggedItem } = useAppState()
    const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset()}))

    
    return draggedItem && currentOffset ? (
        <div className="CustomDragLayerContainer">
            {/*<Column
                id={draggedItem.id}
                text={draggedItem.text}
                isPreview
            />*/}

            {draggedItem.type === "COLUMN" ? (
                <Column
                id={draggedItem.id}
                text={draggedItem.text}
                isPreview
                />
            ) : (
                <Card
                columnId={draggedItem.columnId}
                isPreview
                id={draggedItem.id}
                text={draggedItem.text}
                />
            )}
        </div>
    ) : null
}

