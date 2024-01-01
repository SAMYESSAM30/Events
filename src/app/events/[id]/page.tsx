"use client";
import { useState, useContext, useEffect } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  styled,
} from "@mui/material";
import Link from "next/link";
import EventTitle from "@/app/Atoms/PostTitle/PostTitle";
import { PostsContext } from "@/app/page";
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
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
export default function EditPost({ params: { id } }: Params) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [event, setEvent] = useState<EventProps | undefined>();
  const newPosts = useContext(PostsContext);

  useEffect(() => {
    const foundPost = newPosts?.find((item) => item?.id === +id);
    setEvent(foundPost);
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
        Event Id: {event?.id}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Card sx={{ maxWidth: 500, mb: "30px" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <EventTitle title={event?.title} />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Box>{`Date: ${event?.date}`}</Box>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Box>{`Duration: ${event?.duration}`}</Box>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Box>{`Location: ${event?.location}`}</Box>
            </Typography>
            <h3>Users:</h3>
            <ul>
              {" "}
              {event?.joinedUsers.slice(0, 5).map((user, index) => (
                <Box component={"li"} sx={{ mt: "10px" }} key={index}>
                  {user}
                </Box>
              ))}
            </ul>
            <Button variant="outlined" onClick={handleClickOpen}>
              all users
            </Button>
            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                Users
              </DialogTitle>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              ></IconButton>
              <DialogContent dividers>
                <ul>
                  {" "}
                  {event?.joinedUsers.map((user, index) => (
                    <Box component={"li"} sx={{ mt: "10px" }} key={index}>
                      {user}
                    </Box>
                  ))}
                </ul>
              </DialogContent>
            </BootstrapDialog>
            <Typography variant="body2" color="text.secondary">
              <Box>{`Description: ${event?.description}`}</Box>
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
