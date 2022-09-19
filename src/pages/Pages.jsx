import { Header, Home, Sidebar, Bookmarks, Profile, Settings } from "../";
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
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Sidebar>
    </>
  );
};
export default Pages;
