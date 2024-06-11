


export default async function CompletedTasks(){
    

    const todo=await getData();
// console.log(todo);
 

    return(
        <main style={{textAlign:"center"}}>
        <h1>Completed Tasks!</h1>
         
         <ul>
             {
                todo?.map((ele)=>{
                   return <li style={{color:"red"}} key={ele.id}><input type="radio" />{ele.description}</li>
                })
             }
         </ul>
        </main>
    )
};


 export async function getData(){

    const res=await fetch("http://localhost:8080/todos");
    const data=await res.json();

    return data;
};

// export const revalidate=1;