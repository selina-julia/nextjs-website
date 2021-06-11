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

            <h1>project page works</h1>

            <div className="row">
                {allPostsData.map(({id, date, title, image}) => (
                    <div className="col-md-6">
                        <div className={utilStyles.project_item}>
                            <div className={utilStyles.project_image}>
                                <img src={image} />
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