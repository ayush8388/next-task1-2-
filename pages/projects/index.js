import React from 'react'
import projectData from '../../data/projectsData.json'

const index = ({projectData}) => {
  return (
    <div className='min-h-screen text-center p-10 mx-auto bg-slate-200'>
      <h1 className='text-center text-4xl '>Projects</h1>
      <div>
        {projectData.map((data) => (
            <div key={data.id}>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
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
