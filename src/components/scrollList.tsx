/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { Modal } from "react-bootstrap";
import { DragTile } from "../Interfaces/DragTile";
import { tiles } from "../tileList";
import tileBox from "./tileBox";

function generateList(prop: DragTile[]) {
    return prop.map((prop) => (
        <div>
            <div key={prop.name} className="propcontainer">
                <li>
                    {prop.name + "             "}
                    <Modal temp={prop}></Modal>
                </li>
                {/* <tileBox tile={prop} /> */}
            </div>
        </div>
    ));
}
