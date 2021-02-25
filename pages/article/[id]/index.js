import Link from 'next/link'
import {server} from '../../../config/index'

const article = ({article}) => {
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

/* fetching data from the next api routes */
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`)
  const article = await res.json()
  return {
    props: {
      article
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()
  const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({params: {id: id.toString()}}))
  return {
    paths,
    fallback: false
  }
}

/* fetching data from the extra api routes */
// export const getStaticProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//   const article = await res.json()
//   return {
//     props: {
//       article
//     }
//   }
// }
//
// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
//   const articles = await res.json()
//   const ids = articles.map(article => article.id)
//   const paths = ids.map(id => ({params: {id: id.toString()}}))
//   return {
//     paths,
//     fallback: false
//   }
// }

export default article
