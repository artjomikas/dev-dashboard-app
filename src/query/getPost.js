import { gql } from '@apollo/client'

export const GET_POST = gql`
query getPost($user : String, $id: String){
  getPost(user : $user, id: $id) {
    _id, title, imageURL, permaLink, description, readTime, createdAt, bookmarked, liked, likesCount, author{
      _id, username, name, imageURL
    }, comments{
      text, createdAt, author {
        _id, name, imageURL
      }
    }
  }
}
`