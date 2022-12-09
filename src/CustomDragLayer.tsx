import { useDragLayer, useDrop, XYCoord } from "react-dnd";
import React, { useState } from "react";
import { DragTile } from "./Interfaces/DragTile";
import { Box } from "./components/Box";
import { ItemTypes } from "./constants";

type layerProps = {
    scale: number;
    BoxArray: DragTile[];
    setBoxArray: React.Dispatch<React.SetStateAction<DragTile[]>>;
};

export function CustomDragLayer(props: layerProps): JSX.Element {
    const dragxOffset = 800;
    const dragyOffset = 50;
    const height = "100%";
    const width = "100%";
    const defaultID = -1;
    const defaultx = 0;
    const defaulty = 0;
    const defaultSize = 2;

    const [{ item }, drop] = useDrop({
        accept: ItemTypes.DragTile,
        collect: (monitor) => ({
            item: monitor.getItem(),
            offset: monitor.getClientOffset()
        }),
        drop: () => {
            console.log(item.data);
            addDragTile({
                type: item.data.type,
                design: item.data.design,
                pos: [
                    (notnull(currentOffset).x -
                        dragxOffset +
                        (notnull(grabOffset).x - notnull(sourceOffset).x)) *
                        props.scale,
                    (notnull(currentOffset).y -
                        dragyOffset +
                        (notnull(grabOffset).y - notnull(sourceOffset).y)) *
                        props.scale
                ],
                graphic: item.data.graphic,
                name: item.data.name,
                size: [item.data.size[0], item.data.size[1]],
                id: item.data.id,
                hasFurniture: item.data.hasFurniture,
                hasPainting: item.data.hasPainting,
                placeOnWall: item.data.placeOnWall,
                isFill: item.data.isFill,
                comments: item.data.comments,
                rotation: item.data.rotation
            });
        }
    });
    const { currentOffset, grabOffset, sourceOffset } = useDragLayer(
        (monitor) => ({
            currentOffset: monitor.getSourceClientOffset(),
            grabOffset: monitor.getInitialClientOffset(),
            sourceOffset: monitor.getInitialSourceClientOffset()
        })
    );
    //const [BoxArray, setBoxArray] = useState<DragTile[]>(props.dragt);
    const [size, setSize] = useState<number>(defaultSize);
    function addDragTile(dt: DragTile) {
        if (dt.id === defaultID) {
            props.setBoxArray([...props.BoxArray, { ...dt, id: size }]);
            setSize(size + 1);
            return;
        }
        props.BoxArray.map((dtile: DragTile) => {
            if (dt.id === dtile.id) {
                dtile.pos = dt.pos;
            }
        });
        props.setBoxArray([...props.BoxArray]);
    }
    function notnull(p: null | XYCoord) {
        return p === null ? { x: defaultx, y: defaulty } : p;
    }
    return (
        <div
            ref={drop}
            style={{
                height: height,
                width: width,
                backgroundColor: "#ADD8E6",
                position: "relative"
            }}
        >
            {props.BoxArray.map((dt: DragTile) => {
                return (
                    <div
                        key={dt.id}
                        style={{
                            height: dt.size[1] / props.scale + "px",
                            width: dt.size[0] / props.scale + "px",
                            position: "absolute",
                            top: dt.pos[1] / props.scale + "px",
                            left: dt.pos[0] / props.scale + "px",
                            transform: "rotate(" + dt.rotation + "deg)"
                        }}
                    >
                        <Box dt={dt} scale={props.scale}></Box>
                    </div>
                );
            })}
        </div>
    );
}
