import { Header, Home, Sidebar, Bookmarks, Profile } from "../";
import { Route, Routes } from "react-router-dom";

const Pages = () => {
  return (
    <>
      <Header />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Sidebar>
    </>
  );
};
export default Pages;
