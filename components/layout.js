import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import NavBar from "./navBar"
import navButtons from "../config/navButtons"
import NavLink from "./navLink"

const name = 'Selina Julia'
export const siteTitle = 'Selina Julia'

export default function Layout({children, home, about, projects}) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name="description"
                    content="Portfolio UI/UX und Web Development"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
                      integrity="undefined" crossOrigin="anonymous"/>

            </Head>
            <header className={styles.header}>
                <div className={utilStyles.headertop}>
                    <div>
                        <Link href={`/`}>{name}</Link>

                    </div>
                    <div>
                       {/* <nav>
                            <NavBar navButtons={navButtons}/>
                        </nav>*/}
                        <nav>
                            <NavLink className={utilStyles.nav_buttons}/>
                            {/*{children}*/}

                        </nav>
                    </div>

                    {/*
                      <nav>
                        <input type="checkbox" id="nav" class="hidden"/>
                        <label for="nav" class="nav-open"><i></i><i></i><i></i></label>
                        <div class="nav-container">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="overview.html">Gsund & Guad</a></li>
                                <li><a class="active" href="about_us.html">Über uns</a></li>
                            </ul>
                        </div>
                    </nav>
                    */}
                </div>
                {home ? (
                    <>
                        <div className={utilStyles.headerbottom}>
                            <p className={utilStyles.headingMd}>Hi, ich bin <span
                                className={utilStyles.violet}>Selina</span></p>
                            <h1 className={utilStyles.heading2Xl}>Gestaltung und<br/>Entwicklung digitaler<br/>Produkte und
                                Erlebnisse</h1>
                            <p className={`${utilStyles.headingMd} ${utilStyles.about}`}>UI/UX Designer und Frontend Developer</p>
                            <Link href={`/about`}>
                                <a className={`${utilStyles.button}`}>Mehr über mich</a>
                            </Link>
                        </div>

                    </>
                ) : (
                    <>

                    </>
                )}
            </header>
            <div className={styles.container}>
                <main>{children}</main>
                {about || projects && (
                    <div className={styles.backToHome}>
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                )}
            </div>
            {home ? (
                <>
                    <section className={utilStyles.message_section}>
                        <div className={utilStyles.heading_wrapper}>
                            <p className={utilStyles.subheading}>Noch Fragen?</p>
                            <h2 className={utilStyles.style_h2}>Schreib mir eine Nachricht</h2>
                            <p>
                                Falls du noch Fragen hast oder gemeinsam ein Projekt starten möchtest, kannst
                                du mir jederzeit gerne eine Nachricht schreiben!</p>
                            <Link href="mailto:selinaschindlauer@gmail.com">
                                <a className={utilStyles.button}>Nachricht senden</a>
                            </Link>
                        </div>
                    </section>
                </>
            ) : (
                <>

                </>
            )}

            <footer className={utilStyles.footer}>
                <div>© 2021 Selina Julia. All rights reserved.</div>
                <div className={utilStyles.footer_navlinks}>
                    <a href="">Linkedin</a>
                    <a href="">Github</a>
                    <a href="">Impressum</a>
                    <a href="">Datenschutz</a>
                </div>
            </footer>
        </div>
    )
}