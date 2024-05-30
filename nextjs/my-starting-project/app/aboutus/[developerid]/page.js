import Link from "next/link";


export default function Developer_Page({params}){

    const details = [

        { id : 1, name: 'Yash', role: 'Senior Developer'},
        
        { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
        
        { id : 3, name: 'Suresh', role: 'Frontend Developer'}
        
        ];

        let x=true;
    return (
        <>
        <h1>I am Developer page</h1>
        <ul>
            {
                
                
                
                details?.map((ele)=>{
                    // console.log(params.developerid);
                    if(params?.developerid==ele?.id){
                        x=false;
            
                      return <li key={ele.id}>{ele.name} is {ele.role}</li>
                  }
                  
                })
                
                
            }
            {x&&<li>Developer doesn't exist</li>}
        </ul>
        </>
    )
}