import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function FilterDropdown({
    filterOptions
}: {
    filterOptions: string[];
}): JSX.Element {
    const default_option = filterOptions[0];
    const [choice, setChoice] = useState<string>(default_option);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    return (
        <div>
            <h3>Filter</h3>
            <div>
                <Form.Group controlId="formChoice">
                    <Form.Select value={choice} onChange={updateChoice}>
                        {filterOptions.map((option1: string) => {
                            <option key={option1} value={option1}>
                                {option1}
                            </option>;
                        })}
                    </Form.Select>
                </Form.Group>
            </div>
        </div>
    );
}

export function SortDropdown({
    sortOptions
}: {
    sortOptions: string[];
}): JSX.Element {
    const default_option = sortOptions[0];
    const [choice, setChoice] = useState<string>(default_option);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    return (
        <div>
            <h3>Sort</h3>
            <div>
                <Form.Group controlId="formChoice">
                    <Form.Select value={choice} onChange={updateChoice}>
                        {sortOptions.map((option1: string) => {
                            <option key={option1} value={option1}>
                                {option1}
                            </option>;
                        })}
                    </Form.Select>
                </Form.Group>
            </div>
        </div>
    );
}