import {gql} from '@apollo/client'

export const GET_ALL_POSTS = gql`
  query{
    getAllPosts {
      id, title, image, permaLink, readTime, author{
        id, username, name, image
      }
    }
  }
`