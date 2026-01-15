import * as React from "react";
import * as Types from "./types";

declare function HomeHeadings(
    props: {
        as?: React.ElementType;
        variant?: "Base" | "Flex Hor";
        tagline?: React.ReactNode;
        taglineVisibility?: Types.Visibility.VisibilityConditions;
        heading?: React.ReactNode;
        description?: React.ReactNode;
        descriptionVisibility?: Types.Visibility.VisibilityConditions;
    }
): React.JSX.Element