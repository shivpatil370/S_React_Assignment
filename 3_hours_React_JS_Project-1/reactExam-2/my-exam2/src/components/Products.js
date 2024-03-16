import React from 'react'
import styles from "./Products.module.css";

const Products = ({data,setData}) => {

//    DELETE FINCTIONALITY
const handleDelete=(ids)=>{
    let deleteddata=data?.filter((ele)=>{
        return ele.currentid!==ids;
    })

    // console.log(deleteddata)
    localStorage.setItem("items",JSON.stringify(deleteddata));
    let newDatas=JSON.parse(localStorage.getItem("items"))||[];
    setData(newDatas);
}

  return (
    <div className={styles.box}>
      <h1>Products</h1>

    <div>
      <label>Electronic Items</label>
      <ul id="elect">
      {
        data?.map((ele)=>{
                  if(ele.currentcategory==="Electronics"){
                    // console.log(ele)
                return  (<li id={ele.id} key={ele.id}>{`${ele.currentprice}-${ele.currentcategory}-${ele.currentname}`}-<button onClick={()=>{
                    handleDelete(ele.currentid)
                }}>Delete</button></li>)
              }
        })
      }
      </ul>
      </div>
      

      <div>
      <label>Food Items</label>
      <ul id="foods">
      {
        data?.map((ele)=>{
            // console.log(ele)
                  if(ele.currentcategory==="Food"){
                return  <li id={ele.id} key={ele.id}>{`${ele.currentprice}-${ele.currentcategory}-${ele.currentname}`}-<button onClick={()=>{
                    handleDelete(ele.currentid)
                }}>Delete</button></li>
              }
        })
      }
      </ul>
      </div>

      <div>
      <label>Skincare Items</label>
      <ul id="skins">
      {
        data?.map((ele)=>{
                  if(ele.currentcategory==="Skincare"){
                    // console.log(ele)
                return  <li id={ele.id} key={ele.id}>{`${ele.currentprice}-${ele.currentcategory}-${ele.currentname}`}-<button onClick={()=>{
                    handleDelete(ele.currentid)
                }}>Delete</button></li>
              }
        })
      }
      </ul>
      </div>
    </div>
  )
}

export default Products
