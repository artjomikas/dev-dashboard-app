import {
  Header,
  Home,
  Sidebar,
  Bookmarks,
  Profile,
  Settings,
  Popular,
  ArticleModal,
} from "../";
import { Route, Routes, useLocation } from "react-router-dom";

const Pages = () => {
  const location = useLocation();
  console.log();
  return (
    <>
      <Header />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />}/>
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Sidebar>
    </>
  );
};
export default Pages;
