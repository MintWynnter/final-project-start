import React, { useState } from "react";
import { Button, Col, Container, Form, Modal } from "react-bootstrap";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants";
import { DragTile } from "../Interfaces/DragTile";

type BoxProps = { dt: DragTile; scale: number };
const WIDTH = "100%";
const HEIGHT = "100%";

export function Box({ dt, scale }: BoxProps): JSX.Element {
    const [rotation, setRotation] = useState(0);
    const [comment, setComment] = useState("");
    const [showEditModal, setShowEditModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const handleCloseEditModal = () => setShowEditModal(false);
    const handleShowEditModal = () => setShowEditModal(true);
    const handleCloseViewModal = () => setShowViewModal(false);
    const handleShowViewModal = () => setShowViewModal(true);
    const [, drag] = useDrag({
        item: { type: ItemTypes.DragTile, data: dt },
        collect: (monitor) => ({
            offset: monitor.getClientOffset()
        })
    });
    function updateComment(event: React.ChangeEvent<HTMLInputElement>) {
        setComment(event.target.value);
    }
    function ConfirmClose() {
        dt.comments = [...dt.comments, comment];
        dt.rotation = rotation;
        setShowEditModal(false);
    }
    return (
        <div
            ref={drag}
            style={{
                height: dt.size[1] / scale,
                width: dt.size[0] / scale,
                display: "inline-block"
            }}
        >
            {/*console.log(dt.graphic)*/}
            <img src={require(dt.graphic + "")} width={WIDTH} height={HEIGHT} />
            <Container>
                <Col>
                    <Button
                        style={{ backgroundColor: "#0000FF" }}
                        onClick={handleShowEditModal}
                    >
                        Edit
                    </Button>
                    <Button
                        style={{ backgroundColor: "#0000FF" }}
                        onClick={handleShowViewModal}
                    >
                        View
                    </Button>
                </Col>
            </Container>
            <Modal show={showEditModal} onHide={handleCloseEditModal}>
                <Modal.Body>Edit {dt.name}</Modal.Body>
                <Modal.Footer>
                    <Form.Group>
                        <Form.Label>New comment:</Form.Label>
                        <Form.Control
                            value={comment}
                            onChange={updateComment}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rotation (degrees):</Form.Label>
                        <Form.Control
                            type="number"
                            value={rotation}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) =>
                                setRotation(
                                    parseInt(event.target.value)
                                        ? parseInt(event.target.value)
                                        : 0
                                )
                            }
                        />
                    </Form.Group>
                    <Button variant="success" onClick={ConfirmClose}>
                        Confirm
                    </Button>
                    <Button variant="success" onClick={handleCloseEditModal}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showViewModal} onHide={handleCloseViewModal}>
                <Modal.Body>{dt.name}</Modal.Body>
                <Modal.Footer>
                    <div>
                        <div>name: {dt.name}</div>
                        <div>type: {dt.type}</div>
                        <div>design: {dt.design}</div>
                        <div>
                            comments:{" "}
                            {dt.comments.map((c: string) => {
                                return <div key={dt.id}>{c}</div>;
                            })}
                        </div>
                    </div>
                    <Button variant="success" onClick={handleCloseViewModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
