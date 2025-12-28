import { Route, Routes } from "react-router-dom";
import PostManager from "./PostManager";
import Post from "./Post";
import { Box } from "@mui/material";

function App() {
  return (
        <Routes> 

        <Route path={"/"} element={<PostManager/>}>

          <Route path="posts/:idPost" element={<Post/>}/>
          <Route path="*" element={<h1>ER 404</h1>}/>
           

        </Route>
             
      </Routes>   
  );
}

export default App;
