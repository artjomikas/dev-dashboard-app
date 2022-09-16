import { Header, Home, Sidebar, Bookmarks, Profile } from "../";
import { Route, Routes } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "../query/posts";
import { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";

const Pages = () => {
  const { loading, error, data, refetch } = useQuery(GET_ALL_POSTS);
  const [posts, setPosts] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    if (!loading) {
      setPosts(data.getAllPosts);
    }
  }, [data]);

  return (
    <>
      <Header />
      <Sidebar>
        <Routes>
          <Route
            path="/"
            element={<Home refetch={refetch} posts={posts} user={user} />}
          />
          <Route
            path="/bookmarks"
            element={<Bookmarks refetch={refetch} user={user} />}
          />
          <Route path="/profile" element={<Profile user={user} />} />
        </Routes>
      </Sidebar>
    </>
  );
};
export default Pages;
