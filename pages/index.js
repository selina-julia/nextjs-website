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

                <div className="row">
                    {allPostsData.slice(0, 4).map(({id, date, title, image, background, category}) => (
                        <div className="col-md-6">
                            <div className={utilStyles.project_item}>
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
            <Link href={`/projects`}>
                <a className={utilStyles.button}>Alle Projekte ansehen</a>
            </Link>
        </Layout>
    )
}