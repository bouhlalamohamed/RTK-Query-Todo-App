import { Outlet } from "react-router-dom";
import PostLists from "./PostLists";
import { Box } from "@mui/material";
import AddForm from "./AddForm";
 const border={
  border:"1px solid red"
 }
export default function PostManager() {
 

  return (
  <Box sx={{display:"flex", flexDirection:'column',  gap:2}}>
     
      <AddForm/>
     
    <Box sx={{display:"flex", flexDirection:'row',  gap:2}}>
      <PostLists/>
      <Box sx={{  padding:2}}>
        <Outlet/>
      </Box>
    </Box>
  </Box>
  );
}
