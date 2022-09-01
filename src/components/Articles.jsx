import ArticleBlock from "./ArticleBlock";
import ArticleBlockTest from "./ArticleBlockTest";

const Articles = () => {
  return (
    <div className="sm:max-w-screen-sm md:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 text-white pt-20 mx-4 gap-x-6 gap-y-12 place-content-center place-items-center">
        <ArticleBlock />

        <ArticleBlock />
        <ArticleBlock />
        <ArticleBlock />
        <ArticleBlock />
        <ArticleBlock />
      </div>
    </div>
  );
};

export default Articles;
