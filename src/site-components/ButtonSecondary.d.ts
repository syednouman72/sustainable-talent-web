import * as React from "react";
import * as Types from "./types";

declare function ButtonSecondary(
    props: {
        as?: React.ElementType;
        buttonLink?: Types.Basic.Link;
        buttonLabel?: React.ReactNode;
    }
): React.JSX.Element