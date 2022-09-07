import { gql } from '@apollo/client'

export const REMOVE_BOOKMARK = gql`
  mutation removeBookmark($id: ID){
    removeBookmark(id: $id){
     id
    }
  }
`