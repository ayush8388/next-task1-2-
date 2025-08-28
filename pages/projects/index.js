import React from 'react'
import projectData from '../../data/projectsData.json'

const index = ({projectData}) => {
  return (
    <div className='min-h-screen text-center p-10 mx-auto bg-slate-200'>
      <h1 className='text-center text-4xl '>PROJECTS</h1>
      <div className='flex flex-wrap justify-center px-4 mt-12' >
        {projectData.map((data) => (
            <div className='min-w-1/4 py-5 bg-slate-100 px-2 m-5 rounded-xl shadow-lg hover:shadow-xl transition' key={data.id}>
                <h1 className='text-2xl text-center mb-5'>{data.title}</h1>
                <p className='text-md'>{data.description}</p>
            </div>
        ))}
      </div>
    </div>
  )
}


export const getServerSideProps = async () => {
    return{
        props:{
            projectData,
        }
    }
}
export default index
