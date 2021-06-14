import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import {getSortedPostsData} from "../lib/posts";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    console.log(allPostsData)
    return {
        props: {
            allPostsData
        }
    }
}

export default function Projects({allPostsData}) {
    return (
        <Layout projects>
            <div className={utilStyles.project_intro}>
                <h1>Meine <span className={utilStyles.violet}>Projekte.</span></h1>
                <p>Während meines Studiums an der FH Hagenberg durfte ich bereits einige Projekte im Bereich Design und
                    Entwicklung umsetzen. Darüber hinaus habe ich auch bereits an ein paar Projekten im privaten Bereich
                    mitgewirkt. Ich stelle mich gerne neuen Herausforderungen und lerne Neues kennen, besonders in
                    Sachen Frameworks und Design-Trends.</p>

            </div>

            <div className="row">
                {allPostsData.map(({id, date, title, image, background, category}) => (
                    <div className="col-md-6">
                        <div className={`${utilStyles.project_item}`}>
                            <Link href={`/projects/${id}`}>
                                <a>
                                    <div className={`${utilStyles.project_image} ${background}`}>
                                        <img src={image}/>
                                    </div>
                                </a>
                            </Link>

                            <small className={utilStyles.lightText}>
                                {/* <Date dateString={date}/>*/}
                                {category}
                            </small> <br/>
                            <Link href={`/projects/${id}`}>
                                <a><h3>{title}</h3></a>
                            </Link>

                            {/*<Image
                                    priority
                                    src={image}
                                    className={utilStyles.borderCircle}
                                    height={144}
                                    width={144}
                                    alt={name}
                                />*/}


                            <br/>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}