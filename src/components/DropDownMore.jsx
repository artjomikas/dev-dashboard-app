const DropDownMore = (props) => {
  return (
    <div className="absolute">
      <div
        onClick={() => props.setShowDropDown(false)}
        className="fixed inset-0 h-full w-full z-100"
      ></div>

      <div className="absolute -left-24 bottom-8 mt-2 w-52 bg-input hover:bg-dark rounded-md overflow-hidden shadow-xl cursor-pointer">
        {props.bookmarked ? (
          <div className="block pl-4 py-2 text-[13px] text-primary text-center">
            <div
              className="flex items-center gap-1"
              onClick={() => deleteBookmark()}
            >
              Remove from bookmarks
            </div>
          </div>
        ) : (
          <div className="block pl-4 pr-1 py-2 text-[13px] text-primary text-center">
            <div
              className="flex items-center gap-1"
              onClick={() => addBookmark()}
            >
              Add to bookmarks
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default DropDownMore;
