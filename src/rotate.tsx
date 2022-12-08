import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function rotate(degrees: number): JSX.Element {
    function rotate(degrees: number) {
        let rotation = 0;
        rotation += degrees;
        if (rotation == 360) {
            rotation = 0;
        }
    }
    return (
        <>
            <div>
                <Form.Group controlId="formDegrees">
                    <Form.Label>Degrees:</Form.Label>
                    <Form.Control
                        type="textbox"
                        placeholder="Degrees to rotate"
                        value={degrees}
                        onChange={() => {
                            rotate(degrees);
                        }}
                    />
                </Form.Group>
            </div>
            <div>
                <Button onClick={() => rotate(degrees)}>Rotate Image</Button>
                {/* document.getElementById('./bosun_tally.jpg').src =
                URL.createObjectURL(rotate); */}
            </div>
        </>
    );
}
