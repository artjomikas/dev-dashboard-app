import { UserAuth } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

const ProfileDropDown = (props) => {
  const { user, logout } = UserAuth();

  return (
    <div
      className="fixed inset-0 z-100"
      onClick={() => props.setShowDropDown(!props.showDropDown)}
      // close dropdown when outside of dropdown is clicked
    >
      <div
        className="absolute rounded-md w-44 right-6 top-[70px] bg-white divide-gray-100 text-sm after:triangle-up"
        onClick={(e) => {
          // do not close dropdown if anything inside dropdown content is clicked
          e.stopPropagation();
        }}
      >
        <p className="block py-2 px-4 border-b break-words mb-1 cursor-pointer">
          Signed in as <b>{user.name}</b>
        </p>

        <div className="cursor-pointer rounded-xl">
          <p className="block py-1"></p>

          <NavLink
            to="profile"
            onClick={() => props.setShowDropDown(!props.showDropDown)}
          >
            <p className="block py-2 px-4 hover:bg-gray-100">Profile</p>
          </NavLink>

          <p className="block py-2 px-4 hover:bg-gray-100">Settings</p>
          <p
            className="block py-2 mb-4 px-4 hover:bg-gray-100"
            onClick={() => logout()}
          >
            Sign Out
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropDown;
