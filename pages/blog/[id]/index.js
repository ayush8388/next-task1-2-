import React from 'react'
import posts from "../../../data/posts.json"

const index = ({post}) => {
    if(!post){
        return <div>no post found</div>
    }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-slate-200">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 mb-24">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">{post.title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed text-center">{post.content}</p>
      </div>
    </div>
  )
}

export const getStaticPaths = async() => {
    const paths = posts.map((post) => ({
        params : {id : post.id}
    })) 
    return {
        paths,
        fallback:false
    }
} 
export const getStaticProps = async({params}) => {
    const post = posts.find((post) => post.id === params.id )

    return{
        props:{
            post,
        }
    }
}

export default index
