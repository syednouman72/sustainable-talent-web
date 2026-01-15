"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function BannerComponentV4(
    {
        as: _Component = _Builtin.Section
    }
) {
    return (
        <_Component
            className="section-banner-component"
            grid={{
                type: "section"
            }}
            tag="section"><_Builtin.Block className="page-padding" tag="div"><_Builtin.Block className="container-1224" tag="div"><_Builtin.Block className="padding-section-24 is-padding-8" tag="div"><_Builtin.Block className="banner-component_wrapper is-space-between" tag="div"><_Builtin.Block className="banner-component_txt-wrapper" tag="div"><_Builtin.Block className="text-size-14 text-color-white" tag="div">{"Don't miss out on amazing deals! Join our newsletter to receive a "}<_Builtin.Span className="text-color-orange">{"10% OFF code"}</_Builtin.Span></_Builtin.Block></_Builtin.Block><_Builtin.FormWrapper className="banner-component_form-block"><_Builtin.FormForm
                                    className="banner-component_form"
                                    name="wf-form-Banner-Form"
                                    data-name="Banner Form"
                                    method="get"
                                    id="wf-form-Banner-Form"><_Builtin.Block className="banner-component-form_input-wrapper" tag="div"><_Builtin.FormTextInput
                                            className="banner-component-form_input-field"
                                            name="email"
                                            maxLength={256}
                                            data-name="Email"
                                            placeholder="Enter your email address"
                                            disabled={false}
                                            type="email"
                                            required={true}
                                            autoFocus={false}
                                            id="email" /><_Builtin.FormButton
                                            className="banner-component-form_submit"
                                            type="submit"
                                            value="Get Started"
                                            data-wait="Get Started" /></_Builtin.Block></_Builtin.FormForm><_Builtin.FormSuccessMessage><_Builtin.Block tag="div">{"Thank you! Your submission has been received!"}</_Builtin.Block></_Builtin.FormSuccessMessage><_Builtin.FormErrorMessage><_Builtin.Block tag="div">{"Oops! Something went wrong while submitting the form."}</_Builtin.Block></_Builtin.FormErrorMessage></_Builtin.FormWrapper></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Component>
    );
}