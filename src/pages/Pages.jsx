import { Header, Main, Sidebar,Bookmarks } from "../";
import { Route, Routes } from "react-router-dom";

const Pages = () => {
  return (
    <>
      <Header />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </Sidebar>
    </>
  );
};
export default Pages;
