import React from "react";
import { DragTile } from "../Interfaces/DragTile";
import { Box } from "./Box";

type layerProps = {
    dragarr: DragTile[];
    scale: number;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function DndArray(prop: layerProps): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //const [dragarr, setarr] = useState<DragTile[]>(tiles); //, test2]);

    //we will likely have this be in a higher component that will pass down the filled array
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
                        key={tile.id * 3}
                        style={{
                            display: "inline-block",
                            border: "1px solid black"
                        }}
                    >
                        <h2
                            style={{
                                fontSize: 14,
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
