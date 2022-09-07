import { gql } from '@apollo/client'

export const GET_BOOKMARK_BY_USER_ID_AND_POST_ID = gql`
  query getBookmarkByUserIDAndPostID($user_id : ID, $post_id : ID){
    getBookmarkByUserIDAndPostID(user_id : $user_id, post_id : $post_id) {
      id
    }
  }
`