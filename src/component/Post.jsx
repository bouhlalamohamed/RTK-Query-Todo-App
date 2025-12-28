import { Box, Button, Typography } from '@mui/material'
import {   useParams,useNavigate } from 'react-router-dom'
import  {useGetPostIdQuery,useDeletePostMutation}  from '../app/services/PostApi'

export default function Post() {
  const {idPost}= useParams()
  const navigate = useNavigate()
  const {isLoading,data:post}=useGetPostIdQuery(idPost)
  const [deletePost ,{isLoading:isLoadingDelete}] = useDeletePostMutation()
  
  const handelDeleteClick= () => {
    deletePost(post.id);
    navigate('/');

  }
  return (
    <div>
    {post ? ( 
       
         <div>
          <Button sx={{mr:2}} color='error' variant='outlined' onClick={handelDeleteClick}>delete</Button>
          <Button color='primary' variant='outlined'  >edit</Button>
          <Typography variant='h3'>{post.title}</Typography>
            <Box mt={1}>{post.content}  </Box>
           <Box mt={1}>
        {post.date}
      </Box>        
         </div>
       
  
  
  
  ):"... loading" }

    
      
      
    </div>
  )
}
