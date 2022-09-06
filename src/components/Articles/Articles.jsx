import ArticleBlock from "./ArticleBlock";
import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "../../query/posts";
import { useState, useEffect } from "react";

const Articles = () => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!loading) {
      setPosts(data.getAllPosts);
    }
  }, [data]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 text-white pt-8 mx-4 gap-x-6 gap-y-12 place-content-center place-items-center">
      {posts.map((post, i) => {
        return <ArticleBlock key={i} {...post} />;
      })}
    </div>
  );
};

export default Articles;
