"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function NavbarComponentV4(
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
                }}><_Builtin.Block className="page-padding" tag="div"><_Builtin.Block className="container-1224" tag="div"><_Builtin.Block className="padding-section-20" tag="div"><_Builtin.Block className="navbar-component_wrapper is-centered" tag="div"><_Builtin.NavbarBrand
                                    className="brand-logo"
                                    options={{
                                        href: "https://www.sustainabletalent.com/"
                                    }}><_Builtin.Image
                                        className="img-full-width"
                                        loading="lazy"
                                        width="auto"
                                        height="auto"
                                        alt="Logo Placholder"
                                        src="https://cdn.prod.website-files.com/692d9bd20e09dba5c24a10a4/692d9bd50e09dba5c24a118b_Logo.svg" /></_Builtin.NavbarBrand><_Builtin.NavbarMenu className="navbar-component_menu" tag="nav" role="navigation"><_Builtin.Block className="navbar-component_menu-item-wrapper" tag="div"><_Builtin.List className="navmenu-list_wrapper" tag="ul" unstyled={true}><_Builtin.ListItem className="navmenu-list_item-wrapper"><_Builtin.Link
                                                    className="navmenu-item-link"
                                                    button={false}
                                                    block=""
                                                    options={{
                                                        href: "#"
                                                    }}>{"Home"}</_Builtin.Link></_Builtin.ListItem><_Builtin.ListItem className="navmenu-list_item-wrapper"><_Builtin.Link
                                                    className="navmenu-item-link"
                                                    button={false}
                                                    block=""
                                                    options={{
                                                        href: "#"
                                                    }}>{"About"}</_Builtin.Link></_Builtin.ListItem><_Builtin.ListItem className="navmenu-list_item-wrapper"><_Builtin.Link
                                                    className="navmenu-item-link"
                                                    button={false}
                                                    block=""
                                                    options={{
                                                        href: "#"
                                                    }}>{"Pricing"}</_Builtin.Link></_Builtin.ListItem></_Builtin.List><_Builtin.List className="navmenu-list_wrapper" tag="ul" unstyled={true}><_Builtin.ListItem className="navmenu-list_item-wrapper"><_Builtin.DropdownWrapper className="nav-dropdown_wrapper" tag="div" delay={0} hover={false}><_Builtin.DropdownToggle className="nav-dropdown_toggle" tag="div"><_Builtin.Block tag="div">{"Services"}</_Builtin.Block><_Builtin.Icon
                                                            className="nav-dropdown_icon"
                                                            widget={{
                                                                type: "icon",
                                                                icon: "dropdown-toggle"
                                                            }} /></_Builtin.DropdownToggle><_Builtin.DropdownList className="nav-dropdown-list-2 shadow-three mobile-shadow-hide" tag="nav"><_Builtin.DropdownLink
                                                            className="nav-dropdown-link"
                                                            options={{
                                                                href: "#"
                                                            }}>{"Resource Link 1"}</_Builtin.DropdownLink><_Builtin.DropdownLink
                                                            className="nav-dropdown-link"
                                                            options={{
                                                                href: "#"
                                                            }}>{"Resource Link 2"}</_Builtin.DropdownLink><_Builtin.DropdownLink
                                                            className="nav-dropdown-link"
                                                            options={{
                                                                href: "#"
                                                            }}>{"Resource Link 3"}</_Builtin.DropdownLink></_Builtin.DropdownList></_Builtin.DropdownWrapper></_Builtin.ListItem><_Builtin.ListItem className="navmenu-list_item-wrapper"><_Builtin.Link
                                                    className="navmenu-item-link"
                                                    button={false}
                                                    block=""
                                                    options={{
                                                        href: "#"
                                                    }}>{"Features"}</_Builtin.Link></_Builtin.ListItem><_Builtin.ListItem className="navmenu-list_item-wrapper"><_Builtin.Link
                                                    className="navmenu-item-link"
                                                    button={false}
                                                    block=""
                                                    options={{
                                                        href: "#"
                                                    }}>{"Porfolio"}</_Builtin.Link></_Builtin.ListItem></_Builtin.List></_Builtin.Block></_Builtin.NavbarMenu><_Builtin.NavbarButton className="menu-button" tag="div"><_Builtin.Icon
                                        widget={{
                                            type: "icon",
                                            icon: "nav-menu"
                                        }} /></_Builtin.NavbarButton></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.NavbarWrapper></_Component>
    );
}