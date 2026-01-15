"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { HomeHeadings } from "./HomeHeadings";

const _interactionsData = JSON.parse(
    '{"events":{"e-45":{"id":"e-45","name":"","animationType":"custom","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-46"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".home-platform_tabs_link","originalId":"692d9bd50e09dba5c24a1184|10a1e2cb-cfb1-0cb4-f84d-a822aa9a0137","appliesTo":"CLASS"},"targets":[{"selector":".home-platform_tabs_link","originalId":"692d9bd50e09dba5c24a1184|10a1e2cb-cfb1-0cb4-f84d-a822aa9a0137","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764608010221},"e-46":{"id":"e-46","name":"","animationType":"custom","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-45"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".home-platform_tabs_link","originalId":"692d9bd50e09dba5c24a1184|10a1e2cb-cfb1-0cb4-f84d-a822aa9a0137","appliesTo":"CLASS"},"targets":[{"selector":".home-platform_tabs_link","originalId":"692d9bd50e09dba5c24a1184|10a1e2cb-cfb1-0cb4-f84d-a822aa9a0137","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764608010222}},"actionLists":{"a-23":{"id":"a-23","title":"Platform Tab In View","actionItemGroups":[{"actionItems":[{"id":"a-23-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-23-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"692d9bd50e09dba5c24a1184|10a1e2cb-cfb1-0cb4-f84d-a822aa9a0137"},"value":0.5,"unit":""}},{"id":"a-23-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"value":0,"unit":""}},{"id":"a-23-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"value":"none"}}]},{"actionItems":[{"id":"a-23-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"value":"block"}}]},{"actionItems":[{"id":"a-23-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-23-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"value":1,"unit":""}},{"id":"a-23-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":true,"id":"692d9bd50e09dba5c24a1184|10a1e2cb-cfb1-0cb4-f84d-a822aa9a0137"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1764608027377},"a-24":{"id":"a-24","title":"Platform Tab Out View","actionItemGroups":[{"actionItems":[{"id":"a-24-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-24-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"value":0,"unit":""}},{"id":"a-24-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":true,"id":"692d9bd50e09dba5c24a1184|10a1e2cb-cfb1-0cb4-f84d-a822aa9a0137"},"value":0.5,"unit":""}}]},{"actionItems":[{"id":"a-24-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-size-18","selectorGuids":["f183aef7-41f1-7a5c-3e07-8edb3eceec50"]},"value":"block"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1764608027377}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SectionCta(
    {
        as: _Component = _Builtin.Section
    }
) {
    _interactions.useInteractions(_interactionsData);

    return (
        <_Component
            className="section-cta"
            grid={{
                type: "section"
            }}
            tag="section"
            id="cta"><_Builtin.Block className="page-padding" tag="div"><_Builtin.Block className="container-1224" tag="div"><_Builtin.Block className="cta_wrapper" tag="div"><_Builtin.Block className="cta_details" tag="div"><_Builtin.Block className="cta_text-wrapper" tag="div"><HomeHeadings
                                    tagline=""
                                    taglineVisibility={false}
                                    heading="Start growing your contractor and recruiting engine"
                                    description="Sustainable Talent supports critical hires or full global contractor programs through one unified system and partner that keeps pace with your roadmap."
                                    descriptionVisibility={false} /></_Builtin.Block><_Builtin.Block className="cta_email" tag="div"><_Builtin.FormWrapper className="cta_email_block"><_Builtin.FormForm
                                        className="cta_email_form"
                                        name="wf-form-CTA-Email-Form"
                                        data-name="CTA Email Form"
                                        method="get"
                                        id="wf-form-CTA-Email-Form"><_Builtin.Block className="cta_email_field" tag="div"><_Builtin.FormTextInput
                                                className="input-field"
                                                name="CTA-Email"
                                                maxLength={256}
                                                data-name="CTA Email"
                                                placeholder="Enter your email address"
                                                disabled={false}
                                                type="email"
                                                required={true}
                                                autoFocus={false}
                                                id="CTA-Email" /><_Builtin.DOM className="btn-primary is-ctasubmit" tag="button" slot="" type="submit"><_Builtin.Block className="text-size-16 font-weight-700" tag="div">{"Submit"}</_Builtin.Block></_Builtin.DOM></_Builtin.Block></_Builtin.FormForm><_Builtin.FormSuccessMessage className="contact-form_success"><_Builtin.Block className="text-size-18" tag="div">{"Thank you! Your submission has been received!"}</_Builtin.Block></_Builtin.FormSuccessMessage><_Builtin.FormErrorMessage><_Builtin.Block tag="div">{"Oops! Something went wrong while submitting the form."}</_Builtin.Block></_Builtin.FormErrorMessage></_Builtin.FormWrapper></_Builtin.Block></_Builtin.Block><_Builtin.Block className="cta_image" tag="div"><_Builtin.Image
                                className="img-full-width"
                                loading="lazy"
                                width="auto"
                                height="auto"
                                alt=""
                                src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/6936f84f8155060468b2850d_dash%20replit.webp" /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className="trusted-texture" tag="div" /></_Component>
    );
}