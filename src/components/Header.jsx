import { useState } from "react";
import Logo from "./Logo";
import Modal from "./Modal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="h-16 border-b-[#a8b3cf33] border-b-[1px] flex items-center justify-between px-6 py-3">
        <Logo />
        <button
          className="flex px-8 py-2 bg-white rounded-[12px] font-semibold border leading-[20px] hover:bg-primary text-[14px] hover:shadow-lg"
          onClick={() => setShowModal(!showModal)}
        >
          Sign in
        </button>
      </div>

      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={() => setShowModal(!showModal)}
        />
      )}
    </>
  );
};

export default Header;
