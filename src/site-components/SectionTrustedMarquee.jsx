"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
    '{"events":{"e-45":{"id":"e-45","name":"","animationType":"custom","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-46"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".home-platform_tabs_link","originalId":"692d9bd50e09dba5c24a1184|10a1e2cb-cfb1-0cb4-f84d-a822aa9a0137","appliesTo":"CLASS"},"targets":[{"selector":".home-platform_tabs_link","originalId":"692d9bd50e09dba5c24a1184|10a1e2cb-cfb1-0cb4-f84d-a822aa9a0137","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764608010221},"e-46":{"id":"e-46","name":"","animationType":"custom","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-45"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".home-platform_tabs_link","originalId":"692d9bd50e09dba5c24a1184|10a1e2cb-cfb1-0cb4-f84d-a822aa9a0137","appliesTo":"CLASS"},"targets":[{"selector":".home-platform_tabs_link","originalId":"692d9bd50e09dba5c24a1184|10a1e2cb-cfb1-0cb4-f84d-a822aa9a0137","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764608010222}},"actionLists":{"a-23":{"id":"a-23","title":"Platform Tab In View","actionItemGroups":[{"actionItems":[{"id":"a-23-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-23-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"692d9bd50e09dba5c24a1184|10a1e2cb-cfb1-0cb4-f84d-a822aa9a0137"},"value":0.5,"unit":""}},{"id":"a-23-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"value":0,"unit":""}},{"id":"a-23-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"value":"none"}}]},{"actionItems":[{"id":"a-23-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"value":"block"}}]},{"actionItems":[{"id":"a-23-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-23-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"value":1,"unit":""}},{"id":"a-23-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":true,"id":"692d9bd50e09dba5c24a1184|10a1e2cb-cfb1-0cb4-f84d-a822aa9a0137"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1764608027377},"a-24":{"id":"a-24","title":"Platform Tab Out View","actionItemGroups":[{"actionItems":[{"id":"a-24-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-24-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"value":0,"unit":""}},{"id":"a-24-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":true,"id":"692d9bd50e09dba5c24a1184|10a1e2cb-cfb1-0cb4-f84d-a822aa9a0137"},"value":0.5,"unit":""}}]},{"actionItems":[{"id":"a-24-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"value":"block"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1764608027377}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SectionTrustedMarquee(
    {
        as: _Component = _Builtin.Section,
        variant = "Base"
    }
) {
    _interactions.useInteractions(_interactionsData);

    const _styleVariantMap = {
        "Base": "",
        "Simple (Brand Trust)": "w-variant-4213180b-e63f-67b7-5309-46770a019abe"
    };

    const _activeStyleVariant = _styleVariantMap[variant];

    return (
        <_Component
            className={`section-trusted ${_activeStyleVariant}`}
            grid={{
                type: "section"
            }}
            tag="section"><_Builtin.Block className={`page-padding ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`container-1224 ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`padding-section-128 ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`trusted_wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`trusted_text-wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`trusted_heading ${_activeStyleVariant}`} tag="div"><_Builtin.Heading className={`heading-48 ${_activeStyleVariant}`} tag="h2">{"Trusted by"}<br />{"Leading Global Innovators"}</_Builtin.Heading><_Builtin.Heading
                                        className={`heading-20 text-color-medium ${_activeStyleVariant}`}
                                        tag="h2">{"Brands that trust us"}</_Builtin.Heading></_Builtin.Block><_Builtin.Paragraph className={`text-size-18 ${_activeStyleVariant}`}>{"Delivering workforce solutions that scale with speed, compliance and impact."}</_Builtin.Paragraph></_Builtin.Block><_Builtin.Block className={`trusted_logos-wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`trusted_logos ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`trusted_logo ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                            className={`img-full-width ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="auto"
                                            height="auto"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692dad0ced04b8679a8d8115_Amazon_logo.svg.webp" /></_Builtin.Block><_Builtin.Block className={`trusted_logo ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                            className={`img-full-width ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="auto"
                                            height="auto"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692dad0c233fa935eaaf1b34_NVIDIA-logo.webp" /></_Builtin.Block><_Builtin.Block className={`trusted_logo ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                            className={`img-full-width ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="auto"
                                            height="auto"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692dad0c146e40140d3bd560_Nike-Logo-1978.png" /></_Builtin.Block><_Builtin.Block className={`trusted_logo ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                            className={`img-full-width ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="auto"
                                            height="auto"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692dad0cea4f0a54a946d3be_Uber_logo_2018.webp" /></_Builtin.Block><_Builtin.Block className={`trusted_logo ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                            className={`img-full-width ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="auto"
                                            height="auto"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692dad0c48f743c700c9ef63_Microsoft_logo_(2012).svg.webp" /></_Builtin.Block><_Builtin.Block className={`trusted_logo ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                            className={`img-full-width ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="auto"
                                            height="auto"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692dad0a2a0a4ebc26f255f2_calendly-logo-brandlogos.net_fftw0yxev.svg" /></_Builtin.Block><_Builtin.Block className={`trusted_logo is-homedepot ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                            className={`img-full-width ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="auto"
                                            height="auto"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692dad0ac1327c6df1f79b56_THD_logo.webp" /></_Builtin.Block><_Builtin.Block className={`trusted_logo ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                            className={`img-full-width ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="auto"
                                            height="auto"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692dad099dfc54a8c22e2494_Box%2C_Inc._logo.svg.webp" /></_Builtin.Block><_Builtin.Block className={`trusted_logo ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                            className={`img-full-width ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="auto"
                                            height="auto"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692dad09f22874c943c05344_datavant-blueblack-3-1.webp" /></_Builtin.Block><_Builtin.Block className={`trusted_logo ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                            className={`img-full-width ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="auto"
                                            height="auto"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692dad0955a9931d2ec74b7a_omniva.webp" /></_Builtin.Block><_Builtin.Block className={`trusted_logo ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                            className={`img-full-width ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="auto"
                                            height="auto"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692dad08f13992493bbf0c77_chewy.png" /></_Builtin.Block></_Builtin.Block><_Builtin.Block className={`trusted_logos ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`trusted_logo ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                            className={`img-full-width ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="auto"
                                            height="auto"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692dad0ced04b8679a8d8115_Amazon_logo.svg.webp" /></_Builtin.Block><_Builtin.Block className={`trusted_logo ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                            className={`img-full-width ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="auto"
                                            height="auto"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692dad0c233fa935eaaf1b34_NVIDIA-logo.webp" /></_Builtin.Block><_Builtin.Block className={`trusted_logo ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                            className={`img-full-width ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="auto"
                                            height="auto"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692dad0c146e40140d3bd560_Nike-Logo-1978.png" /></_Builtin.Block><_Builtin.Block className={`trusted_logo ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                            className={`img-full-width ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="auto"
                                            height="auto"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692dad0cea4f0a54a946d3be_Uber_logo_2018.webp" /></_Builtin.Block><_Builtin.Block className={`trusted_logo ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                            className={`img-full-width ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="auto"
                                            height="auto"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692dad0c48f743c700c9ef63_Microsoft_logo_(2012).svg.webp" /></_Builtin.Block><_Builtin.Block className={`trusted_logo ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                            className={`img-full-width ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="auto"
                                            height="auto"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692dad0a2a0a4ebc26f255f2_calendly-logo-brandlogos.net_fftw0yxev.svg" /></_Builtin.Block><_Builtin.Block className={`trusted_logo is-homedepot ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                            className={`img-full-width ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="auto"
                                            height="auto"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692dad0ac1327c6df1f79b56_THD_logo.webp" /></_Builtin.Block><_Builtin.Block className={`trusted_logo ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                            className={`img-full-width ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="auto"
                                            height="auto"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692dad099dfc54a8c22e2494_Box%2C_Inc._logo.svg.webp" /></_Builtin.Block><_Builtin.Block className={`trusted_logo ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                            className={`img-full-width ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="auto"
                                            height="auto"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692dad09f22874c943c05344_datavant-blueblack-3-1.webp" /></_Builtin.Block><_Builtin.Block className={`trusted_logo ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                            className={`img-full-width ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="auto"
                                            height="auto"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692dad0955a9931d2ec74b7a_omniva.webp" /></_Builtin.Block><_Builtin.Block className={`trusted_logo ${_activeStyleVariant}`} tag="div"><_Builtin.Image
                                            className={`img-full-width ${_activeStyleVariant}`}
                                            loading="lazy"
                                            width="auto"
                                            height="auto"
                                            alt=""
                                            src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692dad08f13992493bbf0c77_chewy.png" /></_Builtin.Block></_Builtin.Block><_Builtin.Block className={`trusted_overlay ${_activeStyleVariant}`} tag="div" /><_Builtin.HtmlEmbed
                                    className={`page-styling ${_activeStyleVariant}`}
                                    value="%3Cstyle%3E%0A.trusted_logos%20%7B%0A%20%20animation%3A%20marqueeMove%2040s%20linear%20infinite%3B%0A%20%20animation-play-state%3A%20running%3B%20%2F*%20Default%20state%20*%2F%0A%7D%0A%0A%40keyframes%20marqueeMove%20%7B%0A%20%200%25%20%7B%0A%20%20%20%20transform%3A%20translateX(0%25)%3B%0A%20%20%7D%0A%20%20100%25%20%7B%0A%20%20%20%20transform%3A%20translateX(-100%25)%3B%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E" /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className={`trusted-texture ${_activeStyleVariant}`} tag="div" /></_Component>
    );
}