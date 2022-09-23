import { AiOutlineClose } from "react-icons/ai";
import Logo from "../Logo";
import { useRef, useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../../mutations/createPost";
import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "../../query/posts";
import axios from "axios";

const AddArticleModal = (props) => {
  const { refetch } = useQuery(GET_ALL_POSTS);
  const [newPost] = useMutation(CREATE_POST);
  const { user } = UserAuth();

  const [permaLink, setPermaLink] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setimageURL] = useState("");
  const [readTime, setReadTime] = useState();

  const [fetched, setFetched] = useState(false);

  const [values, setValues] = useState({
    permaLink: "",
    title: "",
    description: "",
    imageURL: "",
    readTime: "",
  });

  // let [articleModel, setArticleModel] = useState([
  //   { id: "permaLink", placeholder: "Article link" },
  // ]);

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

  const handleChange = (e) => {
    console.log(e.target);
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.id]:
        e.target.id === "description" ? e.target.textContent : e.target.value,
    }));
  };

  const addUser = () => {
    newPost({
      variables: {
        input: {
          title: values.title,
          imageURL: values.imageURL,
          permaLink: values.permaLink,
          description: values.description,
          readTime: Number(values.readTime),
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

    if (fetched) {
      await axios
        .post("http://localhost:3000/api/scrape", {
          url: values.permaLink,
        })
        .then((response) => {
          const { description, image, title, url } = response.data;
          setValues((oldValues) => ({
            ...oldValues,
            ["title"]: title,
            ["imageURL"]: image,
            ["description"]: description,
          }));
        });
      setFetched(true);
    } else {
      await axios
        .post("http://localhost:3000/api/scrape", {
          url: values.permaLink,
        })
        .then((response) => {
          const { description, image, title, url } = response.data;
          setValues((oldValues) => ({
            ...oldValues,
            ["title"]: title,
            ["imageURL"]: image,
            ["description"]: description,
          }));
        });
      setFetched(true);
    }

    // setValues((oldValues) => ({
    //   ...oldValues,
    //   [readTime]: "d",
    // }));

    // articleModel = linkModel;
    // console.log(articleModel);
    try {
      // addUser();
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   setValues((oldValues) => ({
  //     ...oldValues,
  //     readTime: 10,
  //   }));
  // }, [values.imageURL]);

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

          {/* <button onClick={() => console.log(values)}>TEST</button> */}

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
                    contenteditable="true"
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

              {/* {(fetched ? newData : data).map(
                ({ state, placeholder, name }, i) => {
                  return (
                    <>
                      <input
                        className="input__field"
                        type="text"
                        value={state}
                        onChange={handleChange}
                        id={name}
                        name={name}
                        placeholder={placeholder}
                        required
                      ></input>

                      <span
                        role="textbox"
                        className="input__field block border resize-y"
                        contenteditable="true"
                      ></span>

                    </>
                  );
                }
              )} */}

              {/* <input
                className="input__field"
                type="text"
                name="imageURL"
                id="imageURL"
                value={values.imageURL}
                onChange={handleChange}
                placeholder="Image"
                required
              ></input>

              <input
                className="input__field"
                type="text"
                name="title"
                id="title"
                value={values.title}
                onChange={handleChange}
                placeholder="title"
                required
              ></input> */}

              <button
                className="button__primary  w-2/3 sm:w-1/2 py-3 text-black bg-[#33b864] hover:bg-[#30d46d] border-none active:outline-primary active:outline-1 active:outline"
                type="submit"
              >
                <p className="mx-auto ">
                  {!fetched ? "Next" : "Add to review"}
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddArticleModal;
