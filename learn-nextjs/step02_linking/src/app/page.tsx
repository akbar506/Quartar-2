import Image from "next/image";
// import { Inter } from "next/font/google";
import Link from "next/link";



function HomePage(){
  return(
    <div>
      Hi, This is Home Page.
      <br />
      <Link href="/name">Name Page</Link>
    </div>
  )
}

export default HomePage;