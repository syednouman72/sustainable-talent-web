import * as React from "react";
import * as Types from "./types";

declare function GlobalStyles(
    props: {
        as?: React.ElementType;
        gridGuideVisibility?: Types.Visibility.VisibilityConditions;
    }
): React.JSX.Element