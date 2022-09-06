import { AiOutlineClose } from "react-icons/ai";
import Logo from "../Logo";
import { useRef } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../../mutations/createPost";
import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "../../query/posts";

const AddArticleModal = (props) => {
  const { refetch } = useQuery(GET_ALL_POSTS);
  const titleRef = useRef();
  const imageRef = useRef();
  const linkRef = useRef();
  const readtimeRef = useRef();
  const { user } = UserAuth();

  const [newPost] = useMutation(CREATE_POST);

  const articleModel = [
    { id: "title", placeholder: "Article title", ref: titleRef },
    { id: "image", placeholder: "Image link", ref: imageRef },
    { id: "link", placeholder: "Article link", ref: linkRef },
    { id: "readtime", placeholder: "Read time", ref: readtimeRef },
  ];

  const addUser = () => {
    newPost({
      variables: {
        input: {
          title: titleRef.current.value,
          imageURL: imageRef.current.value,
          permaLink: linkRef.current.value,
          readTime: Number(readtimeRef.current.value),
          author: {
            name: user.reloadUserInfo.displayName,
            username: "@" + user.reloadUserInfo.screenName,
            imageURL: user.reloadUserInfo.photoUrl,
          },
        },
      },
    });

    refetch();

    props.setShowModal(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      addUser();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="bg-[#ffffff3d] flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100 outline-none px-4"
      // close modal when outside of modal is clicked
    >
      <div className="relative mx-auto max-w-[450px] max-h-full w-full">
        <div className="relative flex flex-col w-full bg-dark outline-none rounded-xl shadow-lg  p-6 text-center">
          <Logo className="mb-8 justify-center" />

          <AiOutlineClose
            className="absolute text-[25px] right-3 fill-primary cursor-pointer"
            // close modal if clicked close icon
            onClick={() => props.setShowModal(false)}
          />

          <p className="text-primary typo mb-8">
            Found an interesting article? Do you want to share it with the
            community? Enter the article information and send it to review.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mx-auto w-3/4 flex flex-col gap-6">
              {articleModel.map((article, i) => {
                return (
                  <input
                    key={i}
                    className="input__field"
                    id={article.id}
                    type="text"
                    ref={article.ref}
                    placeholder={article.placeholder}
                    required
                  ></input>
                );
              })}

              <button
                className="button__primary mt-2 w-2/3 sm:w-1/2 py-3 bg-[#33b864] hover:bg-[#30d46d] border-none active:outline-primary active:outline-1 active:outline"
                type="submit"
              >
                <p className="mx-auto">Submit article</p>
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddArticleModal;
