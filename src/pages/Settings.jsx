import { UserAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";

const Settings = () => {
  const { user } = UserAuth();

  const [values, setValues] = useState({
    username: "",
    name: "",
    email: "",
    bio: "",
    twitter: "",
    github: "",
    website: "",
  });

  const data = [
    { title: "Username", name: "username", value: values.username },
    { title: "Name", name: "name", value: values.name },
    { title: "E-mail", name: "email", value: values.email },
    { title: "Bio", name: "bio", value: values.bio },
    { title: "Twitter", name: "twitter", value: values.twitter },
    { title: "Github", name: "github", value: values.github },
    { title: "Website", name: "website", value: values.website },
  ];

  const handleChange = (e) => {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
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
    });
  }, [user]);

  return (
    <div className="p-8 container max-w-screen-md mx-auto text-white ">
      <div className="flex">
        {/* <button onClick={() => console.log(user)}>TEST</button> */}
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

      {data.map(({ title, name, value }) => (
        <div className="my-6">
          <label htmlFor={name} className="block mb-1 typo">
            {title}
          </label>

          <input
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
    </div>
  );
};
export default Settings;
