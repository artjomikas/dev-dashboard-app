import ArticleBlock from "./ArticleBlock";

const Articles = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 text-white pt-8 mx-4 gap-x-6 gap-y-12 place-content-center place-items-center">
      {posts?.map((post, i) => {
        return <ArticleBlock key={i} {...post} index={i} />;
      })}
    </div>
  );
};

export default Articles;
