import { UserAuth } from "../context/AuthContext";

const ProfileAvatar = (props) => {
  const { user } = UserAuth();

  return (
    <button
      className="items-center gap-4 cursor-pointer float-right "
      onClick={() => props.setShowDropDown(!props.showDropDown)}
    >
      <img
        src={user.imageURL}
        className="h-9 w-9 rounded-full ring-2 ring-white "
        alt="Github Profile Avatar"
      />
    </button>
  );
};

export default ProfileAvatar;
