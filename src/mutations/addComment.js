import { gql } from '@apollo/client'

export const ADD_COMMENT = gql`
  mutation addComment($input: CommentInput){
    addComment(input:$input){
      title
    }
  }
`