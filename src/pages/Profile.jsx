import { useQuery } from "@apollo/client";
import { GET_LIKES_COUNT } from "../query/getLikesCount";
import { GET_BOOKMARKS_COUNT } from "../query/getBookmarksCount";
import { useState, useEffect } from "react";

const Profile = ({ user }) => {
  const {
    error,
    loading,
    data: bookmarks,
    refetch: getBookmarks,
  } = useQuery(GET_BOOKMARKS_COUNT, {
    variables: { user_id: "ehilvtUqnXewrueuEBMbFqh19We2" },
  });
  const { data: likes } = useQuery(GET_LIKES_COUNT, {
    variables: { user_id: "ehilvtUqnXewrueuEBMbFqh19We2" },
  });

  const [bookmarksCount, setBookmarksCount] = useState(0);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    if (!loading) {
      setLikesCount(likes.getLikesCount);
      setBookmarksCount(bookmarks.getBookmarksCount);
    }
  }, [bookmarks]);

  return (
    <div className="p-8 container max-w-screen-md mx-auto text-white ">
      <div className="flex">
        <div className="p-4 bg-secondary  rounded-2xl">
          <img
            src={user.imageURL}
            className="h-24 w-24 rounded-3xl"
            alt="Profile image"
          />
        </div>
        <div className="flex flex-col pl-8 pt-4">
          <h1 className="text-3xl font-medium">{user.name}</h1>
          <h3 className="text-primary text-md pt-1">{user.username}</h3>
          <h3 className="text-slate-500 text-sm pt-4">Joined 2 Dec 2022</h3>
        </div>
      </div>

      <div className="border-b-[1.6px] my-8 border-b-[#a8b3cf65]"></div>

      <div className="text-2xl font-medium pb-2">Stats</div>
      <div className=" gap-4 grid grid-cols-2 sm:grid-cols-3 md:flex">
        <div className="h-20 w-40 bg-secondary p-4 rounded-xl flex flex-col ">
          <div className="font-bold text-xl break overflow-hidden">0</div>
          <div className="text-primary typo font-normal">Article views</div>
        </div>

        <div className="h-20 w-40 bg-secondary p-4 rounded-xl flex flex-col sm:col-span-2">
          <div className="font-bold text-xl break overflow-hidden">
            {bookmarksCount}
          </div>
          <div className="text-primary typo font-normal">Bookmarks</div>
        </div>

        <div className="h-20 w-40 bg-secondary p-4 rounded-xl flex flex-col">
          <div className="font-bold text-xl break overflow-hidden">
            {likesCount}
          </div>
          <div className="text-primary typo font-normal">Likes</div>
        </div>

        <div className="h-20 w-40 bg-secondary p-4 rounded-xl flex flex-col sm:col-span-2">
          <div className="font-bold text-xl break overflow-hidden">0</div>
          <div className="text-primary typo font-normal">Posted articles</div>
        </div>
      </div>

      <div className="text-2xl font-medium pt-8">Your articles</div>
      <div className="text-xl pt-4">On review</div>
      <div className="text-xl pt-4">Accepted</div>
    </div>
  );
};
export default Profile;
