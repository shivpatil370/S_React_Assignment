
import { handleSubmit } from "@/components/FormData";




export default function Edited_id({params}){


const id=params.editid;
    //  function abc(){
        
        //  fetch(`http://localhost:8080/todos/id`)
        //  .then((res)=>{
        //     return res.json();
        //  })
        //  .then((data)=>{
        //     console.log(data)
        //     setVal(data.description)
        //  })
 
        
    //  }


    return(
        <main style={{textAlign:"center"}}>
        <form action={handleSubmit} >
        <input name="desc" value={id?id:""} placeholder="task name"/>
        <br></br>
        <button>cancel</button>
        <button type="submit">add</button>
        </form>

        </main>
    )
}