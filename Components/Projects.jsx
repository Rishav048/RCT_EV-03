import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = ({data}) => {

    

  return (
    <div style={{display:"grid",width:"100%",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}} >
       {data.map((el)=> (
   <ProjectCard data={el} key={el.id} />
       ))} 
    </div>
  )
}

export default Projects