import React from 'react'
import { useSelector } from 'react-redux'
import { publicacion } from '../store/PublicationSlice'
import Link from 'next/link'

export const SinglePostPage = ({ idPost }:{idPost:string}) => {
  
  const {posts}: any = useSelector((state) => state)
  const postFinally = posts.find((post : publicacion) => post.id === idPost)
  if (!postFinally) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }
  return (
    <section>
      <article className="post">
      <h2>{postFinally.title}</h2>
        <p className="post-content">{postFinally.content}</p>
        <Link href={"/drawing"}>Volver a Drawing</Link>
      </article>
    </section>
  )
}