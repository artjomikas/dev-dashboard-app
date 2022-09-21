import { gql } from '@apollo/client'

export const UPDATE_USER = gql`
  mutation updateUser($user_id: String!, $data: UserInput!){
    updateUser(user_id: $user_id, data: $data){
      _id
    }
  }
`