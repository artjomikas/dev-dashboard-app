import { useMutation } from "@apollo/client";
import { ADD_BOOKMARK } from '../mutations/addBookmark';


const AddBook = (post_id, user_id) => {
  const [newPost] = useMutation(ADD_BOOKMARK);



  const addUser = () => {
    newPost({
      variables: {
        input: {
          user_id, post_id
        },
      },
    });
  };
  return (
    <div className="">dd</div>
  )
}

export default AddBook;




//   refetch();

//   props.setShowModal(false);
// };