import ArticleBlock from "./ArticleBlock";

const Articles = (props) => {
  const posts = props.posts;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 text-white pt-8 mx-4 gap-x-6 gap-y-12 place-content-center place-items-center">
      {posts.map((post, i) => {
        return <ArticleBlock key={i} {...post} />;
      })}
    </div>
  );
};

export default Articles;
