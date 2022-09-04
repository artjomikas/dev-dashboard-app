import { useState } from "react";
import AddArticleModal from "./AddArticleModal";

const AddArticle = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative ml-4 mt-6">
      <button
        className="button__primary"
        onClick={() => setShowModal(!showModal)}
      >
        Add Article
      </button>

      {showModal && <AddArticleModal setShowModal={setShowModal} />}
    </div>
  );
};
export default AddArticle;
