import { gql } from '@apollo/client'

export const GET_BOOKMARKS = gql`
  query getBookmarks($user_id : String){
    getBookmarks(user_id : $user_id) {
      id, title, imageURL, permaLink, readTime, createdAt, likes, bookmarks, author{
        _id, username, name, imageURL
      }
    }
  }
`