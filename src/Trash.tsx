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
                height: "20%",
                width: "20%",
                backgroundColor: "#ababab",
                position: "relative"
            }}
        >
            Trash
        </div>
    );
}
