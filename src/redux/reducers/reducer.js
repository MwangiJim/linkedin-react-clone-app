// const InitialState = {
//     Posts:[

//     ],
//     user:''
// }

// export const linkedinReducer =(state=InitialState,action)=>{
//     switch (action.type) {
//         case 'ADDPOST':
//             return {
//                 ...state,
//                 Posts:[...state.Posts,action.payload]
//             }
//         default:
//             break;
//     }
// }
import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name:'Posts',
    initialState:{
        Posts:[

             ],
        user:{

        }
    },
    reducers:{
        AddPost:(state,action)=>{
          return{
              ...state,
              Posts:[...state.Posts,action.payload]
          }
        },
        SetProfile:(state,action)=>{
           return{
               ...state,
              user:action.payload
           }
        }
    }
})

export const {AddPost,SetProfile} = postSlice.actions
export default postSlice.reducer