"use client";
import React, { createContext } from "react";
import styles from "./page.module.css";

import { Box } from "@mui/material";
import Event from "./Molecules/event/event";
import Link from "next/link";
import { isAuthenticated } from "./services/auth";
import events from "./constants";

export const PostsContext = createContext(events);
export default function Home() {
  console.log(isAuthenticated());

  return (
    <>
      {isAuthenticated() ? (
        <PostsContext.Provider value={events}>
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
              {events?.map((item) => (
                <Event
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
      ) : (
        <Link href="/login">
          {" "}
          you are not logged in, you must go to the login page
        </Link>
      )}
    </>
  );
}
