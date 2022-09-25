import { AiOutlineClose } from "react-icons/ai";
import Logo from "../Logo";
import { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../../mutations/createPost";
import { GET_ALL_POSTS } from "../../query/getAllPostsAggregate";
import Axios from "axios";

const AddArticleModal = (props) => {
  const { user } = UserAuth();

  const [fetched, setFetched] = useState(false);

  const [values, setValues] = useState({
    permaLink: "",
    title: "",
    description: "",
    imageURL: "",
    readTime: "",
  });

  const data = {
    state: values.permaLink,
    placeholder: "Article link",
    name: "permaLink",
  };

  const newData = [
    { state: values.permaLink, placeholder: "Article link", name: "permaLink" },
    { state: values.title, placeholder: "Title", name: "title" },
    {
      state: values.description,
      placeholder: "Description",
      name: "description",
    },
    { state: values.imageURL, placeholder: "Image link", name: "imageURL" },
    { state: values.readTime, placeholder: "Read time", name: "readTime" },
  ];

  const [newPost] = useMutation(CREATE_POST, {
    refetchQueries: [
      {
        query: GET_ALL_POSTS,
        variables: {
          user: user._id,
        },
      },
    ],
  });

  const handleChange = (e) => {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.id]:
        e.target.id === "description" ? e.target.textContent : e.target.value,
    }));
  };

  const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "a0oail7i");
    formData.append("folder", "articles");


    const response = await Axios.post(
      "https://api.cloudinary.com/v1_1/taltech/image/upload",
      formData
    );
    console.log(response.data);
    return response.data.url;
  };

  const addUser = async () => {
    const imageURL = await uploadImage(values.imageURL);
    newPost({
      variables: {
        input: {
          title: values.title,
          imageURL: imageURL,
          permaLink: values.permaLink,
          description: values.description,
          readTime: Number(values.readTime),
          author: {
            name: user.name,
            username: "@" + user.username,
            imageURL: user.imageURL,
          },
        },
      },
    });

    props.setShowModal(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fetched) {
      addUser();
    } else {
      await Axios.post("http://localhost:3000/api/scrape", {
        url: values.permaLink,
      }).then((response) => {
        const { description, image, title, url } = response.data;
        setValues((oldValues) => ({
          ...oldValues,
          title: title,
          imageURL: image,
          description: description,
        }));
      });
      setFetched(true);
    }
  };

  return (
    <div
      className="bg-[#ffffff3d] flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100 outline-none px-4"
      // close modal when outside of modal is clicked
    >
      <div className="relative mx-auto max-w-[550px] max-h-full w-full">
        <div className="relative flex flex-col w-full bg-dark outline-none rounded-xl shadow-lg  p-6">
          <Logo className="mb-8 justify-center" />

          <AiOutlineClose
            className="absolute text-[25px] right-3 fill-primary cursor-pointer"
            // close modal if clicked close icon
            onClick={() => props.setShowModal(false)}
          />

          {!fetched && (
            <p className="text-primary typo mb-8 text-center w-3/4 mx-auto">
              Found an interesting article? Do you want to share it with the
              community? Just enter the article link, <br /> get the information
              and send it to review.
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mx-auto w-3/4 flex flex-col text-white">
              {fetched ? (
                <>
                  <label htmlFor={newData[0].name} className="mb-1">
                    {newData[0].placeholder}
                  </label>

                  <input
                    className="input__field"
                    type="text"
                    value={newData[0].state}
                    onChange={handleChange}
                    id={newData[0].name}
                    required
                  ></input>

                  <label htmlFor={newData[1].name} className="mb-1">
                    {newData[1].placeholder}
                  </label>
                  <input
                    className="input__field"
                    type="text"
                    value={newData[1].state}
                    onChange={handleChange}
                    id={newData[1].name}
                    required
                  ></input>

                  <label htmlFor={newData[2].name} className="mb-1">
                    {newData[2].placeholder}
                  </label>
                  <span
                    role="textbox"
                    className="input__field block border resize-y"
                    contentEditable="true"
                    onBlur={handleChange}
                    id={newData[2].name}
                  >
                    {newData[2].state}
                  </span>

                  <label htmlFor={newData[4].name} className="mb-1">
                    {newData[4].placeholder}
                  </label>

                  <input
                    className="input__field"
                    type="number"
                    value={newData[4].state}
                    onChange={handleChange}
                    id={newData[4].name}
                    required
                  ></input>

                  <label htmlFor={newData[3].name} className="mb-1">
                    {newData[3].placeholder}
                  </label>

                  <input
                    className="input__field mb-2"
                    type="text"
                    value={newData[3].state}
                    onChange={handleChange}
                    id={newData[3].name}
                    required
                  ></input>

                  <img src={newData[3].state} className="rounded-xl mb-4"></img>
                </>
              ) : (
                <input
                  className="input__field"
                  type="text"
                  value={data.state}
                  onChange={handleChange}
                  id={data.name}
                  placeholder={data.placeholder}
                  required
                ></input>
              )}

              <div className="flex gap-4 pt-4">
                {fetched && (
                  <button
                    className="button__primary  w-1/2 sm:w-1/2 py-3 text-white bg-[#6495ED] hover:bg-[#6495ED] border-none active:outline-primary active:outline-1 active:outline"
                    onClick={() => setFetched(false)}
                  >
                    <p className="mx-auto ">Back</p>
                  </button>
                )}

                <button
                  className="button__primary  w-1/2 sm:w-1/2 py-3 text-white bg-[#33b864] hover:bg-[#30d46d] border-none active:outline-primary active:outline-1 active:outline"
                  type="submit"
                >
                  <p className="mx-auto ">
                    {!fetched ? "Next" : "Add to review"}
                  </p>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddArticleModal;
