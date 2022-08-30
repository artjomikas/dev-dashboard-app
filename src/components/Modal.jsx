import { AiOutlineClose, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Logo from "./Logo";

const Modal = (props) => {
  const buttonArray = [
    [<AiOutlineGithub className="text-[23px] mr-2" />, "GitHub"],
    [<FcGoogle className="text-[23px] mr-2" />, "Google"],
    [<AiOutlineMail className="text-[23px] mr-2" />, "Email"],
  ];
  return (
    <>
      <div
        className="bg-[#ffffff3d] flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100 outline-none px-4"
        // close modal when outside of modal is clicked
        onClick={props.setShowModal}
      >
        <div
          className="relative mx-auto max-w-[450px] max-h-full w-full"
          onClick={(e) => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}
        >
          <div className="relative flex flex-col w-full bg-dark outline-none rounded-xl shadow-lg  p-6 text-center">
            <Logo className="mb-8 justify-center" />

            <AiOutlineClose
              className="absolute text-[25px] right-3 fill-primary cursor-pointer"
              // close modal if clicked close icon
              onClick={props.setShowModal}
            />

            <span className="text-primary typo mb-8">
              Unlock useful features by signing in. A bunch of cool stuff like
              content filters and bookmarks are waiting just for you.
            </span>

            <div className="flex flex-col items-stretch self-center">
              {buttonArray.map(([icon, title]) => (
                <button
                  key={title}
                  className="bg-white hover:bg-primary my-2 font-medium typo h-10 rounded-[12px] px-[23px] flex flex-row items-center"
                >
                  {icon}
                  <span>Connect with {title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;