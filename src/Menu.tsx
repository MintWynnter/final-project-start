import React, { useState } from "react";
import { DndArray } from "./components/dndarr";
//import { Dropdown } from "./components/dropdown";
//import Dndarr from "./components/dndarr";
import { Row, Col, Button, Container, Modal } from "react-bootstrap";
import "./App.css";
import { DragTile } from "./Interfaces/DragTile";
import { tiles } from "./tileList";
import { FilterDropdown, SortDropdown } from "./components/dropdown";

type layerProps = {
    setBoxArray: React.Dispatch<React.SetStateAction<DragTile[]>>;
    scale: number;
};

export function Menu(props: layerProps) {
    //currently these tiles are not in use, tiles you see on website are in dndarr
    const [arr, setArr] = useState<DragTile[]>([...tiles]);

    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const clearBoard = () => {
        props.setBoxArray([]);
        handleCloseModal();
    };

    //const [renderVar, setRenderVar] = useState(0);
    //const incRenderVar = renderVar;
    //const [Array, setArray] = useState<DragTile[]>(tiles);
    //console.log(FilterArray);
    return (
        <div
            style={{
                width: "51.6%",
                height: "62%",
                top: "2px"
            }}
        >
            <Container>
                <Row>
                    <Col>
                        <FilterDropdown
                            filterOptions={[
                                "Kitchen",
                                "Bathroom",
                                "Bedroom",
                                "Furiture",
                                "Appliance",
                                "Build",
                                "Living Room",
                                "Dining Room"
                            ]}
                            setFilterArray={setArr}
                            filterArray={tiles}
                        ></FilterDropdown>
                    </Col>
                    <Col>
                        <SortDropdown
                            sortOptions={[
                                "Alphabetical",
                                "Tile Type",
                                "Design Type"
                            ]}
                            setSortArray={setArr}
                            sortArray={arr}
                        ></SortDropdown>
                    </Col>
                </Row>
            </Container>
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
                        onClick={handleShowModal}
                    >
                        Clear Room
                    </Button>
                    <Modal show={showModal} onHide={handleCloseModal}>
                        <Modal.Body>
                            Are you sure you want to delete the current board?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={clearBoard}>
                                Yes
                            </Button>
                            <Button
                                variant="success"
                                onClick={handleCloseModal}
                            >
                                No
                            </Button>
                        </Modal.Footer>
                    </Modal>
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
                    <DndArray dragarr={arr} scale={1}></DndArray>
                </div>
            </Container>
        </div>
    );
}
