import { Articles, AddArticle } from "..";

const Home = ({ refetch, posts, user }) => {
  return (
    <div className="sm:max-w-screen-sm md:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-[1800px] mx-auto w-full px-4">
      <AddArticle />
      <Articles user={user} refetch={refetch} posts={posts} />
    </div>
  );
};
export default Home;
