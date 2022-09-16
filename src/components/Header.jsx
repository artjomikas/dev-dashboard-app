import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import ProfileDropDown from "./Profile/ProfileDropDown";
import ProfileAvatar from "./Profile/ProfileAvatar";
import Modal from "./Modal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const { user } = UserAuth();
  
  return (
    <>
      <div className="h-16 border-b-[#a8b3cf33] border-b-[1px] flex items-center justify-between px-6 py-3">
        <Link to="/">
          <Logo />
        </Link>

        {user ? (
          user.imageURL && (
            <>
              <ProfileAvatar
                setShowDropDown={setShowDropDown}
                showDropDown={showDropDown}
              />

              {showDropDown && (
                <ProfileDropDown
                  setShowDropDown={setShowDropDown}
                  showDropDown={showDropDown}
                />
              )}
            </>
          )
        ) : (
          <button
            className="flex px-8 py-2 bg-white rounded-[12px] font-semibold border leading-[20px] hover:bg-primary text-sm sm:typo hover:shadow-lg"
            onClick={() => setShowModal(!showModal)}
          >
            Sign in
          </button>
        )}
      </div>

      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  );
};

export default Header;
