"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function SectionGlobalHero(
    {
        as: _Component = _Builtin.Section,
        variant = "Base",
        taglineText = "About Us",
        headingText = "Our Story",
        image = "https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692f21fd852d2aa842db8c94_contemporary-room-workplace-office-supplies-concept.avif",
        subText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        subTextVisibility = false
    }
) {
    const _styleVariantMap = {
        "Base": "",
        "Case Study": "w-variant-7319c2c8-d62b-fabb-2354-addba535d109"
    };

    const _activeStyleVariant = _styleVariantMap[variant];

    return (
        <_Component
            className={`section-global-hero ${_activeStyleVariant}`}
            grid={{
                type: "section"
            }}
            tag="section"><_Builtin.Block className={`page-padding ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`container-1224 ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`padding-section-t80 ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`padding-section-192 ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`global-hero_wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`global-hero_tag ${_activeStyleVariant}`} tag="div"><_Builtin.Paragraph className={`text-size-16 ${_activeStyleVariant}`}>{taglineText}</_Builtin.Paragraph></_Builtin.Block><_Builtin.Block className={`global-hero_heading ${_activeStyleVariant}`} tag="div"><_Builtin.Heading className={`heading-56 ${_activeStyleVariant}`} tag="h1">{headingText}</_Builtin.Heading></_Builtin.Block>{subTextVisibility ? <_Builtin.Block className={`global-hero_subtext ${_activeStyleVariant}`} tag="div"><_Builtin.Paragraph className={`text-size-20 ${_activeStyleVariant}`}>{subText}</_Builtin.Paragraph></_Builtin.Block> : null}</_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className={`global-hero_image-wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                    className={`img-full-width ${_activeStyleVariant}`}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src={image} /><_Builtin.Block className={`global-hero_overlay ${_activeStyleVariant}`} tag="div" /></_Builtin.Block><_Builtin.Block className={`trusted-texture ${_activeStyleVariant}`} tag="div" /></_Component>
    );
}