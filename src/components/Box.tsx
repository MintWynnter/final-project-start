import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants";
import { DragTile } from "../Interfaces/DragTile";

type BoxProps = { dt: DragTile; scale: number };
const WIDTH = "100%";
const HEIGHT = "100%";

export function Box({ dt, scale }: BoxProps): JSX.Element {
    const [, drag] = useDrag({
        item: { type: ItemTypes.DragTile, data: dt },
        collect: (monitor) => ({
            offset: monitor.getClientOffset()
        })
    });
    return (
        <div
            ref={drag}
            style={{
                height: dt.size[1] / scale,
                width: dt.size[0] / scale,
                display: "inline-block"
            }}
        >
            {console.log(dt.graphic)}
            <img src={require(dt.graphic + "")} width={WIDTH} height={HEIGHT} />
        </div>
    );
}
