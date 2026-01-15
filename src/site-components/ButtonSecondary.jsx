"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonSecondary(
    {
        as: _Component = _Builtin.Link,

        buttonLink = {
            href: "#"
        },

        buttonLabel = "Book A Call"
    }
) {
    return (
        <_Component
            className="btn-secondary"
            button={false}
            block="inline"
            options={buttonLink}><_Builtin.Block className="text-size-16 font-weight-500" tag="div">{buttonLabel}</_Builtin.Block></_Component>
    );
}