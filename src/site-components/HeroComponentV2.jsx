"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonPrimary } from "./ButtonPrimary";

export function HeroComponentV2(
    {
        as: _Component = _Builtin.Section
    }
) {
    return (
        <_Component
            className="section-hero-component"
            grid={{
                type: "section"
            }}
            tag="section"><_Builtin.Block className="page-padding" tag="div"><_Builtin.Block className="container-1224" tag="div"><_Builtin.Block className="padding-section-t256-138b" tag="div"><_Builtin.Block className="hero-component_wrapper" tag="div"><_Builtin.Block className="hero-component_txt-wrapper" tag="div"><_Builtin.Block className="hero-component_txtinfo-wrap" tag="div"><_Builtin.Heading className="heading-56 text-color-white" tag="h1">{"Discover the key to grow your business"}</_Builtin.Heading><_Builtin.Heading className="text-size-16 text-color-white" tag="h2">{"Lorem ipsum dolor sit amet consectetur adipiscing elidolor mattis sit phasellus mollis sit aliquam sit nullam neques."}</_Builtin.Heading></_Builtin.Block><_Builtin.Block className="hero-component_cta-layout" tag="div"><_Builtin.Block className="hero-component_cta-wrap" tag="div"><ButtonPrimary buttonLabel="Get in Touch" /></_Builtin.Block><_Builtin.Block className="hero-component_cta-wrap" tag="div"><ButtonPrimary buttonLabel="Learn More" variant="Secondary" /></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className="hero-component_img-layout" tag="div"><_Builtin.Block className="hero-component_img-wrapper ratio-4-5" tag="div"><_Builtin.Image
                                        className="img-full-width"
                                        loading="lazy"
                                        width="auto"
                                        height="auto"
                                        alt="A white square with a small square in the middle."
                                        src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692d9bd50e09dba5c24a11af_portrait-img-placeholder.webp" /></_Builtin.Block><_Builtin.Block className="hero-component_img-wrapper ratio-4-5 is-absolute" tag="div"><_Builtin.Image
                                        className="img-full-width"
                                        loading="lazy"
                                        width="auto"
                                        height="auto"
                                        alt="A white square with a small square in the middle."
                                        src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692d9bd50e09dba5c24a11af_portrait-img-placeholder.webp" /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Component>
    );
}