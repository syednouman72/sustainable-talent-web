"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
    '{"events":{"e-45":{"id":"e-45","name":"","animationType":"custom","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-46"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".home-platform_tabs_link","originalId":"692d9bd50e09dba5c24a1184|10a1e2cb-cfb1-0cb4-f84d-a822aa9a0137","appliesTo":"CLASS"},"targets":[{"selector":".home-platform_tabs_link","originalId":"692d9bd50e09dba5c24a1184|10a1e2cb-cfb1-0cb4-f84d-a822aa9a0137","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764608010221},"e-46":{"id":"e-46","name":"","animationType":"custom","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-45"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".home-platform_tabs_link","originalId":"692d9bd50e09dba5c24a1184|10a1e2cb-cfb1-0cb4-f84d-a822aa9a0137","appliesTo":"CLASS"},"targets":[{"selector":".home-platform_tabs_link","originalId":"692d9bd50e09dba5c24a1184|10a1e2cb-cfb1-0cb4-f84d-a822aa9a0137","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764608010222}},"actionLists":{"a-23":{"id":"a-23","title":"Platform Tab In View","actionItemGroups":[{"actionItems":[{"id":"a-23-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-23-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"692d9bd50e09dba5c24a1184|10a1e2cb-cfb1-0cb4-f84d-a822aa9a0137"},"value":0.5,"unit":""}},{"id":"a-23-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"value":0,"unit":""}},{"id":"a-23-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"value":"none"}}]},{"actionItems":[{"id":"a-23-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"value":"block"}}]},{"actionItems":[{"id":"a-23-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-23-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"value":1,"unit":""}},{"id":"a-23-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":true,"id":"692d9bd50e09dba5c24a1184|10a1e2cb-cfb1-0cb4-f84d-a822aa9a0137"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1764608027377},"a-24":{"id":"a-24","title":"Platform Tab Out View","actionItemGroups":[{"actionItems":[{"id":"a-24-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-24-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"value":0,"unit":""}},{"id":"a-24-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":true,"id":"692d9bd50e09dba5c24a1184|10a1e2cb-cfb1-0cb4-f84d-a822aa9a0137"},"value":0.5,"unit":""}}]},{"actionItems":[{"id":"a-24-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"value":"block"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1764608027377}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Footer(
    {
        as: _Component = _Builtin.Section
    }
) {
    _interactions.useInteractions(_interactionsData);

    return (
        <_Component
            className="section-footer"
            grid={{
                type: "section"
            }}
            tag="footer"><_Builtin.Block className="page-padding" tag="div"><_Builtin.Block className="container-1224" tag="div"><_Builtin.Block className="padding-section-t120-b60" tag="div"><_Builtin.Block className="section-footer-components" tag="div"><_Builtin.Block
                                className="footer-item-wrapper"
                                id="w-node-d298934e-4e13-03b4-415c-d0da4cd50f7c-4cd50f77"
                                tag="div"><_Builtin.Block className="margin-bottom-32" tag="div"><_Builtin.Link
                                        className="brand"
                                        button={false}
                                        block="inline"
                                        options={{
                                            href: "https://www.sustainabletalent.com/"
                                        }}><_Builtin.Image
                                            className="footer-logo"
                                            loading="lazy"
                                            width="auto"
                                            height="auto"
                                            alt="Logo with a large blue square containing a white letter S, next to the words Sustainable Talent in white text."
                                            src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692dcc6fa7a1cbcf7032ccb6_Logo%20Brand%20Template%20SUSTAINABLE%20TALENT%20(Logo)%20(4).webp" /></_Builtin.Link></_Builtin.Block><_Builtin.Block className="margin-bottom-32" tag="div"><_Builtin.Block className="text-size-24" tag="div">{"Global workforce solutions, powered by TalentOS. Enabled by AI and guided by people."}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="social-media-wrapper" tag="div"><_Builtin.Link
                                        className="social-media-link"
                                        button={false}
                                        aria-label="Facebook Link"
                                        block="inline"
                                        options={{
                                            href: "https://www.facebook.com/SustainableTalentGroup"
                                        }}><_Builtin.HtmlEmbed
                                            className="social-media-icon"
                                            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--bx%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M13.397%2020.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56%201.587-1.56h1.684V3.127A22.336%2022.336%200%200%200%2014.201%203c-2.444%200-4.122%201.492-4.122%204.231v2.355H7.332v3.209h2.753v8.202h3.312z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /></_Builtin.Link><_Builtin.Link
                                        className="social-media-link"
                                        button={false}
                                        aria-label="Instagram Link"
                                        block="inline"
                                        options={{
                                            href: "https://www.instagram.com/sustainable_talent/"
                                        }}><_Builtin.HtmlEmbed
                                            className="social-media-icon"
                                            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--bx%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M11.999%207.377a4.623%204.623%200%201%200%200%209.248a4.623%204.623%200%200%200%200-9.248zm0%207.627a3.004%203.004%200%201%201%200-6.008a3.004%203.004%200%200%201%200%206.008z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%3Ccircle%20cx%3D%2216.806%22%20cy%3D%227.207%22%20r%3D%221.078%22%20fill%3D%22currentColor%22%3E%3C%2Fcircle%3E%3Cpath%20d%3D%22M20.533%206.111A4.605%204.605%200%200%200%2017.9%203.479a6.606%206.606%200%200%200-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755%200-3.71.054a6.554%206.554%200%200%200-2.184.42a4.6%204.6%200%200%200-2.633%202.632a6.585%206.585%200%200%200-.419%202.186c-.043.962-.056%201.267-.056%203.71c0%202.442%200%202.753.056%203.71c.015.748.156%201.486.419%202.187a4.61%204.61%200%200%200%202.634%202.632a6.584%206.584%200%200%200%202.185.45c.963.042%201.268.055%203.71.055s2.755%200%203.71-.055a6.615%206.615%200%200%200%202.186-.419a4.613%204.613%200%200%200%202.633-2.633c.263-.7.404-1.438.419-2.186c.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581%206.581%200%200%200-.421-2.217zm-1.218%209.532a5.043%205.043%200%200%201-.311%201.688a2.987%202.987%200%200%201-1.712%201.711a4.985%204.985%200%200%201-1.67.311c-.95.044-1.218.055-3.654.055c-2.438%200-2.687%200-3.655-.055a4.96%204.96%200%200%201-1.669-.311a2.985%202.985%200%200%201-1.719-1.711a5.08%205.08%200%200%201-.311-1.669c-.043-.95-.053-1.218-.053-3.654c0-2.437%200-2.686.053-3.655a5.038%205.038%200%200%201%20.311-1.687c.305-.789.93-1.41%201.719-1.712a5.01%205.01%200%200%201%201.669-.311c.951-.043%201.218-.055%203.655-.055s2.687%200%203.654.055a4.96%204.96%200%200%201%201.67.311a2.991%202.991%200%200%201%201.712%201.712a5.08%205.08%200%200%201%20.311%201.669c.043.951.054%201.218.054%203.655c0%202.436%200%202.698-.043%203.654h-.011z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /></_Builtin.Link><_Builtin.Link
                                        className="social-media-link"
                                        button={false}
                                        aria-label="Twitter Link"
                                        block="inline"
                                        options={{
                                            href: "https://x.com/sustaintalent?s=21"
                                        }}><_Builtin.HtmlEmbed
                                            className="social-media-icon is-x"
                                            value="%3Csvg%20width%3D%22100%25%22%20viewBox%3D%220%200%2018%2017%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M14.1761%200.390625H16.9362L10.9061%207.16803L18%2016.3906H12.4456L8.0951%2010.7972L3.11723%2016.3906H0.35544L6.80517%209.14143L0%200.390625H5.69545L9.6279%205.50325L14.1761%200.390625ZM13.2073%2014.766H14.7368L4.86441%201.9299H3.2232L13.2073%2014.766Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E" /></_Builtin.Link><_Builtin.Link
                                        className="social-media-link"
                                        button={false}
                                        aria-label="LinkedIn Link"
                                        block="inline"
                                        options={{
                                            href: "https://linkedin.com/company/sustainabletalent/"
                                        }}><_Builtin.HtmlEmbed
                                            className="social-media-icon is-linkedin"
                                            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--bx%22%20width%3D%22100%25%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ccircle%20cx%3D%224.983%22%20cy%3D%225.009%22%20r%3D%222.188%22%20fill%3D%22currentColor%22%3E%3C%2Fcircle%3E%3Cpath%20d%3D%22M9.237%208.855v12.139h3.769v-6.003c0-1.584.298-3.118%202.262-3.118c1.937%200%201.961%201.811%201.961%203.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835%200-3.065%201.007-3.568%201.96h-.051v-1.66H9.237zm-6.142%200H6.87v12.139H3.095z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /></_Builtin.Link></_Builtin.Block></_Builtin.Block><_Builtin.Block
                                className="footer-link-wrapper"
                                id="w-node-d298934e-4e13-03b4-415c-d0da4cd50f97-4cd50f77"
                                tag="div"
                                aria-label="Footer Navigation"><_Builtin.Block className="footer-item" tag="div"><_Builtin.Block className="margin-bottom-32" tag="div"><_Builtin.Block className="text-size-18 font-weight-700" tag="div">{"Quick Links"}</_Builtin.Block></_Builtin.Block><_Builtin.List className="footer-list" tag="ul" unstyled={true}><_Builtin.ListItem className="footer-list-item"><_Builtin.Link
                                                className="footer-link-item"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "https://www.sustainabletalent.com/platform"
                                                }}>{"Platform"}</_Builtin.Link></_Builtin.ListItem><_Builtin.ListItem className="footer-list-item"><_Builtin.Link
                                                className="footer-link-item"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "/platform#solutions"
                                                }}>{"Solutions"}</_Builtin.Link></_Builtin.ListItem><_Builtin.ListItem className="footer-list-item"><_Builtin.Link
                                                className="footer-link-item"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "https://www.sustainabletalent.com/about"
                                                }}>{"About Us"}</_Builtin.Link></_Builtin.ListItem><_Builtin.ListItem className="footer-list-item"><_Builtin.Link
                                                className="footer-link-item"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "https://www.sustainabletalent.com/job-listings"
                                                }}>{"Jobs"}</_Builtin.Link></_Builtin.ListItem><_Builtin.ListItem className="footer-list-item"><_Builtin.Link
                                                className="footer-link-item"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "https://www.sustainabletalent.com/contact-us"
                                                }}>{"Contact Us"}</_Builtin.Link></_Builtin.ListItem></_Builtin.List></_Builtin.Block><_Builtin.Block className="footer-item" tag="div"><_Builtin.Block className="margin-bottom-32" tag="div"><_Builtin.Block className="text-size-18 font-weight-700" tag="div">{"Contact Info"}</_Builtin.Block></_Builtin.Block><_Builtin.List className="footer-list" tag="ul" unstyled={true}><_Builtin.ListItem className="footer-list-item"><_Builtin.Link
                                                className="footer-link-item"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "https://maps.app.goo.gl/zteq6qGvKg7W7Dt79",
                                                    target: "_blank"
                                                }}>{"1200 Brickell Avenue, Suite 1950 #1170. Miami, FL33131"}</_Builtin.Link></_Builtin.ListItem><_Builtin.ListItem className="footer-list-item"><_Builtin.Link
                                                className="footer-link-item"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "mailto:talent@sustainabletalent.com"
                                                }}>{"talent@sustainabletalent.com"}</_Builtin.Link></_Builtin.ListItem><_Builtin.ListItem className="footer-list-item"><_Builtin.Link
                                                className="footer-link-item"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "tel:+17545818658"
                                                }}>{"(754) 581-8658"}</_Builtin.Link></_Builtin.ListItem></_Builtin.List></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className="footer-year-wrapper" tag="div"><_Builtin.Block className="footer-copyright" tag="div"><_Builtin.Block className="text-size-16" tag="div">{"Copyright "}<_Builtin.Span className="year" data-year="">{"2025"}</_Builtin.Span>{" Sustainable Talent. All Rights Reserved."}</_Builtin.Block></_Builtin.Block><_Builtin.List className="footer-list is-policy" tag="ul" unstyled={true}><_Builtin.ListItem className="footer-list-item margin-bottom-0"><_Builtin.Link
                                        className="footer-link-item"
                                        button={false}
                                        block=""
                                        options={{
                                            href: "https://www.sustainabletalent.com/privacy-policy"
                                        }}>{"Privacy Policy"}</_Builtin.Link></_Builtin.ListItem><_Builtin.ListItem className="footer-list-item margin-bottom-0"><_Builtin.Link
                                        className="footer-link-item"
                                        button={false}
                                        block=""
                                        options={{
                                            href: "https://www.sustainabletalent.com/terms-of-service"
                                        }}>{"Terms of Service"}</_Builtin.Link></_Builtin.ListItem><_Builtin.ListItem className="footer-list-item margin-bottom-0"><_Builtin.Link
                                        className="footer-link-item"
                                        button={false}
                                        block=""
                                        options={{
                                            href: "https://www.sustainabletalent.com/cookies-policy"
                                        }}>{"Cookies Policy"}</_Builtin.Link></_Builtin.ListItem></_Builtin.List></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Component>
    );
}