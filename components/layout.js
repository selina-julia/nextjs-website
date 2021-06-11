import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import NavBar from "./navBar"
import navButtons from "../config/navButtons"

const name = 'Selina Julia'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({children, home}) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
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
                    <div>{name}</div>
                    <div>
                        <nav>
                            {/*<input type="checkbox" id="nav" className="hidden"/>
                            <label htmlFor="nav" className="nav-open"><i></i><i></i><i></i></label>*/}
                            <NavBar navButtons={navButtons}/>
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
                            <h1 className={utilStyles.heading2Xl}>Gestaltung und Entwicklung digitaler Produkte und
                                Erlebnisse</h1>
                            <p className={utilStyles.headingMd}>UI/UX Designer und Frontend Developer</p>
                        </div>

                    </>
                ) : (
                    <>

                    </>
                )}
            </header>
            <div className={styles.container}>
                <main>{children}</main>
                {!home && (
                    <div className={styles.backToHome}>
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                )}
            </div>

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