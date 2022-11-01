import React from "react";
import Pic from "../Pic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "../BoardSquare";

const renderPiece = (x: number, y: number, [picX, picY]: [number, number]) => {
    if (x === picX && y === picY) {
        return <Pic />;
    }
};

const renderSquare = (i: number, picPosition: [number, number]) => {
    const x = i;
    const y = 0;

    return (
        <div key={i} style={{ width: "50%", height: "100%" }}>
            <BoardSquare x={x} y={y}>
                {renderPiece(x, y, picPosition)}
            </BoardSquare>
        </div>
    );
};

type ArrProps = {
    picPosition: [number, number];
};

const dndarr: React.FC<ArrProps> = (props) => {
    const { picPosition } = props;
    const squares = [];
    for (let i = 0; i < 2; i++) {
        squares.push(renderSquare(i, picPosition));
    }
    return (
        <DndProvider backend={HTML5Backend}>
            <div
                style={{
                    width: "10%",
                    height: "10%",
                    display: "flex",
                    flexWrap: "wrap"
                }}
            >
                {squares}
            </div>
        </DndProvider>
    );
};

export default dndarr;
