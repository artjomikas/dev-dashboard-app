import { AiOutlineClose } from "react-icons/ai";
import Logo from "../Logo";
import { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../../mutations/createPost";
import { GET_ALL_POSTS } from "../../query/getAllPostsAggregate";
import Axios from "axios";

const ArticleModal = (props) => {
  return (
    <div
      className="bg-[#ffffff3d] justify-center items-center overflow-x-hidden overflow-y-scroll fixed inset-0 z-100 outline-none px-4 overscroll-y-none"
      onClick={() => props.setShowModal(false)}
    >
      <div
        className="relative mx-auto max-w-[550px] max-h-full w-full"
        onClick={(e) => {
          // do not close dropdown if anything inside dropdown content is clicked
          e.stopPropagation();
        }}
      >
        <div className="relative flex flex-col w-full bg-dark outline-none rounded-xl shadow-lg  p-6">
          <AiOutlineClose
            className="absolute text-[25px] right-3 fill-primary cursor-pointer"
            // close modal if clicked close icon
            onClick={() => props.setShowModal(false)}
          />

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, soluta quo hic rerum sunt saepe, quod ipsum esse voluptatibus cupiditate qui ea, rem veniam totam aspernatur nemo quam dolor atque!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, soluta quo hic rerum sunt saepe, quod ipsum esse voluptatibus cupiditate qui ea, rem veniam totam aspernatur nemo quam dolor atque!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, soluta quo hic rerum sunt saepe, quod ipsum esse voluptatibus cupiditate qui ea, rem veniam totam aspernatur nemo quam dolor atque!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, soluta quo hic rerum sunt saepe, quod ipsum esse voluptatibus cupiditate qui ea, rem veniam totam aspernatur nemo quam dolor atque!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, soluta quo hic rerum sunt saepe, quod ipsum esse voluptatibus cupiditate qui ea, rem veniam totam aspernatur nemo quam dolor atque!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, soluta quo hic rerum sunt saepe, quod ipsum esse voluptatibus cupiditate qui ea, rem veniam totam aspernatur nemo quam dolor atque!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, soluta quo hic rerum sunt saepe, quod ipsum esse voluptatibus cupiditate qui ea, rem veniam totam aspernatur nemo quam dolor atque!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, soluta quo hic rerum sunt saepe, quod ipsum esse voluptatibus cupiditate qui ea, rem veniam totam aspernatur nemo quam dolor atque!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, soluta quo hic rerum sunt saepe, quod ipsum esse voluptatibus cupiditate qui ea, rem veniam totam aspernatur nemo quam dolor atque!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, soluta quo hic rerum sunt saepe, quod ipsum esse voluptatibus cupiditate qui ea, rem veniam totam aspernatur nemo quam dolor atque!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, soluta quo hic rerum sunt saepe, quod ipsum esse voluptatibus cupiditate qui ea, rem veniam totam aspernatur nemo quam dolor atque!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, soluta quo hic rerum sunt saepe, quod ipsum esse voluptatibus cupiditate qui ea, rem veniam totam aspernatur nemo quam dolor atque!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, soluta quo hic rerum sunt saepe, quod ipsum esse voluptatibus cupiditate qui ea, rem veniam totam aspernatur nemo quam dolor atque!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, soluta quo hic rerum sunt saepe, quod ipsum esse voluptatibus cupiditate qui ea, rem veniam totam aspernatur nemo quam dolor atque!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, soluta quo hic rerum sunt saepe, quod ipsum esse voluptatibus cupiditate qui ea, rem veniam totam aspernatur nemo quam dolor atque!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, soluta quo hic rerum sunt saepe, quod ipsum esse voluptatibus cupiditate qui ea, rem veniam totam aspernatur nemo quam dolor atque!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, soluta quo hic rerum sunt saepe, quod ipsum esse voluptatibus cupiditate qui ea, rem veniam totam aspernatur nemo quam dolor atque!
        </div>
      </div>
    </div>
  );
};
export default ArticleModal;
