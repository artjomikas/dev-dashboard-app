import { formatDate } from "../utils/formatDate";

const Comment = ({ text, author, createdAt }) => {
  const postDataFormated = formatDate(createdAt);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <div className="cursor-pointer flex items-center">
          <img
            src={author.imageURL}
            alt="Avatar of user who made a post"
            className="h-6 w-6 md:h-8 md:w-8 rounded-full mr-2"
          />
          <p className="text-[16px] text-primary ">{author.name}</p>
        </div>
        <p className="text-[16px] text-primary whitespace-pre-wrap">
          {"  -  " +
            postDataFormated.slice(0, 2).join(" ") +
            ", " +
            postDataFormated.slice(2, 3).join(" ")}
        </p>
      </div>

      <div className="bg-input py-2 px-3 my-3 rounded-lg">
        <p className="break-all">{text}</p>
      </div>
    </div>
  );
};
export default Comment;
