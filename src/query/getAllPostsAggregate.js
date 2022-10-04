import { gql } from '@apollo/client'

export const GET_ALL_POSTS = gql`
  query getAllPosts($user : String){
    getAllPosts(user : $user) {
      _id, title, imageURL, permaLink, readTime, createdAt, bookmarked, liked, likesCount, author {
        _id, username, name, imageURL
      }
    }
  }
`