import React from "react";

type OverlayProps = {
    color: string;
};

const Overlay: React.FC<OverlayProps> = (props) => {
    const Otop = 0;
    const Oleft = 0;
    const Oheight = "100%";
    const Owidth = "100%";
    const Ozindex = 1;
    const Oopacity = 0.5;

    return (
        <div
            style={{
                position: "absolute",
                top: Otop,
                left: Oleft,
                height: Oheight,
                width: Owidth,
                zIndex: Ozindex,
                opacity: Oopacity,
                backgroundColor: props.color
            }}
        />
    );
};

export default Overlay;
