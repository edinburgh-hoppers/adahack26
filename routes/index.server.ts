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
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
                <title>AdaHack 26</title>
                <link rel="icon" type="image/x-icon" href="cdn/media/favicon.ico">
            </head>
            <body>
                <section id="hero">
                    <div class="a">
                        <div class="ticker-tape">
                            <div class="ticker">
                                <div class="ticker__item">Breaking News: AdaHack declared best hackathon ever...</div>
                                <div class="ticker__item">... by the Edinburgh Hoppers Team <3</div>
                                <div class="ticker__item">Its actually awesome you should go - Skye</div>
                                <div class="ticker__item"><a href="https://docs.google.com/forms/d/e/1FAIpQLSeCSKGyveJcdLX-C1ss0DWQUCBpII6USwRGcLErS5YmwuTyGw/viewform?usp=header">Sign up here!!</a></div>
                                <div class="ticker__item" style="text-transform: uppercase;">there are prizes</div>
                                <div class="ticker__item">I don't think you get it its actually really really good you should go!</div>
                                <div class="ticker__item">A fantastic first hackathon</div>
                                <div class="ticker__item">Website is made with ♥ by Skye, and with support from the whole Hoppers team</div>
                                <div class="ticker__item"></div>
                            </div>
                        </div>

                        <div class="flex adahacktitle"><h1>Ada</h1><h1 style="margin-right: 20%">Hack</h1><div class="container"><h1><a href="https://docs.google.com/forms/d/e/1FAIpQLSeCSKGyveJcdLX-C1ss0DWQUCBpII6USwRGcLErS5YmwuTyGw/viewform?usp=header">Sign<br>Up!!!</h1></a><div class="container__star"><div class="star-eight"></div></div></div></div>
                        <div class="flex adahacksubtitle"><h2>Saturday, 3rd October 2026&emsp;</h2><h2>Informatics Forum G.07</h2></div>
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
                            <a title="Daguerrotype of Ada Lovelace taken by Antoine Claudet, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Ada_Lovelace_daguerreotype_by_Antoine_Claudet_1843_-_cropped.png">
                                <img alt="Ada Lovelace daguerreotype by Antoine Claudet 1843 - cropped" src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Ada_Lovelace_daguerreotype_by_Antoine_Claudet_1843_-_cropped.png/250px-Ada_Lovelace_daguerreotype_by_Antoine_Claudet_1843_-_cropped.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail">
                            </a>
                            <div>
                                <p>
                                    Named after mathematician, writer, and computer scientist <abbr title="The Right Honourable Countess of Lovelace">Ada Lovelace</abbr>, AdaHack is <a href="edinburghhoppers.com" title="The Edinburgh University Official Society for Women, Non-Binary and Transgender people in the School of Informatics">Hoppers'</a> 12 hour yearly hackathon! 
                                    <br><br>
                                    Featuring challenges from our <a href="https://edinburghhoppers.com/sponsors">sponsors</a> and our sister society <a href="https://comp-soc.com" title="University of Edinburgh's Technology society">CompSoc</a>, contenstants will battle it out in teams to write an app, website, program, or tool in just 12 hours for the chance to bring home the prizes in each track! Target one or target them all, AdaHack will bring the snacks &#59;&#41;
                                    <br><br>
                                    Find us at the Informatics Forum on <span style="color: hotpink">Saturday, 3rd of October, at 8:30</span> (although you may come later, just be aware it may be harder to put you into a team). The event is open to all students, not just Hoppers members, and all skill levels! All you need to bring is yourself and a <abbr title="or other coding machine, ZX Spectrums are allowed but IBM mainframes are a little too big to fit through the door &#58;&#41;">laptop</abbr>.
                                    <br><br>
                                    Want to join in? Sign up <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCSKGyveJcdLX-C1ss0DWQUCBpII6USwRGcLErS5YmwuTyGw/viewform?usp=header">at this link</a> or go to <br><code>adahack.edinburghhoppers.com/signup</code></p>
                        </div>
                    </fieldset>
                </section>
                <section id="schedule">
                    <fieldset>
                        <legend><h1>Schedule</h1></legend>
                        <p>
                            08:30 Check-In + team and table allocation<br>
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
                <section id="getting-here">
                    <fieldset>
                        <legend><h1>Getting here</h1></legend>
                        <div id="map" class="jsonly"></div>
                        <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
                        <script src="map.js"></script>
                        <noscript>It looks like you have JavaScript turned off. There should be a map here instead of this message but it sadly requires JavaScript. Instead I am here to tell you that you can attend AdaHack in the Informatics Forum at 8:30am or later on the 3rd of October!</noscript>
                    </fieldset>
                </section>
                <br>
                <section id="faq">
                    <fieldset>
                        <legend><h1>Frequently Asked Questions</h1></legend>
                        <details>
                            <summary>Is the event accessable?</summary>
                            <p>We aim for it to be so!<br><br>

                            The Informatics Forum has disability friendly toilets. A self-operated transfer lift is being investigated.

                            The rooms we will use for the event is fitted with an induction loop, and the possibility of installing Auracast for those who have hearing aids compatable with it is being investigated.<br><br>

                            No printed material is used, however if you would like the primary signs (such as those for the bathroom) have a braille alternative please let us know!</p>
                        </details>
                        <details>
                            <summary>Where can I register to be a participant?</summary>
                            <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSeCSKGyveJcdLX-C1ss0DWQUCBpII6USwRGcLErS5YmwuTyGw/viewform?usp=header">Right here!</a></p>
                        </details>
                        <details>
                            <summary>How can I get in touch with the Hoppers team?</summary>
                            <p>We are reachable at <a href="mailto:edinburghhoppers@gmail.com">edinburghhoppers@gmail.com</a> and would love to hear from you!</p>
                        </details>
                        <details>
                            <summary>I am a postgraduate student, can I participate?</summary>
                            <p>Yes you can! The hackathon is open to students of all levels of study from universities across the UK.</p>
                        </details>
                        <details>
                            <summary>I don't have a team, can I join?</summary>
                            <p>Yes! We will be forming teams on-site prior to the opening ceremony. Teams have a maximum size of 4 people. You can also come along with a team pre-prepared if you'd like.</p>
                        </details>
                        <details>
                            <summary>I'm not great at programming, will I still be able to do the workshops and challenges?</summary>
                            <p>Yes, absolutely! The winning team is decided by who makes the most impressive project. A good idea beats technical skill, and AdaHack is a fantastic place to learn new skills.</p>
                        </details>
                        <details>
                            <summary>I don't study informatics, can I join?</summary>
                            <p>Yes, you can. This hackathon is opened to students from any degree programme.</p>
                        </details>
                        <details>
                            <summary>Will there be mentors present to help if we're struggling during the hackathon?</summary>
                            <p>Yes, we'll have lots of experienced mentors to help with any problems you have.</p>
                        </details>
                        <details>
                            <summary>Will there be prizes</summary>
                            <p>Yes! Prizes will be available for each challenge as well as the mini games so there's lots of chances to win!</p>
                        </details>
                    </fieldset>
                </section>
            </body>
        `
    );
