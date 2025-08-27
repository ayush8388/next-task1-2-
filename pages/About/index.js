import React from 'react'
import aboutData from '../../data/aboutData.json'

const Index = (props) => {
  return (
    <div className='min-h-screen text-center p-10 mx-auto bg-slate-200 '>
      {props.aboutData.content}
    </div>
  )
}

export const getStaticProps = async () => {
    return{
        props:{
            aboutData
        }
    }
}

export default Index
