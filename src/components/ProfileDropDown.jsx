import { UserAuth } from "../context/AuthContext";

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
        <p className="block py-2 px-4 border-b break-words">
          Signed in as <b>{user.displayName}</b>
        </p>

        <ul className="cursor-pointer rounded-xl ">
          <li className="block py-2 px-4 hover:bg-gray-100 ">Profile</li>
          <li className="block py-2 px-4 hover:bg-gray-100 ">Settings</li>
          <li
            className="block py-2 mb-4 px-4 hover:bg-gray-100 "
            onClick={() => logout()}
          >
            Sign Out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDropDown;
