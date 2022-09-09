import { gql } from '@apollo/client'

export const REMOVE_LIKE = gql`
  mutation removeLike($post_id: ID, $user_id: String){
    removeLike(post_id: $post_id, user_id: $user_id){
      id
    }
  }
`