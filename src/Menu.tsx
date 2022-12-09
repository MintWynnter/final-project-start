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
    function alphasort(arr: DragTile[]): DragTile[] {
        arr.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (b.name < b.name) return -1;
            return 0;
        });
        return arr;
    }
    //function typesort(arr: DragTile[]): DragTile[] {
    //    return arr.sort((a, b) => {
    //        if (a.type > b.type) return 1;
    //        if (b.type < b.type) return -1;
    //        return 0;
    //    });
    //}

    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const clearBoard = () => {
        props.setBoxArray([]);
        handleCloseModal();
    };

    const [SortArray, setSortArray] = useState<string>("None");
    const [FilterArray, setFilterArray] = useState<string>("None");
    //const [renderVar, setRenderVar] = useState(0);
    //const incRenderVar = renderVar;
    //const [Array, setArray] = useState<DragTile[]>(tiles);
    console.log(FilterArray);
    function sorting(): void {
        if (SortArray === "Alphabetical") {
            console.log("alpha");
            setArr(alphasort(arr));
            //setArray(alphasort(arr)); breaks website
            //arr.forEach((item) => console.log(item.name));
        }
        if (SortArray === "Tile Type") {
            const tmparr = tiles.filter(
                (dt: DragTile): boolean => dt.type === "kitchen"
            );
            setArr([...tmparr]);
            //arr.forEach((item) => console.log(item.name));
        }
    }
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
                            filterOptions={["Kitchen", "Bathroom", "Bedroom"]}
                            setFilterArray={setFilterArray}
                        ></FilterDropdown>
                    </Col>
                    <Col>
                        <SortDropdown
                            sortOptions={[
                                "Alphabetical",
                                "Tile Type",
                                "Design Type"
                            ]}
                            setSortArray={sorting}
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
