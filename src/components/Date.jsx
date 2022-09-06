const DateOfPosting = (props) => {
  return (
    <div className="flex items-center text-[#A8B3CF] text-[12px] ">
      {props.postDate.slice(0, 2).join(" ")},{" "}
      {props.postDate.slice(2, 3).join(" ")} - {props.readTime}m read time
    </div>
  );
};
export default DateOfPosting;
