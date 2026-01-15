"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { ButtonPrimary } from "./ButtonPrimary";

const _interactionsData = JSON.parse(
    '{"events":{"e-17":{"id":"e-17","name":"","animationType":"custom","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-18"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d10a2b39-4681-a522-f8d9-ab8386f233e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d10a2b39-4681-a522-f8d9-ab8386f233e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1665623242087},"e-18":{"id":"e-18","name":"","animationType":"custom","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-17"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d10a2b39-4681-a522-f8d9-ab8386f233e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d10a2b39-4681-a522-f8d9-ab8386f233e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1665623242088},"e-23":{"id":"e-23","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-13","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-13-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1665639466212}},"actionLists":{"a-7":{"id":"a-7","title":"Navbar Open","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".lottie-animation","selectorGuids":["61669751-0b3f-f89a-e385-4fe503544bb3"]},"value":0}},{"id":"a-7-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bg-overlay","selectorGuids":["0143b7cd-44d1-f801-cdb8-bbf4be25d604"]},"value":"none"}},{"id":"a-7-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bg-overlay","selectorGuids":["0143b7cd-44d1-f801-cdb8-bbf4be25d604"]},"heightValue":0,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-7-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bg-overlay","selectorGuids":["0143b7cd-44d1-f801-cdb8-bbf4be25d604"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-7-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bg-overlay","selectorGuids":["0143b7cd-44d1-f801-cdb8-bbf4be25d604"]},"value":"block"}}]},{"actionItems":[{"id":"a-7-n-6","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".lottie-animation","selectorGuids":["61669751-0b3f-f89a-e385-4fe503544bb3"]},"value":50}},{"id":"a-7-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bg-overlay","selectorGuids":["0143b7cd-44d1-f801-cdb8-bbf4be25d604"]},"value":1,"unit":""}},{"id":"a-7-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bg-overlay","selectorGuids":["0143b7cd-44d1-f801-cdb8-bbf4be25d604"]},"heightValue":100,"widthUnit":"PX","heightUnit":"vh","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665623259185},"a-8":{"id":"a-8","title":"Navbar Close","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":200,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".lottie-animation","selectorGuids":["61669751-0b3f-f89a-e385-4fe503544bb3"]},"value":0}},{"id":"a-8-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bg-overlay","selectorGuids":["0143b7cd-44d1-f801-cdb8-bbf4be25d604"]},"value":0,"unit":""}},{"id":"a-8-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":200,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-bg-overlay","selectorGuids":["0143b7cd-44d1-f801-cdb8-bbf4be25d604"]},"heightValue":0,"widthUnit":"PX","heightUnit":"%","locked":false}}]},{"actionItems":[{"id":"a-8-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".nav-bg-overlay","selectorGuids":["0143b7cd-44d1-f801-cdb8-bbf4be25d604"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1665623453299},"a-13":{"id":"a-13","title":"nav","continuousParameterGroups":[{"id":"a-13-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-13-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".nav-bg","selectorGuids":["8ac3e915-fcae-2400-dc16-21be874d3a94"]},"yValue":-15,"xUnit":"PX","yUnit":"em","zUnit":"PX"}}]},{"keyframe":1,"actionItems":[{"id":"a-13-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".nav-bg","selectorGuids":["8ac3e915-fcae-2400-dc16-21be874d3a94"]},"yValue":0,"xUnit":"PX","yUnit":"em","zUnit":"PX"}}]}]}],"createdOn":1665639899078}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navbar(
    {
        as: _Component = _Builtin.NavbarWrapper
    }
) {
    _interactions.useInteractions(_interactionsData);

    return (
        <_Component
            className="navbar"
            data-w-id="d10a2b39-4681-a522-f8d9-ab8386f233e9"
            tag="div"
            fs-scrolldisable-element="smart-nav"
            config={{
                animation: "default",
                collapse: "medium",
                docHeight: true,
                duration: 400,
                easing: "ease",
                easing2: "ease",
                noScroll: false
            }}><_Builtin.Block className="ie-notification" tag="div"><_Builtin.Block className="page-padding" tag="div"><_Builtin.Block className="max-width-medium margin-auto" tag="div"><_Builtin.Block tag="div">{"Hello. Your user experience on our site might be different because you are on Internet Explorer, switch to Chrome or Safari for a better experience."}</_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className="page-padding" tag="div"><_Builtin.Block className="container-1224" tag="div"><_Builtin.Block className="nav-menu-wrapperr" tag="header"><_Builtin.NavbarBrand
                            className="brand"
                            options={{
                                href: "https://www.sustainabletalent.com/"
                            }}><_Builtin.Image
                                className="nav-logo"
                                loading="lazy"
                                width="1000"
                                height="1000"
                                alt="Logo with a large letter S in a blue square followed by the words Sustainable Talent, with Sustainable in gray and Talent in blue script."
                                src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692da202339a48ec704016e9_Logo%20Brand%20Template%20SUSTAINABLE%20TALENT%20(Logo)%20(2).webp" /></_Builtin.NavbarBrand><_Builtin.NavbarMenu
                            className="nav-menu"
                            tag="nav"
                            role="navigation"
                            aria-label="Main Site Navigation"><_Builtin.Block className="nav-menu-item is-center" tag="div"><_Builtin.List className="nav-list-flex-h" tag="ul" unstyled={true}><_Builtin.ListItem className="nav-list-item"><_Builtin.Link
                                            className="text-link-nav"
                                            button={false}
                                            block=""
                                            options={{
                                                href: "https://www.sustainabletalent.com/platform"
                                            }}>{"PLATFORM"}</_Builtin.Link></_Builtin.ListItem><_Builtin.ListItem className="nav-list-item"><_Builtin.Link
                                            className="text-link-nav"
                                            button={false}
                                            block=""
                                            options={{
                                                href: "/platform#solutions"
                                            }}>{"SOLUTIONS"}</_Builtin.Link></_Builtin.ListItem><_Builtin.ListItem className="nav-list-item"><_Builtin.Link
                                            className="text-link-nav"
                                            button={false}
                                            block=""
                                            options={{
                                                href: "https://www.sustainabletalent.com/about"
                                            }}>{"ABOUT US"}</_Builtin.Link></_Builtin.ListItem><_Builtin.ListItem className="nav-list-item"><_Builtin.Link
                                            className="text-link-nav"
                                            button={false}
                                            block=""
                                            options={{
                                                href: "https://www.sustainabletalent.com/contact-us"
                                            }}>{"CONTACT"}</_Builtin.Link></_Builtin.ListItem></_Builtin.List></_Builtin.Block><_Builtin.Block className="nav-menu-item" tag="div"><_Builtin.List className="nav-list-flex-h" tag="ul" unstyled={true}><_Builtin.ListItem className="nav-list-item is-button"><ButtonPrimary
                                            buttonLabel="Explore Jobs"
                                            buttonLink={{
                                                href: "https://www.sustainabletalent.com/job-listings"
                                            }} /><ButtonPrimary
                                            buttonLabel="TalentOS"
                                            variant="Ghost"
                                            buttonLink={{
                                                href: "https://portal.sustainabletalent.com/",
                                                target: "_blank"
                                            }} /></_Builtin.ListItem></_Builtin.List></_Builtin.Block></_Builtin.NavbarMenu><_Builtin.NavbarButton className="menu-button" tag="div"><_Builtin.NotSupported _atom="Animation" /></_Builtin.NavbarButton></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className="nav-bg-overlay" tag="div" /><_Builtin.Block className="nav-bg" tag="div" /></_Component>
    );
}