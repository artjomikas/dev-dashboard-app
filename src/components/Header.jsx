import { useState } from "react";
import Logo from "./Logo";
import Modal from "./Modal";
import { UserAuth } from "../context/AuthContext";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const { user, logout } = UserAuth();
  return (
    <>
      <div className="h-16 border-b-[#a8b3cf33] border-b-[1px] flex items-center justify-between px-6 py-3">
        <Logo />
        {/* <button onClick={()=> console.log(user)}>Text</button> */}
        {user ? (
          user.photoURL && (
            <>
              <button
                className="items-center gap-4 cursor-pointer float-right "
                onClick={() => setShowDropDown(!showDropDown)}
              >
                <img
                  src={user.photoURL}
                  className="h-9 w-9 rounded-full ring-2 ring-white "
                  alt="Github Profile Avatar"
                />
              </button>

              {showDropDown && (
                <div
                  className="fixed inset-0 z-100"
                  onClick={() => setShowDropDown(!showDropDown)}
                  // close modal when outside of modal is clicked
                >
                  <div
                    className="absolute rounded-md w-44 right-6 top-[70px] bg-white divide-gray-100 text-sm "
                    onClick={(e) => {
                      // do not close modal if anything inside modal content is clicked
                      e.stopPropagation();
                    }}
                  >
                    <p className="block py-2 px-4 border-b">
                      Signed in as <b>{user.displayName}</b>
                    </p>

                    <ul className="cursor-pointer rounded-xl ">
                      <li className="block py-2 px-4 hover:bg-gray-100 ">
                        Profile
                      </li>
                      <li className="block py-2 px-4 hover:bg-gray-100 ">
                        Settings
                      </li>
                      <li
                        className="block py-2 mb-4 px-4 hover:bg-gray-100 "
                        onClick={() => logout()}
                      >
                        Sign Out
                      </li>
                    </ul>
                  </div>
                </div>
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

      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={() => setShowModal(!showModal)}
        />
      )}
    </>
  );
};

export default Header;
