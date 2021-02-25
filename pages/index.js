import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import {server} from '../config/index'

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name='keywords' content='web development, programming' />
      </Head>
      <ArticleList articles={articles} />
    </div>
  )
}

/* fetching data from the next api routes */
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()
  return {
    props: {
      articles
    }
  }
}

/* fetching data from the extra api routes */
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()
//   return {
//     props: {
//       articles
//     }
//   }
// }
