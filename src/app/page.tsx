"use client";
import React, { createContext } from "react";
import styles from "./page.module.css";
import { posts } from "./constants";
import { Box } from "@mui/material";
import Post from "./Molecules/Post/Post";
export const PostsContext = createContext(posts);
export default function Home() {
  return (
    <PostsContext.Provider value={posts}>
      <main className={styles.main}>
        <Box
          sx={{
            m: "50px",
          }}
        >
          <Box
            component={"h1"}
            sx={{
              mb: "30px",
            }}
          >
            list of event:
          </Box>
          {posts?.map((item) => (
            <Post
              title={item.title}
              date={item.date}
              duration={item.duration}
              location={item.location}
              key={item.id}
              id={item.id}
            />
          ))}
        </Box>
      </main>
    </PostsContext.Provider>
  );
}
