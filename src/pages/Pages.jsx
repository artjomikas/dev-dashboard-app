import { Header, Main, Sidebar, AddArticleModal } from "../";
import { Route, Routes } from "react-router-dom";

const Pages = () => {
  return (
    <>
      <Header />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Sidebar>
    </>
  );
};
export default Pages;
