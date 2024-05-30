import Link from "next/link";


export default function Developer_Page({params}){

    const details = [

        { id : 1, name: 'Yash', role: 'Senior Developer'},
        
        { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
        
        { id : 3, name: 'Suresh', role: 'Frontend Developer'}
        
        ];


    return (
        <>
        <h1>I am Developer page</h1>
        <ul>
            {
                
                details?.map((ele)=>{
                    // console.log(params.developerid);
                    
                    if(params?.developerid==ele?.id){
                      return <li key={ele.id}>{ele.name} is {ele.role}</li>
                  }
                })
            
            }
            
        </ul>
        </>
    )
}