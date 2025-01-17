let picPosition: [number, number] = [0, 0];
let observer: ((arg0: [number, number]) => void) | null = null;

const emitChange = () => {
    observer && observer(picPosition);
};

export const observe = (o: ((arg0: [number, number]) => void) | null) => {
    if (observer) {
        throw new Error("Multiple observers not implemented.");
    }

    observer = o;
    emitChange();
};

export const movePic = (toX: number, toY: number) => {
    picPosition = [toX, toY];
    emitChange();
};

export const canMovePic = (toX: number, toY: number) => {
    const [x, y] = picPosition;
    const dx = toX - x;
    const dy = toY - y;

    return Math.abs(dx + dy - dy) === 1;
};
