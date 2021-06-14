import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import NextNprogress from 'nextjs-progressbar';
import ProgressBar from 'progressbar.js'


export default function About() {
    return (
        <Layout about>

            <div className={utilStyles.heading_wrapper}>
                <p className={utilStyles.subheading}>Skills & Tools</p>
                <h2 className={utilStyles.style_h2}>Was ich mache</h2>
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
                            Egal, ob Websites mit Wordpress oder Web Apps mit Angular oder React - ich setze deine Idee
                            genau nach deinen Vorstellungen um.
                        </p>
                    </div>
                </div>
            </div>

            <NextNprogress
                color="#4236FF"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
            />


            <div id="skill-bar-wrapper">
                <h2>What I can do</h2>
                <div className="text-left">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">

                            HTML<span className={utilStyles.float_right}>95%</span>
                            <div className={utilStyles.skillbar_container} data-percent="95%">
                                <div className={utilStyles.skills}></div>
                            </div>

                            CSS / SASS / LESS<span className={utilStyles.float_right}>90%</span>
                            <div className={utilStyles.skillbar_container} data-percent="90%">
                                <div className={utilStyles.skills}></div>
                            </div>

                            JavaScript<span className={utilStyles.float_right}>70%</span>
                            <div className={utilStyles.skillbar_container} data-percent="70%">
                                <div className={utilStyles.skills}></div>
                            </div>

                            PHP<span className={utilStyles.float_right}>50%</span>
                            <div className={utilStyles.skillbar_container} data-percent="50%">
                                <div className={utilStyles.skills}></div>
                            </div>

                        </div>
                        <div className=".col-sm-12 col-lg-6">

                            Adobe Creative Cloud<span className={utilStyles.float_right}>85%</span>
                            <div className={utilStyles.skillbar_container} data-percent="85%">
                                <div className={utilStyles.skills}></div>
                            </div>

                            SEO<span className={utilStyles.float_right}>80%</span>
                            <div className={utilStyles.skillbar_container} data-percent="80%">
                                <div className={utilStyles.skills}></div>
                            </div>


                            Typo3<span className={utilStyles.float_right}>45%</span>

                            <div className={utilStyles.skillbar_container} data-percent="45%">
                                <div className={utilStyles.skills}></div>
                            </div>


                            Wordpress<span className={utilStyles.float_right}>90%</span>
                            <div className={utilStyles.skillbar_container} data-percent="90%">
                                <div className={utilStyles.skills}></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

