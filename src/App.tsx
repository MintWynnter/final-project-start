import React, { useState } from "react";
import { CustomDragLayer } from "./CustomDragLayer";
import { FilterDropdown, SortDropdown } from "./components/dropdown";
import { Row, Col, Form } from "react-bootstrap";
import "./App.css";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Menu } from "./Menu";
import { DndProvider } from "react-dnd";

function App(): JSX.Element {
    const [scale, setScale] = useState<number>(1);
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
                        height: "600px",
                        width: "800px",
                        left: "800px",
                        top: "50px",
                        position: "absolute"
                    }}
                >
                    <CustomDragLayer scale={scale}></CustomDragLayer>
                    {/*<Box name="couch" id={1}></Box>*/}
                </div>
                <h1> Harleen Chahal, Sean OSullivan, Matthew Hansen </h1>
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
                                    : 1
                            )
                        }
                    />
                </Form.Group>
                <Row xs={4} md={8} lg={12}>
                    <Col>
                        <FilterDropdown
                            filterOptions={["Kitchen", "Bathroom", "Bedroom"]}
                        ></FilterDropdown>
                    </Col>
                    <Col>
                        <SortDropdown
                            sortOptions={[
                                "Alphabetical",
                                "Tile Type",
                                "Design Type"
                            ]}
                        ></SortDropdown>
                    </Col>
                </Row>
                <Menu></Menu>
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
