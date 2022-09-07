import { gql } from '@apollo/client'

export const GET_BOOKMARK_BY_USER_ID = gql`
  query getBookmarkByUserID($id : ID){
    getBookmarkByUserID(id : $id) {
      post_id {
        id, title, imageURL, permaLink, readTime, createdAt, author{
          name, username, imageURL
        }
      }
    }
  }
`