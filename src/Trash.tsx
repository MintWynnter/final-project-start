import React from "react";
import { useDragLayer, useDrop } from "react-dnd";
import { ItemTypes } from "./constants";
import { DragTile } from "./Interfaces/DragTile";

export function Trashcan({
    setBoxArray,
    boxArray
}: {
    setBoxArray: React.Dispatch<React.SetStateAction<DragTile[]>>;
    boxArray: DragTile[];
}): JSX.Element {
    const trashHeight = "20%";
    const trashWidth = "20%";

    const [{ item }, drop] = useDrop({
        accept: ItemTypes.DragTile,
        collect: (monitor) => ({
            item: monitor.getItem(),
            offset: monitor.getClientOffset()
        }),
        drop: () => {
            const delArr = boxArray.filter((dt: DragTile) => {
                return dt.id != item.data.id;
            });
            setBoxArray([...delArr]);
        }
    });
    return (
        <div
            ref={drop}
            style={{
                height: trashHeight,
                width: trashWidth,
                backgroundColor: "#ababab",
                position: "relative"
            }}
        >
            Trash
        </div>
    );
}
