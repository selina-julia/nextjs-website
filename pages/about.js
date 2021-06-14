import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import NextNprogress from 'nextjs-progressbar';
import ProgressBar from 'progressbar.js'
import {faCode, faPencilRuler} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export default function About() {
    return (
        <Layout about>

            <div className={utilStyles.heading_wrapper}>
                <p className={utilStyles.subheading}>Was ich kann</p>
                <h2 className={utilStyles.style_h2}>Skills & Tools</h2>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className={utilStyles.skill_item}>
                        <h3 className={utilStyles.style_h3}>UI/UX Design</h3>
                        <p>
                            Ich gestalte die User Experience von mobilen Applikationen bis hin zu Desktopanwendungen.
                            Dabei ist es mir wichtig, digitale Produkte zu entwickeln, die einfach zu bedienen, Spaß
                            machen und visuell ansprechend sind.
                        </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={utilStyles.skill_item}>
                        <h3 className={utilStyles.style_h3}>Web Development</h3>
                        <p>
                            Egal, ob Websites mit Wordpress oder Web Apps mit Angular oder React - ich bin für jede
                            Herausforderung offen und stürze mich gerne mal in ein Projekt, um neue Bereiche der
                            Web-Entwicklung zu erkunden.
                        </p>
                    </div>
                </div>
            </div>

            <div className={utilStyles.tool_wrapper}>
                <div className={utilStyles.tool_entry}>HTML</div>
                <div className={utilStyles.tool_entry}>CSS (SASS, LESS)</div>
                <div className={utilStyles.tool_entry}>JavaScript</div>
                <div className={utilStyles.tool_entry}>PHP</div>
                <div className={utilStyles.tool_entry}>Angular</div>
                <div className={utilStyles.tool_entry}>React (Next.js)</div>
                <div className={utilStyles.tool_entry}>Git</div>
                <div className={utilStyles.tool_entry}>MySQL</div>
                <div className={utilStyles.tool_entry}>Figma</div>
                <div className={utilStyles.tool_entry}>Adobe XD</div>
                <div className={utilStyles.tool_entry}>Adobe Illustrator</div>
                <div className={utilStyles.tool_entry}>Adobe Photoshop</div>
                <div className={utilStyles.tool_entry}>Adobe InDesign</div>
                <div className={utilStyles.tool_entry}>Wordpress</div>
                <div className={utilStyles.tool_entry}>Typo3</div>
            </div>

            <div className={utilStyles.ausbildung_wrapper}>

                <div className={utilStyles.heading_wrapper}>
                    <p className={utilStyles.subheading}>Was bisher geschah</p>
                    <h2 className={utilStyles.style_h2}>Ausbildung & Berufserfahrung</h2>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <p>Nach meiner Matura an der HAK Vöcklabruck, tauchte ich direkt ins Berufsleben an. Im Herbst
                            2017 begann ich meinen ersten richtigen Job als Servicemitarbeiterin bei der HYPO
                            Vöcklabruck. Dort verweilte ich ein Jahr, bis ich mich einer neuen Herausforderung stellte.
                            <br/><br/>
                            Im Herbst 2018 begann ich an der FH Hagenberg Kommunikation, Wissen, Medien (KWM) zu
                            studieren, da
                            ich mich sehr für Grafikdesign und Marketing interessierte. Schnell stellte sich heraus,
                            dass KWM sehr viel mehr als das zu bieten hatte.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p>
                            Nach einigen Projektarbeiten und
                            meinem sechsmonatigen Berufspraktikum bei Atikon hatte ich meine Vorliebe für UI/UX Design
                            und Web Entwicklung gefunden.
                            Während meines Studiums war ich zudem nebenbei als Tutorin für Web-Programmierung
                            (JavaScript und
                            PHP) tätig.
                            <br/><br/>
                            Im Juli 2021 werde ich mein Studium mit dem Bachelor of Arts in Social Sciences abschließen
                            und mich auf die Suche nach einer neuen Herausforderung machen.</p>
                    </div>
                </div>

                <div className={utilStyles.experience_wrapper}>

                    <div className="row">
                        <div className="col-md-5">
                            <p>Praktikum Web Design</p>
                        </div>
                        <div className="col-md-5">
                            <p>Atikon EDV & Marketing GmbH</p>
                        </div>
                        <div className="col-md-2">
                            <p>2020-2021</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <p>Tutorium Web-Programmierung</p>
                        </div>
                        <div className="col-md-5">
                            <p>FH OÖ, Campus Hagenberg</p>
                        </div>
                        <div className="col-md-2">
                            <p>2019-2021</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <p>Kommunikation, Wissen, Medien</p>
                        </div>
                        <div className="col-md-5">
                            <p>FH OÖ, Campus Hagenberg</p>
                        </div>
                        <div className="col-md-2">
                            <p>2018-2021</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <p>Servicemitarbeiterin</p>
                        </div>
                        <div className="col-md-5">
                            <p>HYPO Vöcklabruck</p>
                        </div>
                        <div className="col-md-2">
                            <p>2017-2018</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <p>International Business & Marketing</p>
                        </div>
                        <div className="col-md-5">
                            <p>HAK Vöcklabruck</p>
                        </div>
                        <div className="col-md-2">
                            <p>2012-2017</p>
                        </div>
                    </div>
                </div>

            </div>


            {/*            <NextNprogress
                color="#4236FF"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
            />*/}


        </Layout>
    )
}

