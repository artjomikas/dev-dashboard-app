const Author = ({ author }) => {
  return (
    <div className="flex flex-row items-center gap-2 cursor-pointer break-words">
      <img
        src={author.imageURL}
        alt="Avatar of user who made a post"
        className="flex h-8 w-8 md:h-6  md:w-6 rounded-full"
      />
      <div className="flex flex-col ">
        <p className="text-[13px] font-bold leading-[11px]">{author.name}</p>
        <p className="text-[#A8B3CF] text-[11px]">{author.username}</p>
      </div>
    </div>
  );
};
export default Author;
