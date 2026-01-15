import * as React from "react";
import * as Types from "./types";

declare function ButtonGhost(
    props: {
        as?: React.ElementType;
        buttonLink?: Types.Basic.Link;
        buttonLabel?: React.ReactNode;
    }
): React.JSX.Element