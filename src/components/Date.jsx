import { formatDate } from "../utils/formatDate.js";

const DateOfPosting = ({ postDate, readTime }) => {
  const postDataFormated = formatDate(postDate);

  return (
    <div className="flex items-center text-[#A8B3CF] text-[12px]">
      {postDataFormated.slice(0, 2).join(" ")}, {" "}
      {postDataFormated.slice(2, 3).join(" ")} - {readTime}m read time
    </div>
  );
};
export default DateOfPosting;
