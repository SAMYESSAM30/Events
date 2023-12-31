"use client";
import { useState, useContext, useEffect } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import PostTitle from "@/app/Atoms/PostTitle/PostTitle";
import { PostsContext } from "@/app/page";
import BaseButton from "@/app/Atoms/BaseButton/BaseButton";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { EventProps } from "@/app/Molecules/event/event.type";

type Params = {
  params: {
    id: string;
  };
};

export default function EditPost({ params: { id } }: Params) {
  const [post, setPost] = useState<EventProps | undefined>();
  const newPosts = useContext(PostsContext);

  useEffect(() => {
    const foundPost = newPosts?.find((item) => item?.id === +id);
    setPost(foundPost);
  }, [newPosts, id]);

  const handleDelete = () => {
    const indexToDelete = newPosts.findIndex((post) => post.id === +id);
    if (indexToDelete !== -1) {
      newPosts.splice(indexToDelete, 1);
      console.log(`Post with id ${id} has been deleted.`);
    } else {
      console.log(`Post with id ${id} not found.`);
    }
    window.confirm("The post has been deleted");
  };

  return (
    <Box sx={{ m: "50px" }}>
      <Box component={"h2"} sx={{ mb: "30px" }}>
        Event Id: {post?.id}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Card sx={{ maxWidth: 500, mb: "30px" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <PostTitle title={post?.title} />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Box component={"h5"}>{post?.date}</Box>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Box component={"h5"}>{post?.duration}</Box>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Box component={"h5"}>{post?.location}</Box>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>{post?.joinedUsers}</p>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Box component={"h5"}>{post?.description}</Box>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link style={{ textDecoration: "none", color: "green" }} href="/">
                Home
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
}
