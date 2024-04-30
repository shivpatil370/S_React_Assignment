import {createSlice} from "@reduxjs/toolkit";

const init={data:[],toggle:false,renders:[],changed:false}
const cartSlice=createSlice({
    name:"cart",
    initialState:init,
    reducers:{
        AddToggle(state){
           state.toggle=!state.toggle;
        },
        AddRenders(state,action){
            state.renders=action.payload;
        },
        DirectAdd(state,action){
           state.data=action.payload||[]
        },

        AddData(state,action){
            state.changed=true;

            const ele=action.payload;
            const index=state.data.findIndex(item=>item.id===ele.id);
            const existingItem=state.data[index];
            if(!existingItem){
                state.data.push({
                    id:ele.id,
                    price:ele.price,
                    title:ele.title,
                    description:ele.description,
                    total:ele.price,
                    quantity:1
                })
            }
            else{
                let alldata=state.data;
               const newdata={
                ...existingItem,
                    quantity:existingItem.quantity+1,
                    total:existingItem.total+existingItem.price
               };
               alldata[index]=newdata;

            }
            
        },

        RemoveData(state,action){
            state.changed=true;

            const ele=action.payload;
            const index=state.data.findIndex(item=>item.id===ele.id);
            const existingItem=state.data[index];
            if(existingItem.quantity===1){
                state.data=state.data.filter(item=>item.id!==ele.id);
                state.changed=false;
            }
            else{
                let alldata=state.data;
               const newdata={
                ...existingItem,
                    quantity:existingItem.quantity-1,
                    total:existingItem.total-existingItem.price
               };
               alldata[index]=newdata;
            }
        }
    }
});

export const cartActions=cartSlice.actions;
export default cartSlice;