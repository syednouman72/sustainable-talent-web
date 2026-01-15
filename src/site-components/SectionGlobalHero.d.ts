import * as React from "react";
import * as Types from "./types";

declare function SectionGlobalHero(
    props: {
        as?: React.ElementType;
        variant?: "Base" | "Case Study";
        taglineText?: React.ReactNode;
        headingText?: React.ReactNode;
        image?: Types.Asset.Image;
        subText?: React.ReactNode;
        subTextVisibility?: Types.Visibility.VisibilityConditions;
    }
): React.JSX.Element