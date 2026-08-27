import { html, htmlToResponse } from "@mastrojs/mastro";
import { Layout } from "../components/Layout.ts";

export const GET = (_req: Request) =>
    htmlToResponse(
        html`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <link rel="stylesheet" href="/styles.css">
                <link rel="stylesheet" href="/ticker.css">
                <link rel="stylesheet" href="cdn/fonts/BespokeStencil_Complete/Fonts/WEB/css/bespoke-stencil.css">
                <link rel="stylesheet" href="cdn/fonts/Supreme_Complete/Fonts/WEB/css/supreme.css">
            </head>
            <body>
                <section id="hero">
                    <div class="a">
                        <div class="ticker-tape">
                            <div class="ticker">
                                <div class="ticker__item">Breaking News: AdaHack declared best hackathon ever...</div>
                                <div class="ticker__item">... by the Edinburgh Hoppers Team <3</div>
                                <div class="ticker__item">Its actually awesome you should go - Skye</div>
                                <div class="ticker__item" style="text-transform: uppercase;">The best pizza in town</div>
                                <div class="ticker__item">I don't think you get it its actually really really good you should go!</div>
                            </div>
                        </div>

                        <div class="flex adahacktitle"><h1>Ada</h1><h1>Hack</h1><img><img></div>
                        <div class="flex adahacksubtitle"><h2>Sunday, 5th October 2025&emsp;</h2><h2>Informatics Forum G.07</h2></div>
                        <img src="/cdn/media/AdaHack25-clipped.png">
                    </div>
                    <div class="b">
                        <h1>2<br>0<br>2<br>6</h1>
                    </div>
                </section>
                <section id="about">
                    <fieldset>
                        <legend><h1>About AdaHack</h1></legend>
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/960px-Ada_Lovelace_portrait.jpg">
                            <div>
                                <p>Join us for AdaHack 2025 - a 12-hour hackathon in honour of Mathematician Ada Lovelace! The theme this year is INNOVATION. Anyone is welcome. During the day you'll choose from a selection of coding challenges that your team needs to try and solve. You'll have the opportunity to network, meet like-minded individuals, and improve your technical skills. Food, drinks, snacks, and mini-games will be provided. We hope to see you there!</p>
                                <h2>Where to find us</h2>
                                <p>The Edinburgh Hoppers the official society for gender minorities in the School of Informatics at the University of Edinburgh. Our aim to create a safe and inclusive environment for gender minorities in informatics to meet, make lasting connections, have fun, and learn.</p>
                        </div>
                    </fieldset>
                </section>
                <section id="schedule">
                    <fieldset>
                        <legend><h1>Schedule</h1></legend>
                        <p>
                            08:00 Check-In<br>
                            08:30 Team and table allocation<br>
                            09:15 Opening presentation & briefs explained<br>
                            09:45 Coding begins!<br>
                            13:00 LUNCH<br>
                            18:15 Final submission deadline<br>
                            18:30 Final round of judging starts<br>
                            19:30 DINNER<br>
                            19:45 Second round of judging ends<br>
                            20:15 Closing presentation and prizes<br>
                            21:00 END
                        </p>
                    </fieldset>
                </section>
            </body>
        `
    );
