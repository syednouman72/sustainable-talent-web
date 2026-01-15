"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function GridGuide(
    {
        as: _Component = _Builtin.Block,
        gridGuideVisibility = true
    }
) {
    return gridGuideVisibility ? <_Component className="grid-guide-wrapper" tag="div" data-grid-guide="wrap"><_Builtin.HtmlEmbed
            className="hide"
            value="%3Cstyle%3E%0Ahtml%3Anot(.wf-design-mode)%20%5Bdata-grid-guide%3D%22wrap%22%5D%20%7B%0A%09display%3A%20none%3B%0A%7D%0A%5Bdata-grid-guide%3D%22list%22%5D%20%7B%0A%09counter-reset%3A%20gridguides%3B%0A%7D%0A%5Bdata-grid-guide%3D%22list%22%5D%20%3E%20div%3A%3Abefore%20%7B%0A%20%20counter-increment%3A%20gridguides%3B%0A%20%20content%3A%20counter(gridguides)%3B%0A%7D%0A%3C%2Fstyle%3E" /><_Builtin.Block className="page-padding" tag="div"><_Builtin.Block className="container-1224" tag="div"><_Builtin.Block className="grid-guide-list" tag="div" data-grid-guide="list"><_Builtin.Block className="grid-guide-column" tag="div" /><_Builtin.Block className="grid-guide-column" tag="div" /><_Builtin.Block className="grid-guide-column" tag="div" /><_Builtin.Block className="grid-guide-column" tag="div" /><_Builtin.Block className="grid-guide-column" tag="div" /><_Builtin.Block className="grid-guide-column" tag="div" /><_Builtin.Block className="grid-guide-column" tag="div" /><_Builtin.Block className="grid-guide-column" tag="div" /><_Builtin.Block className="grid-guide-column" tag="div" /><_Builtin.Block className="grid-guide-column" tag="div" /><_Builtin.Block className="grid-guide-column" tag="div" /><_Builtin.Block className="grid-guide-column" tag="div" /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Component> : null;
}