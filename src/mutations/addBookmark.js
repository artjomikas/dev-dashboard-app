import { gql } from '@apollo/client'

export const ADD_BOOKMARK = gql`
  mutation addBookmark($input: BookmarkInput){
    addBookmark(input: $input){
      id
    }
  }
`