// import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{marginLeft:"50%",marginTop:"2rem"}}>
    <button style={{marginBottom:"1rem"}}><Link href="/today">Add Todos</Link></button>
    <br></br>
    <button><Link href="/today/completedtasks">completed Todos</Link></button>
    </main>
  );
}
