import { DragTile } from "./Interfaces/DragTile";

const Couch: DragTile = {
    type: "furniture",
    design: "white",
    pos: [0, 0],
    graphic: require("./images/couch.jpeg"), //file name
    name: "Couch",
    size: [50, 20],
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
    graphic: require("./images/woodChair.jpeg"), //file name
    name: "Wooden Chair",
    size: [50, 20],
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
    graphic: require("./images/loveSeat.jpeg"), //file name
    name: "Love Seat",
    size: [50, 20],
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
    graphic: require("./images/roundTable.jpeg"), //file name
    name: "Round Coffee Table",
    size: [50, 20],
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
    graphic: require("./images/rectangleTable.jpeg"), //file name
    name: "Rectangle Coffee Table",
    size: [50, 20],
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
    graphic: require("./images/nightStand.jpeg"), //file name
    name: "Night Stand",
    size: [50, 20],
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
    graphic: require("./images/fridge.jpeg"), //file name
    name: "Refrigerator",
    size: [50, 20],
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
    graphic: require("./images/stove.jpeg"), //file name
    name: "Stove",
    size: [50, 20],
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
    graphic: require("./images/countertop.jpeg"), //file name
    name: "Countertop",
    size: [50, 20],
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
    graphic: require("./images/door.jpeg"), //file name
    name: "Door",
    size: [50, 20],
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
