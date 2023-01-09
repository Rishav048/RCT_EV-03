import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div style={{display:"flex",fontWeight:"bolder",justifyContent:"space-evenly",alignItems:"center",width:"100%", height:"50px", background:"skyblue", border:"2px solid black"}}>
        <div><Link href={'/'}>Rishav Chakraborty</Link></div>
        <div><Link href={'/projects/projects'}>PROJECTS</Link></div>
        <div><Link href={'/education/education'}>EDUCATION</Link></div>
    </div>
  )
}

export default Navbar