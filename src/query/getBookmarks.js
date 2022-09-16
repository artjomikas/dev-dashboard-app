import { gql } from '@apollo/client'

export const GET_BOOKMARKS = gql`
  query getBookmarks($user_id : String){
    getBookmarks(user_id : $user_id) {
      id
    }
  }
`