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

            <h1>Meine <span className={utilStyles.violet}>Projekte.</span></h1>
            <p>Während meines Studiums an der FH Hagenberg durfte ich bereits einige Projekte im Bereich Design und
                Entwicklung umsetzen. Darüber hinaus habe ich auch bereits an ein paar Projekten im privaten Bereich
                mitgewirkt. Ich stelle mich gerne neuen Herausforderungen, daher mache ich gerne Projekte in </p>

            <div className="row">
                {allPostsData.map(({id, date, title, image, background}) => (
                    <div className="col-md-6">
                        <div className={`${utilStyles.project_item}`}>
                            <div className={`${utilStyles.project_image} ${background}`}>
                                <img src={image}/>
                            </div>
                            <Link href={`/projects/${id}`}>
                                <a>{title}</a>
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
                            <small className={utilStyles.lightText}>
                                <Date dateString={date}/>
                            </small>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}