import { gql } from '@apollo/client'

export const GET_BOOKMARKS_COUNT = gql`
  query getBookmarksCount($user_id : String){
    getBookmarksCount(user_id : $user_id)
  }
`