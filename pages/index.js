import React from 'react'
import posts from "../data/posts.json"
import Link from 'next/link'


const index = ({posts}) => {
  return (
    <div className='text-center p-10 mx-auto'>
      <h1 className="text-4xl font-bold mb-10 text-gray-900 text-center">BLOGS</h1>
      <div className='flex flex-col items-center justify-center px-4'>
        {posts.map((post) => (
        <h2 key={post.id} className='w-1/4 bg-slate-200 py-2 px-2 m-5'>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </h2>
      ))}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  return{
    props:{
        posts,
    }
  }

}

export default index
