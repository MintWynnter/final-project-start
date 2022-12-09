import React from "react";
import { DragTile } from "../Interfaces/DragTile";
import { Box } from "./Box";

type layerProps = {
    dragarr: DragTile[];
    scale: number;
};
export function DndArray(prop: layerProps): JSX.Element {
    //const [dragarr, setarr] = useState<DragTile[]>(tiles); //, test2]);

    //we will likely have this be in a higher component that will pass down the filled array

    const keyMultiplier = 3;
    const fontsize = 14;

    return (
        <div
            id="dndarr"
            style={{
                display: "inline-block",
                border: "1px solid black"
            }}
        >
            {prop.dragarr.map((tile: DragTile) => {
                return (
                    <div
                        key={tile.id * keyMultiplier}
                        style={{
                            display: "inline-block",
                            border: "1px solid black"
                        }}
                    >
                        <h2
                            style={{
                                fontSize: fontsize,
                                textAlign: "center"
                            }}
                        >
                            {tile.name}
                        </h2>
                        <Box
                            key={"" + tile.id}
                            dt={tile}
                            scale={prop.scale}
                        ></Box>
                    </div>
                );
            })}
        </div>
    );
}
