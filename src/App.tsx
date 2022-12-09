import React, { useState } from "react";
import { CustomDragLayer } from "./CustomDragLayer";
//import { Dropdown } from "./components/dropdown";
//import Dndarr from "./components/dndarr";
import { Form } from "react-bootstrap";
import "./App.css";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Menu } from "./Menu";
import { DndProvider } from "react-dnd";
import { DragTile } from "./Interfaces/DragTile";

function App(): JSX.Element {
    const [scale, setScale] = useState<number>(1);
    const [BoxArray, setBoxArray] = useState<DragTile[]>([]);
    //parent BoxArray that is edited by children Menu.tsx in clearBoard function and CustomDragLayer
    //purpose is for clear button in Menu.tsx to access the CustomDragLayer.tsx's current board state and clear it

    const boxHeight = "600px";
    const boxWidth = "800px";
    const boxLeft = "800px";
    const boxTop = "50px";
    const headerWidth = "50%";
    const defaultScale = 1;

    return (
        <div
            style={{
                width: window.innerWidth, //originally "500px"
                height: window.innerHeight,
                border: "1px solid gray"
            }}
        >
            <DndProvider backend={HTML5Backend}>
                <div
                    style={{
                        height: boxHeight,
                        width: boxWidth,
                        left: boxLeft,
                        top: boxTop,
                        position: "absolute"
                    }}
                >
                    <CustomDragLayer
                        scale={scale}
                        BoxArray={BoxArray}
                        setBoxArray={setBoxArray}
                    ></CustomDragLayer>
                    {/*<Box name="couch" id={1}></Box>*/}
                </div>
                <h1> Harleen Chahal, Sean OSullivan, Matthew Hansen </h1>
                <div style={{ width: headerWidth, border: "7px solid white" }}>
                    <Form.Group>
                        <Form.Label>Scale</Form.Label>
                        <Form.Control
                            type="number"
                            value={scale}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) =>
                                setScale(
                                    parseInt(event.target.value)
                                        ? parseInt(event.target.value)
                                        : defaultScale
                                )
                            }
                        />
                    </Form.Group>
                </div>
                <Menu setBoxArray={setBoxArray} scale={scale}></Menu>
                {/*<DndArray />
                <Row style={{ height: "700px" }}>
                    <Col>
                        <FilterDropdown
                            filterOptions={["Kitchen", "Bathroom", "Bedroom"]}
                        ></FilterDropdown>
                        <SortDropdown
                            sortOptions={[
                                "Alphabetical",
                                "Tile Type",
                                "Design Type"
                            ]}
                        ></SortDropdown>
                    </Col>
                        </Row>*/}
            </DndProvider>
        </div>
    );
}

export default App;
