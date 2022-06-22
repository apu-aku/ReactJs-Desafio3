//@ts-check

import React from "react";
import "./NavBar.css"

export default function NavBar({ children }){
    return (
        <nav className="navBar">
            <article className="navLogo"> LogoGenerico™ </article>

            <article className="navList">
                <a href="">Menú</a>
                <a href="">Take-Away</a>
                <a href="">Establecimientos</a>
            </article>

            <article className="navIcon"> { children } </article>

        </nav>
    );
}