import ArticleBlock from "./ArticleBlock";
import { ADD_BOOKMARK } from "../../mutations/addBookmark";
import { GET_BOOKMARK_BY_USER_ID } from "../../query/getBookmarkByUserID";
import { useMutation, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";

const Articles = (props) => {
  const posts = props.posts;

  const { user } = UserAuth();

  // const [post, setPost] = useState([]);
  // const [bookmarked, setBookmarked] = useState(false);

  const {
    loading: loading_bookmarks,
    error: error_bookmarks,
    data: data_bookmarks,
  } = useQuery(GET_BOOKMARK_BY_USER_ID, {
    variables: { id: user.uid },
  });

  // useEffect(() => {
  //   if (!loading) {
  //     setPost(data.getBookmarkByUserID.map((e) => (e = e.post_id)));
  //     // post.forEach((element) => {
  //     //   if (element.id == props.id) {
  //     //     setBookmarked(true);
  //     //   }
  //     // });
  //   }
  // }, [data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 text-white pt-8 mx-4 gap-x-6 gap-y-12 place-content-center place-items-center">
      {posts.map((post, i) => {
        return <ArticleBlock bookmarked={false} key={i} {...post} />;
      })}

      {/* {posts.map((post, i) => {
        return <ArticleBlock bookmarked={false} key={i} {...post} />;
      })}

      {posts.map((post, i) => {
        return <ArticleBlock bookmarked={false} key={i} {...post} />;
      })} */}
    </div>
  );
};

export default Articles;
