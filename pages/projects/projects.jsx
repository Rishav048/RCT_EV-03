import React from 'react'
import Projects from '../../Components/Projects'

const projects = ({data}) => {

    console.log("My Projects", data)

  return (
    <>
    <h1 style={{fontSize:"30px", margin:"10px", fontWeight:"bolder", margin:"auto", color:"blue",textAlign:"center"}}>My Projects</h1>
    <Projects  data={data} />
    </>
  )
}



export const getServerSideProps = async()=>{

    let res = await fetch(`https://api.github.com/search/repositories?q=user:Rishav048+fork:true&sort=updated&per_page=10&type=Repositories`);
    let data = await res.json();
    return {
      props : {data : data.items}
    }
  }



export default projects