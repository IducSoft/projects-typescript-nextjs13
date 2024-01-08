import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'


export const PostsList = () => {
    
    const {posts}:any = useSelector(state => state)
    console.log(posts)
      const renderedPosts = posts.map((post: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; content: string }) => (
        <li className="mb-10 ms-4" key={post.id}>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {post.title}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                <Link href={`/drawing/${post.id}`}>Edit post</Link>
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {post.content.substring(0, 100)}
              </p>
          </li>
        
    ))

      return (
      <section className="posts-list mx-4 flex flex-col  items-center">
        <h2>Posts</h2>
        
        <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
            
        {renderedPosts}
        </ol>
      </section>
      )
}