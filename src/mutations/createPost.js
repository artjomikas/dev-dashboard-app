import { gql } from '@apollo/client'

export const CREATE_POST = gql`
  mutation createPost($input: PostInput){
    createPost(input: $input){
      _id, title, imageURL, permaLink, description, readTime, author {
        _id
      }
    }
  }
`