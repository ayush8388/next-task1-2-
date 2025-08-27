import React from 'react'
import posts from "../data/posts.json"
import Link from 'next/link'


const index = ({posts}) => {
  return (
   <div className="min-h-screen text-center p-10 mx-auto bg-slate-200">
      <div className="flex flex-wrap justify-center px-4 mt-12">
        {posts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id} className="w-1/4 py-10 bg-slate-100 px-2 m-5 rounded-xl shadow-lg hover:shadow-xl transition">
            {post.title}
          </Link>
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
