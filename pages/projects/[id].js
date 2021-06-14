import Layout from '../../components/layout'
import {getAllPostIds, getPostData} from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import Link from "next/link";
import styles from "../../components/layout.module.css";
import { ReactElement } from 'react'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export async function getStaticProps({params}) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({postData}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.heading2Xl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date}/> | <span>{postData.category}</span>

                    {postData.link && (
                        <Link href={postData.link} target="_blank">
                            <a target="_blank"> | Link zum Projekt <span className={utilStyles.icon}><FontAwesomeIcon icon={faPaperPlane} /></span></a>
                        </Link>
                    )}

                </div>
                <div className={utilStyles.project_item_text}>
                    <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
                </div>
                <div className={styles.backToHome}>
                    <Link href="../projects">
                        <a>← Zurück zu den Projekten</a>
                    </Link>
                </div>
            </article>
        </Layout>
    )
}