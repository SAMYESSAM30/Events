"use client";
import PostDesc from "@/app/Atoms/PostDesc/PostDesc";
import PostTitle from "@/app/Atoms/PostTitle/PostTitle";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { EventProps } from "./event.type";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import events from "@/app/constants";
const Event = ({
  joinedUsers,
  description,
  title,
  date,
  duration,
  location,
  id,
}: EventProps) => {
  const [arrayOfObjects, setArrayOfObjects] = useState(events);

  console.log(arrayOfObjects);
  return (
    <>
      <Box>
        <Card sx={{ maxWidth: 500, mb: "30px" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <PostTitle title={title} />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <PostDesc description={`Date: ${date}`} />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <PostDesc description={`duration: ${duration}`} />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <PostDesc description={`location: ${location}`} />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link
                style={{ textDecoration: "none", color: "blue" }}
                href={`events/${id}`}
              >
                Show
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Box>
      <Box></Box>
    </>
  );
};

export default Event;
