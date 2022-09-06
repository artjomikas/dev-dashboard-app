import { Articles, AddArticle } from "..";
import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "../query/posts";
import { useState, useEffect } from "react";


const Main = () => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!loading) {
      setPosts(data.getAllPosts);
    }
  }, [data]);

  return (
    <div className="sm:max-w-screen-sm md:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-[1800px] mx-auto w-full px-4">
      <AddArticle />
      <Articles posts={posts}/>
    </div>
  );
};
export default Main;
