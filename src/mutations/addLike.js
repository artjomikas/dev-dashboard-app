import { gql } from '@apollo/client'

export const ADD_LIKE = gql`
  mutation addLike($post_id: ID, $user_id: String){
    addLike(post_id: $post_id, user_id: $user_id){
      id
    }
  }
`