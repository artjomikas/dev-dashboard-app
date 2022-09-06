import { gql } from '@apollo/client'

export const GET_USER_BY_ID = gql`
    query getUser($id : ID){
      getUser(id: $id) {
        username
      }
  }
`