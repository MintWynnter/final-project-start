import React, { useState } from "react";
import { DndArray } from "./components/dndarr";
import { Row, Button, Container } from "react-bootstrap";
import "./App.css";
import { DragTile } from "./Interfaces/DragTile";

export function Menu(): JSX.Element {
    //currently these tiles are not in use, tiles you see on website are in dndarr
    const testimg1: DragTile = {
        type: "string",
        design: "string",
        pos: [40, 0],
        graphic: "./red_couch.png",
        name: "Couch",
        size: [50, 20],
        id: 1,
        hasFurniture: false,
        hasPainting: false,
        placeOnWall: false,
        isFill: false,
        comments: []
    };
    const testimg2: DragTile = {
        type: "string",
        design: "string",
        pos: [40, 0],
        graphic: "./door.jpg",
        name: "Door",
        size: [50, 20],
        id: 1,
        hasFurniture: false,
        hasPainting: false,
        placeOnWall: false,
        isFill: false,
        comments: []
    };
    const [BoardTiles, setBoardTiles] = useState<DragTile[]>([
        testimg1,
        testimg2
    ]);

    const clearBoard = () => {
        setBoardTiles([]);
    };

    return (
        <div
            style={{
                width: "50%",
                height: "50%",
                top: "2px"
            }}
        >
            <Container
                style={{
                    height: "80%",
                    width: "100%"
                }}
            >
                <Row>
                    <h2>Tiles</h2>
                    <Button
                        style={{ backgroundColor: "#0000FF" }}
                        onClick={() => clearBoard()}
                    >
                        Clear Room
                    </Button>
                </Row>
                <div
                    className="my-custom-scrollbar"
                    style={{
                        width: "101.5%",
                        height: "93%",
                        overflow: "auto",
                        display: "inline-block"
                    }}
                >
                    <DndArray />
                </div>
            </Container>
        </div>
    );
}

{
    /*
export function Menu(): JSX.Element {
    return (
        <div
            className="table-wrapper-scroll-y my-custom-scrollbar"
            style={{
                display: "inline-block"
            }}
        >
            <Table
                className="table-fixed table-responsive"
                style={{
                    width: "100%",
                    border: "2px solid gray"
                }}
            >
                <thead>
                    <tr>
                        <th>Tiles</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {[
                            "./red_couch.png",
                            "./door.jpg",
                            "./bosun_tally.jpg"
                            // eslint-disable-next-line no-extra-parens
                        ].map((s: string) => (
                            <td key={s}>
                                <Button
                                    style={{
                                        height: "70px",
                                        width: "60%"
                                    }}
                                >
                                    <img
                                        src={require(s + "")}
                                        width="100%"
                                        height="100%"
                                    />
                                </Button>
                            </td>
                        ))}
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}
*/
}
