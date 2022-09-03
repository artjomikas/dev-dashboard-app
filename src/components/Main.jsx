import { Articles, AddArticle } from "../";

const Main = () => {
  return (
    <div className="sm:max-w-screen-sm md:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-[1800px] mx-auto w-full">
      <AddArticle />
      <Articles />
    </div>
  );
};
export default Main;
