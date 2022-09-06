import { gql } from '@apollo/client'

export const GET_BOOKMARK_BY_USER_ID = gql`
  query getBookmarkByUserID($id : ID){
    getBookmarkByUserID(id : $id) {
      post_id {
        title, imageURL, permaLink, readTime, author{
          name, username, imageURL
        }
      }
    }
  }
`