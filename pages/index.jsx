import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Education from './education/education'
import GitintoCard from '../Components/GitintoCard'
import TecHStacks from '../Components/TecHStacks'
import Projects from '../Components/Projects'
import { useState , useEffect } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
const [ myProject,setMyprojectData] = useState([]);

useEffect(()=>{
getdata()
},[])


const getdata = async()=>{
  let res = await fetch(`https://api.github.com/search/repositories?q=user:Rishav048+fork:true&sort=updated&per_page=10&type=Repositories`);
  let data = await res.json();
  setMyprojectData(data.items)
  
}




  console.log("My Personal Details", data);


  return (
    <>
    <div style={{display:"flex"}}>
      <div style={{flex:"35%"}}>
        <GitintoCard  data={data} />
        <TecHStacks />
        <div>
        <div style={{textAlign:"center",width:"100%", border:"0px solid blue", margin:"5px", margin:"auto"}}>
        <div style={{border:"2px solid black", margin:"20px", background:"pink",height:"100px"}}>
        <h2 style={{fontSize:"20px", fontWeight:"bolder", color:"blue"}}>Full-Stack Web Development</h2>
            <br />
            <h3>Masai School | Bangalore</h3>
            <br />
            <h4>July 2022 - Present</h4>
        </div>
        
        <div style={{border:"2px solid black", margin:"20px", background:"pink"}}>
        <h2 style={{fontSize:"20px", fontWeight:"bolder", color:"blue"}}>B-Tech in Mechanical Engineering</h2>
            <br />
            <h3>Dr. B.C. Roy Eng. College, Durgapur</h3>
            <br />
            <h4>August 2016 - July 2020</h4>
        </div>
        <div style={{border:"2px solid black", margin:"20px", background:"pink"}}>
        <h2 style={{fontSize:"20px", fontWeight:"bolder", color:"blue"}}>Intermediate</h2>
            <br />
            <h3>Bharat Sen. Sc.School, Kota, Rajasthan</h3>
            <br />
            <h4>March 2015 - May 2016</h4>
        </div>
        <div style={{border:"2px solid black", margin:"20px", background:"pink"}}>
        <h2 style={{fontSize:"20px", fontWeight:"bolder", color:"blue"}}>Matriculation</h2>
            <br />
            <h3>Aadarsh Vidya Mandir,Bokaro | CBSE</h3>
            <br />
            <h4>March 2013 - April 2014</h4>
        </div>

    </div>
        </div>

         </div>

      <div style={{flex:"65%"}}>
        <Projects data={myProject}  />
      </div>
    </div>
      

    </>
  )
}


export const getStaticProps = async()=>{
  let res1 = await fetch(`https://api.github.com/users/Rishav048`);
 
  let data = await res.json();
  return {
    props : {data}
  }
}


 