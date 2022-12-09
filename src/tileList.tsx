import { DragTile } from "./Interfaces/DragTile";

const defaultpos = 0;
const defaultsize = 150;
const defaultID = -1;
const defaultRotation = 0;

const Couch: DragTile = {
    type: "furniture",
    design: "white",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/couch.png", //file name
    name: "Couch",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const WoodenChair: DragTile = {
    type: "furniture",
    design: "wood",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/woodChair.png", //file name
    name: "Wooden Chair",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const LoveSeat: DragTile = {
    type: "furniture",
    design: "white",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/loveSeat.png", //file name
    name: "Love Seat",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const roundTable: DragTile = {
    type: "furniture",
    design: "wood",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/roundTable.png", //file name
    name: "Round Coffee Table",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const rectangleTable: DragTile = {
    type: "furniture",
    design: "wood",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/rectangleTable.png", //file name
    name: "Rectangle Coffee Table",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const nightStand: DragTile = {
    type: "furniture",
    design: "wood",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/nightStand.png", //file name
    name: "Night Stand",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const fridge: DragTile = {
    type: "appliance",
    design: "stainless steel",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/fridge.png", //file name
    name: "Refrigerator",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const stove: DragTile = {
    type: "appliance",
    design: "stainless steel",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/stove.png", //file name
    name: "Stove",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const countertop: DragTile = {
    type: "kitchen",
    design: "granite",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/countertop.png",
    name: "Countertop",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const door: DragTile = {
    type: "build",
    design: "any",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/door.png",
    name: "Door",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const bathtub: DragTile = {
    type: "bathroom",
    design: "any",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/bathtub.png",
    name: "Bathtub",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const kitchensink: DragTile = {
    type: "Kitchen",
    design: "stainless steel",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/kitchensink.png",
    name: "Kitchen Sink",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const island: DragTile = {
    type: "Kitchen",
    design: "any",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/island.png",
    name: "Kitchen Island",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const tv: DragTile = {
    type: "living room",
    design: "any",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/tv.png",
    name: "TV",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const bed: DragTile = {
    type: "Bedroom",
    design: "any",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/bed.png",
    name: "Door",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const diningtabler: DragTile = {
    type: "Dining room",
    design: "any",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/diningtablec.png",
    name: "Rectangle Dining Table",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const diningtablec: DragTile = {
    type: "Dining room",
    design: "any",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/diningtablec.png",
    name: "Round Dining Table",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const mplant: DragTile = {
    type: "build",
    design: "any",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/plant.png",
    name: "Monstera Plant",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const sidetable: DragTile = {
    type: "Living room",
    design: "wood",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/sidetable.png",
    name: "Side Table",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const dressingtable: DragTile = {
    type: "Bedroom",
    design: "wood",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/dressingtable.png",
    name: "Dressing table",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const twinbed: DragTile = {
    type: "Bedroom",
    design: "any",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/twinbed.png",
    name: "Twin Bed",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const doublesink: DragTile = {
    type: "Bathroom",
    design: "any",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/doublesink.png",
    name: "Double Bathroom Vanity",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const bathroomSink: DragTile = {
    type: "Bathroom",
    design: "any",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/singlevanity.png",
    name: "Single Bathroom Vanity",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const woodfloor: DragTile = {
    type: "build",
    design: "any",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/woodfloor.png",
    name: "Wood Floor",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const tilefloor: DragTile = {
    type: "build",
    design: "any",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/tilefloor.png",
    name: "Tile Floor",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const lamp: DragTile = {
    type: "build",
    design: "any",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/lamp.png",
    name: "Table Lamp",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const stairs: DragTile = {
    type: "build",
    design: "any",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/stairs.png",
    name: "Stairs",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const carpet: DragTile = {
    type: "build",
    design: "any",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/carpet.png",
    name: "Carpet",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const rug: DragTile = {
    type: "build",
    design: "any",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/rug.png",
    name: "Area Rug",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
};

const bathrug: DragTile = {
    type: "Bathroom",
    design: "any",
    pos: [defaultpos, defaultpos],
    graphic: "./graphics/bathrug.png",
    name: "Bathroom Rug",
    size: [defaultsize, defaultsize],
    id: defaultID,
    hasFurniture: false,
    hasPainting: false,
    placeOnWall: false,
    isFill: false,
    comments: [],
    rotation: defaultRotation
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
    door,
    bathtub,
    kitchensink,
    island,
    tv,
    bed,
    diningtabler,
    diningtablec,
    mplant,
    sidetable,
    dressingtable,
    twinbed,
    doublesink,
    bathroomSink,
    woodfloor,
    tilefloor,
    lamp,
    stairs,
    carpet,
    rug,
    bathrug
];
