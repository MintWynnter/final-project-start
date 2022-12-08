import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { JsxAttribute } from "typescript";
import { ItemTypes } from "../constants";
import { DragTile } from "../Interfaces/DragTile";
import { Box } from "../components/Box";

import "./tileBox.css";

function tileBox({ tile }: { tile: DragTile }): JSX.Element {
    const [{ offset }, drag] = useDrag({
        item: { type: ItemTypes.DragTile, id: tile.id },
        collect: (monitor) => ({
            offset: monitor.getClientOffset()
        })
    });
    return (
        <div>
            <img
                id={tile.id.toString()}
                ref={drag}
                src={tile.graphic}
                alt={"tile"}
            />
        </div>
    );
}

export default tileBox;
