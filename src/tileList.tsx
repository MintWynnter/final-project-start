import { DragTile } from "./Interfaces/DragTile";

const Couch: DragTile = {
    type: "furniture",
    design: "white",
    pos: [0, 0],
    graphic: "./graphics/couch.jpeg", //file name
    name: "Couch",
    size: [150, 150],
    id: -1,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: 0
};

const WoodenChair: DragTile = {
    type: "furniture",
    design: "wood",
    pos: [0, 0],
    graphic: "./graphics/woodChair.jpeg", //file name
    name: "Wooden Chair",
    size: [150, 150],
    id: -1,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: 0
};

const LoveSeat: DragTile = {
    type: "furniture",
    design: "white",
    pos: [0, 0],
    graphic: "./graphics/loveSeat.jpeg", //file name
    name: "Love Seat",
    size: [150, 150],
    id: -1,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: 0
};

const roundTable: DragTile = {
    type: "furniture",
    design: "wood",
    pos: [0, 0],
    graphic: "./graphics/roundTable.jpeg", //file name
    name: "Round Coffee Table",
    size: [150, 150],
    id: -1,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: 0
};

const rectangleTable: DragTile = {
    type: "furniture",
    design: "wood",
    pos: [0, 0],
    graphic: "./graphics/rectangleTable.jpeg", //file name
    name: "Rectangle Coffee Table",
    size: [150, 150],
    id: -1,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: 0
};
//5
const nightStand: DragTile = {
    type: "furniture",
    design: "wood",
    pos: [0, 0],
    graphic: "./graphics/nightStand.jpeg", //file name
    name: "Night Stand",
    size: [150, 150],
    id: -1,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: 0
};

const fridge: DragTile = {
    type: "appliance",
    design: "stainless steel",
    pos: [0, 0],
    graphic: "./graphics/fridge.jpeg", //file name
    name: "Refrigerator",
    size: [150, 150],
    id: -1,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: 0
};

const stove: DragTile = {
    type: "appliance",
    design: "stainless steel",
    pos: [0, 0],
    graphic: "./graphics/stove.jpeg", //file name
    name: "Stove",
    size: [150, 150],
    id: -1,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: 0
};

const countertop: DragTile = {
    type: "kitchen",
    design: "granite",
    pos: [0, 0],
    graphic: "./graphics/countertop.jpeg", //file name
    name: "Countertop",
    size: [150, 150],
    id: -1,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: 0
};

const door: DragTile = {
    type: "build",
    design: "any",
    pos: [0, 0],
    graphic: "./graphics/door.jpeg", //file name
    name: "Door",
    size: [150, 150],
    id: -1,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: 0
};

export const tiles = [
    Couch,
    WoodenChair,
    LoveSeat,
    roundTable,
    rectangleTable,
    nightStand,
    fridge,
    stove,
    countertop,
    door
];
