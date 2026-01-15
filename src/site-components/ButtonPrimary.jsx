"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonPrimary(
    {
        as: _Component = _Builtin.Link,

        buttonLink = {
            href: "#"
        },

        buttonLabel = "Book A Call",
        variant = "Primary"
    }
) {
    const _styleVariantMap = {
        "Primary": "",
        "Secondary": "w-variant-64cc7c57-1ddd-97b9-4c91-11e720d145f1",
        "Ghost": "w-variant-fbafb3d6-4301-0461-8442-3db726333bfc"
    };

    const _activeStyleVariant = _styleVariantMap[variant];

    return (
        <_Component
            className={`btn-primary ${_activeStyleVariant}`}
            button={false}
            block="inline"
            options={buttonLink}><_Builtin.Block
                className={`text-size-16 font-weight-700 ${_activeStyleVariant}`}
                tag="div">{buttonLabel}</_Builtin.Block></_Component>
    );
}