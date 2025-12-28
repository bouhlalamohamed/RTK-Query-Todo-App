import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useAddPostMutation } from "../app/services/PostApi";
 
export default function AddForm() {
  const [addPost, { isLoading, data: posts }] = useAddPostMutation();

  const handelSubmit = (event) => {
    event.preventDefault();
    const dataForm = new FormData(event.currentTarget);
    // console.log(dataForm.get('title'));
    // console.log(dataForm.get('content'));
    addPost({
      title: dataForm.get("title"),
      content: dataForm.get("content"),
      date:new Date().toLocaleDateString(),
    }).then((data) => {
      //  console.log(data);
    });
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" color="initial">
        Add post
      </Typography>
      <Stack gap={2} component={"form"} onSubmit={handelSubmit}>
        <TextField
          type="text"
          name="title"
          sx={{ width: "400px" }}
          id="outlined-basic"
          label="title"
          variant="outlined"
        />
        <TextField
          type="text"
          name="content"
          sx={{ width: "400px" }}
          id="outlined-basic"
          label="content"
          variant="outlined"
        />
        <Button type="submit" variant="contained">
          Add Post{" "}
        </Button>
      </Stack>
    </Container>
  );
}
