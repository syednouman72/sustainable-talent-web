import * as React from "react";
import * as Types from "./types";

declare function ButtonPrimary(
    props: {
        as?: React.ElementType;
        buttonLink?: Types.Basic.Link;
        buttonLabel?: React.ReactNode;
        variant?: "Primary" | "Secondary" | "Ghost";
    }
): React.JSX.Element