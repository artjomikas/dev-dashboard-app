import { UserAuth } from "../context/AuthContext";
import { UPDATE_USER } from "../mutations/updateUser";
import { GET_USER_BY_ID } from "../query/getUser";

import { useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import Axios from "axios";

const Settings = () => {
  const { user } = UserAuth();

  const [updateUser] = useMutation(UPDATE_USER, {
    refetchQueries: [
      {
        query: GET_USER_BY_ID,
        variables: {
          id: user._id,
        },
      },
    ],
  });

  const updateUserFunc = async (result) => {
    try {
      await updateUser({
        variables: {
          user_id: user._id,
          data: result,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [image, setImage] = useState({
    image: "",
    reader: "",
  });

  const [values, setValues] = useState({
    imageURL: "",
    username: "",
    name: "",
    email: "",
    bio: "",
    twitter: "",
    github: "",
    website: "",
  });

  const data = [
    {
      title: "Username",
      name: "username",
      value: values.username,
      required: "required",
    },
    { title: "Name", name: "name", value: values.name, required: "required" },
    {
      title: "E-mail",
      name: "email",
      value: values.email,
      required: "required",
    },
    { title: "Bio", name: "bio", value: values.bio },
    {
      title: "Twitter",
      name: "twitter",
      value: values.twitter,
    },
    {
      title: "Github",
      name: "github",
      value: values.github,
    },
    {
      title: "Website",
      name: "website",
      value: values.website,
    },
  ];

  const handleChange = (e) => {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let result = JSON.parse(JSON.stringify({ ...values }));
      if (image.image != undefined) {
        result = await uploadImage(image.image);
      }
      updateUserFunc(result);

      // console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageSubmit = async (image) => {
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      setImage({
        reader: reader.result,
        image: image,
      });
    };
  };

  const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "a0oail7i");

    const response = await Axios.post(
      "https://api.cloudinary.com/v1_1/taltech/image/upload",
      formData
    );

    const res = await response.data.url;
    const json = JSON.stringify({ ...values, imageURL: res });
    return JSON.parse(json);
  };

  useEffect(() => {
    setValues({
      username: user.username,
      name: user.name,
      email: user.email,
      bio: user.bio,
      twitter: user.twitter,
      github: user.github,
      website: user.website,
      imageURL: user.imageURL,
    });
    setImage({
      reader: user.imageURL,
    });
  }, [user]);

  return (
    <div className="px-8 pt-2 container max-w-screen-md mx-auto text-white ">
      <h1 className="py-4 font-semibold text-2xl">Profile settings</h1>

      <div className="flex">
        <div className="p-2 bg-secondary  rounded-2xl">
          <img src={image.reader} className="h-20 w-20 rounded-2xl" />
        </div>

        <div className="flex flex-col pl-8 pt-2">
          <h1 className="text-2xl font-medium">{values.name}</h1>
          <h3 className="text-primary text-md pt-1">@{values.username}</h3>
          <h3 className="text-slate-500 text-sm pt-3">Joined 2 Dec 2022</h3>
        </div>
      </div>

      <label className="block pt-4">
        <input
          type="file"
          onChange={(e) => handleImageSubmit(e.target.files[0])}
          name="image"
          className="block w-full file:text-hidden text-sm file:cursor-pointer text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
        />
      </label>

      <form onSubmit={handleSubmit}>
        {data.map(({ title, name, value, required }, i) => (
          <div className="my-5" key={i}>
            <label htmlFor={name} className="block mb-1 typo">
              {title}
            </label>
            <input
              required={required}
              value={value || ""}
              onChange={handleChange}
              type="text"
              name={name}
              id={name}
              className="block w-full p-2 bg-dark text-primary border-primary  outline-none shadow-lg
          border border-transparent rounded-lg focus:outline-none focus:bg-[#323743] focus:border-[#a7b8be]"
            />
          </div>
        ))}

        <button
          className="button__primary mt-4 w-[180px] py-3 bg-[#33b864] hover:bg-[#30d46d] border-none active:outline-primary active:outline-1 active:outline"
          type="submit"
        >
          <p className="mx-auto">Save changes</p>
        </button>
      </form>
    </div>
  );
};
export default Settings;
