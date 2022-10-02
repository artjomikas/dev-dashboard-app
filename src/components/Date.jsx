import { formatDate } from "../utils/formatDate.js";

const DateOfPosting = ({ postDate, readTime }) => {
  const postDataFormated = formatDate(postDate);

  return (
    <>
      {postDataFormated.slice(0, 2).join(" ")},{" "}
      {postDataFormated.slice(2, 3).join(" ")} - {readTime}m read time
    </>
  );
};
export default DateOfPosting;
