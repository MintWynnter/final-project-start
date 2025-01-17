import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { DragTile } from "../Interfaces/DragTile";
//import { arrayBuffer } from "stream/consumers";
//import { DragTile } from "../Interfaces/DragTile";
/*
function alphasort(arr: DragTile[]): DragTile[] {
    arr.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (b.name < b.name) return -1;
        return 0;
    });
    return arr;
}

function typesort(arr: DragTile[]): DragTile[] {
    arr.sort((a, b) => {
        if (a.type > b.type) return 1;
        if (b.type < b.type) return -1;
        return 0;
    });
    return arr;
}
*/
export function FilterDropdown({
    filterOptions,
    setFilterArray,
    filterArray
}: {
    filterOptions: string[];
    setFilterArray: React.Dispatch<React.SetStateAction<DragTile[]>>;
    filterArray: DragTile[];
}): JSX.Element {
    const default_option = filterOptions[0];
    const [choice, setChoice] = useState<string>(default_option);

    const dropdownBottom = "10%";
    const dropdownLeft = "0%";
    const dropdownHeight = "20%";
    const dropdownWidth = "95%";

    function filter(arr: DragTile[], type: string): DragTile[] {
        return arr.filter((dt: DragTile) => {
            return dt.type.toLowerCase() === type.toLowerCase();
        });
    }

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
        setFilterArray([...filter(filterArray, event.target.value)]); //state sent to parent
    }

    return (
        <div>
            <h3>
                <b>Filter</b>
            </h3>
            <div
                className="bg-grey border m-2 p-2"
                style={{
                    bottom: dropdownBottom,
                    left: dropdownLeft,
                    height: dropdownHeight,
                    width: dropdownWidth
                }}
            >
                <Form.Group controlId="formChoice">
                    <Form.Select value={choice} onChange={updateChoice}>
                        {/*eslint-disable-next-line no-extra-parens*/}
                        {filterOptions.map((option1: string) => (
                            <option key={option1} value={option1}>
                                {option1}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
        </div>
    );
}

export function SortDropdown({
    sortOptions,
    setSortArray,
    sortArray
}: {
    sortOptions: string[];
    setSortArray: React.Dispatch<React.SetStateAction<DragTile[]>>;
    sortArray: DragTile[];
}): JSX.Element {
    const default_option = sortOptions[0];
    const [choice, setChoice] = useState<string>(default_option);

    const dropdownBottom = "70%";
    const dropdownLeft = "0%";
    const dropdownHeight = "20%";
    const dropdownWidth = "95%";
    const pass = 1;
    const fail = -1;

    function alphaSort(arr: DragTile[]): DragTile[] {
        return arr.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) return pass;
            else return fail;
        });
    }

    function typeSort(arr: DragTile[]): DragTile[] {
        return arr.sort((a, b) => {
            if (a.type.toLowerCase() > b.type.toLowerCase()) return pass;
            else return fail;
        });
    }

    function designSort(arr: DragTile[]): DragTile[] {
        return arr.sort((a, b) => {
            if (a.design.toLowerCase() > b.design.toLowerCase()) return pass;
            else {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return pass;
                else return fail;
            }
        });
    }

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
        if (event.target.value === "Alphabetical") {
            setSortArray([...alphaSort(sortArray)]);
        } else if (event.target.value === "Tile Type") {
            setSortArray([...typeSort(sortArray)]);
        } else {
            setSortArray([...designSort(sortArray)]);
        }
    }

    return (
        <div>
            <h3>
                <b>Sort</b>
            </h3>
            <div
                className="bg-grey border m-2 p-2"
                style={{
                    bottom: dropdownBottom,
                    left: dropdownLeft,
                    height: dropdownHeight,
                    width: dropdownWidth
                }}
            >
                <Form.Group controlId="formChoice">
                    <Form.Select value={choice} onChange={updateChoice}>
                        {/*eslint-disable-next-line no-extra-parens*/}
                        {sortOptions.map((option1: string) => (
                            <option key={option1} value={option1}>
                                {option1}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
        </div>
    );
}
