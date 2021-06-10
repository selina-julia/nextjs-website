import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'


export default function About() {
    return (
        <Layout about>

            <div className={utilStyles.about_text_wrapper}>
                <div><h1>Hi, ich bin <span className={utilStyles.violet}>Selina.</span></h1>

                    <p className={utilStyles.about_text}>Ich bin 22 Jahre alt und komme aus Seewalchen am Attersee, in
                        Oberösterreich. Zurzeit studiere ich
                        Kommunikation, Wissen, Medien im 6. Semester an der FH Hagenberg. Ich hatte schon immer Spaß an
                        kreativen und gestalterischen Arbeiten und durch mein Studium habe ich meine Leidenschaft für
                        UI/UX
                        Design und Web Entwicklung entdeckt. Während meiner Zeit an der FH sowie im privaten Bereich
                        durfte ich
                        bereits einige Projekte in diesem Bereich umsetzen.</p>

                    <Link href={`/projects`}>
                        <a className={utilStyles.button}>Projekte ansehen</a>
                    </Link></div>
                <div>
                    image
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


        </Layout>
    )
}