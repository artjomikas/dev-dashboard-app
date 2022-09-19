import { gql } from '@apollo/client'

export const REMOVE_BOOKMARK = gql`
  mutation removeBookmark($post_id: ID!, $user_id: String!){
    removeBookmark(post_id: $post_id, user_id: $user_id){
      id
    }
  }
`