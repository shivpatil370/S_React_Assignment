import Link from "next/link";



export default function AboutUs(){
   const details = [

        { id : 1, name: 'Yash', role: 'Senior Developer'},
        
        { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
        
        { id : 3, name: 'Suresh', role: 'Frontend Developer'}
        
        ];
        
        
    return(
        <>
        <h1>this is an about-us page</h1>
        <ul>
            {
                details?.map((ele)=>{
                  return  <li key={ele.id}><Link href={`/aboutus/${ele.id}`}>{ele.name}</Link>
          </li>
                })
            }
            
        </ul>
        </>
    )
}