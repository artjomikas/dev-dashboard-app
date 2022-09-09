import { Header, Main, Sidebar,Bookmarks } from "../";
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
          <Route path="/" element={<Main refetch={refetch} posts={posts} user={user}/>} />
          <Route path="/bookmarks" element={<Bookmarks refetch={refetch} user={user} />} />
        </Routes>
      </Sidebar>
    </>
  );
};
export default Pages;
