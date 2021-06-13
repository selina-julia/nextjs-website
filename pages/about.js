import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'



export default function About() {
    return (

        <Layout about>

            <div className={utilStyles.about_text_wrapper}>
                <div className="row">
                    <div className="col-md-9">
                        <div><h1>Hi, ich bin <span className={utilStyles.violet}>Selina.</span></h1>

                            <p className={utilStyles.about_text}>Ich bin 22 Jahre alt und komme aus Seewalchen am
                                Attersee,
                                in
                                Oberösterreich. Zurzeit studiere ich
                                Kommunikation, Wissen, Medien im 6. Semester an der FH Hagenberg. Ich hatte schon immer
                                Spaß
                                an
                                kreativen und gestalterischen Arbeiten und durch mein Studium habe ich meine
                                Leidenschaft
                                für
                                UI/UX
                                Design und Web Entwicklung entdeckt. Während meiner Zeit an der FH sowie im privaten
                                Bereich
                                durfte ich
                                bereits einige Projekte in diesem Bereich umsetzen.</p>

                            <Link href={`/projects`}>
                                <a className={utilStyles.button}>Projekte ansehen</a>
                            </Link></div>
                    </div>
                    <div className="col-md-3">
                        <div className={utilStyles.about_image}>
                            <Image
                                priority
                                src='/images/me.png'
                                className={utilStyles.borderCircle}
                                height={333}
                                width={333}
                                alt='Me'
                            />
                        </div>
                    </div>
                </div>
            </div>

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


            <div id="skill-bar-wrapper">
                <h2>What I can do</h2>
                <div className="text-left">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">

                            HTML<span className={utilStyles.float_right}>95%</span>
                            <div className={utilStyles.skillbar_container}  data-percent="95%">
                                <div className={utilStyles.skills}></div>
                            </div>

                            CSS / SASS / LESS<span className={utilStyles.float_right}>90%</span>
                            <div className={utilStyles.skillbar_container}  data-percent="90%">
                                <div className={utilStyles.skills}></div>
                            </div>

                            JavaScript<span className={utilStyles.float_right}>70%</span>
                            <div className={utilStyles.skillbar_container}  data-percent="70%">
                                <div className={utilStyles.skills}></div>
                            </div>

                            PHP<span className={utilStyles.float_right}>50%</span>
                            <div className={utilStyles.skillbar_container}  data-percent="50%">
                                <div className={utilStyles.skills}></div>
                            </div>

                        </div>
                        <div className=".col-sm-12 col-lg-6">

                            Adobe Creative Cloud<span className={utilStyles.float_right}>85%</span>
                            <div className={utilStyles.skillbar_container}  data-percent="85%">
                                <div className={utilStyles.skills}></div>
                            </div>

                            SEO<span className={utilStyles.float_right}>80%</span>
                            <div className={utilStyles.skillbar_container}  data-percent="80%">
                                <div className={utilStyles.skills}></div>
                            </div>


                            Typo3<span className={utilStyles.float_right}>45%</span>

                            <div className={utilStyles.skillbar_container}  data-percent="45%">
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

