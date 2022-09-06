import {gql} from '@apollo/client'

export const GET_ALL_POSTS = gql`
  query{
    getAllPosts {
      id, title, imageURL, permaLink, readTime, createdAt, author{
        _id, username, name, imageURL
      }
    }
  }
`