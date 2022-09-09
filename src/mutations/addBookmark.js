import { gql } from '@apollo/client'

export const ADD_BOOKMARK = gql`
  mutation addBookmark($post_id: ID, $user_id: String){
    addBookmark(post_id: $post_id, user_id: $user_id){
      id
    }
  }
`