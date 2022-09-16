import ArticleBlock from "./ArticleBlock";

const Articles = (props) => {
  let liked;
  let likesNum;

  let bookmarked;

  const posts = props.posts;
  const user = props.user;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 text-white pt-8 mx-4 gap-x-6 gap-y-12 place-content-center place-items-center">
      {posts?.map((post, i) => {
        const likesSet = new Set(post.likes);
        const bookmarksSet = new Set(post.bookmarks);
        likesNum = likesSet.size;

        if (user?._id != undefined) {
          liked = likesSet.has(user._id);
          bookmarked = bookmarksSet.has(user._id);
        } else if (user?._id == undefined) {
          liked = false;
        }

        return (
          <ArticleBlock
            refetchBookmarks={props.refetchBookmarks}
            refetch={props.refetch}
            user={user?._id}
            likesNum={likesNum}
            liked={liked}
            bookmarked={bookmarked}
            key={i}
            {...post}
          />
        );
      })}
    </div>
  );
};

export default Articles;
