import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    console.log(allPostsData)
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
                    {allPostsData.slice(0,3).map(({id, date, title, image}) => (
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