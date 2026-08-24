import { html, htmlToResponse } from "@mastrojs/mastro";
import { Layout } from "../components/Layout.ts";

export const GET = (_req: Request) =>
    htmlToResponse(
        html`
        <!DOCTYPE html>
        <html>
            <head>
                <link rel="stylesheet" href="/styles.css">
                <link rel="stylesheet" href="cdn/fonts/BespokeStencil_Complete/Fonts/WEB/css/bespoke-stencil.css">
                <link rel="stylesheet" href="cdn/fonts/Supreme_Complete/Fonts/WEB/css/supreme.css">
            </head>
            <body>
                <section id="hero">
                    <div class="ticker-tape">
                        <div class="ticker">
                            <div class="ticker__item">Breaking News: AdaHack declared best hackathon ever...</div>
                            <div class="ticker__item">... by the Edinburgh Hoppers Team <3</div>
                            <div class="ticker__item">Its actually awesome you should go - Skye</div>
                            <div class="ticker__item" style="text-transform: uppercase;">The best pizza in town</div>
                            <div class="ticker__item">I don't think you get it its actually really really good you should go!</div>
                        </div>
                    </div>

                    <h1>AdaHack</h1>
                    <h2>Sunday, 5th October 2025 - Informatics Forum G.07</h2>
                    <svg
                        width="1920"
                        height="595"
                        viewBox="0 0 1920 595"
                        version="1.1"
                        id="svg1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:svg="http://www.w3.org/2000/svg">
                        <defs id="defs1" />
                        <g id="layer1">
                            <path id="rect1" style="fill:#c1d9f7;stroke-width:0.999785;stroke-opacity:0.824243" d="M 0,53.455304 V 0 H 1920 V 595 H 863.15608 c 0,0 728.66952,-541.544696 312.54872,-541.544696 z" />
                        </g>
                    </svg>
                </section>
                <section>
                </section>
            </body>
        `
    );
