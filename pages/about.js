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

            <div className={utilStyles.ausbildung_wrapper}>

                <div className="row">
                    <h2 className={utilStyles.style_h2}>Ausbildung & Berufserfahrung</h2>
                    <div className="col-md-6">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
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


            <NextNprogress
                color="#4236FF"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
            />


        </Layout>
    )
}

