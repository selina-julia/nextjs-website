import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({allPostsData}) {
    return (
        <Layout home>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Meine Projekte</h2>

                <div className="row">
                    {allPostsData.map(({id, date, title}) => (
                        <div className="col-md-6">
                            <div className={utilStyles.project_item}>
                                <div className={utilStyles.project_image}>
                                    bild.
                                </div>
                                <Link href={`/posts/${id}`}>
                                    <a>{title}</a>
                                </Link>
                                <br/>
                                <small className={utilStyles.lightText}>
                                    <Date dateString={date}/>
                                </small>
                            </div>
                        </div>
                    ))}
                </div>

                {/*                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br/>
                            <small className={utilStyles.lightText}>
                                <Date dateString={date}/>
                            </small>
                        </li>
                    ))}
                </ul>*/}
            </section>
        </Layout>
    )
}