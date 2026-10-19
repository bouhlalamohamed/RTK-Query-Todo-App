// import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { useGetPostsQuery } from "../../src/app/services/PostApi";
import {
  CircularProgress,
  Box,
  MenuList,
  MenuItem,
  Button,
} from "@mui/material";

export default function PostLists() {
  const navigate = useNavigate();
  // @ts-ignore
  const {
    isLoading,
    data: posts,
    refetch,
  } = useGetPostsQuery(
    { name: "lolo" },
    {
      pollingInterval: 100000000,
    },
  );
  //  name, {pollingInterval: 3000,
  //  skipPollingIfUnfocused: true,} ===> Automatically refetch every 3s unless the window is out of focus
  const handleIdPost = (id, event) => {
    event.preventDefault();
    navigate(`Posts/${id}`);
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div>
      <MenuList sx={{ width: "200px", background: "rgba(2, 2, 2, 0.91)" }}>
        <Button
          sx={{
            margin: "0 auto",
            display: "block",
            textTransform: "capitalize",
          }}
          onClick={refetch}
        >
          refreche
        </Button>

        {posts?.map((item) => (
          <MenuItem
            key={item.id}
            onClick={() => {
              handleIdPost(item.id, event);
            }}
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "primary.dark", // Color on hover
              },
            }}
          >
            {item.title}
          </MenuItem>
        ))}
      </MenuList>
    </div>
  );
}
