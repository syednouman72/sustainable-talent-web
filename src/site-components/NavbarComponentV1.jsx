"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function NavbarComponentV1(
    {
        as: _Component = _Builtin.Section
    }
) {
    return (
        <_Component
            className="section-navbar-component"
            grid={{
                type: "section"
            }}
            tag="div"><_Builtin.NavbarWrapper
                className="navbar-component_layout"
                tag="div"
                config={{
                    animation: "default",
                    collapse: "medium",
                    docHeight: false,
                    duration: 400,
                    easing: "ease",
                    easing2: "ease",
                    noScroll: false
                }}><_Builtin.Block className="page-padding" tag="div"><_Builtin.Block className="container-1224" tag="div"><_Builtin.Block className="padding-section-20" tag="div"><_Builtin.Block className="navbar-component_wrapper is-centered-logo" tag="div"><_Builtin.NavbarBrand
                                    className="brand-logo is-relative"
                                    options={{
                                        href: "https://www.sustainabletalent.com/"
                                    }}><_Builtin.Image
                                        className="img-full-width"
                                        loading="lazy"
                                        width="auto"
                                        height="auto"
                                        alt="Logo Placholder"
                                        src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692d9bd50e09dba5c24a118b_Logo.svg" /></_Builtin.NavbarBrand></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.NavbarWrapper></_Component>
    );
}