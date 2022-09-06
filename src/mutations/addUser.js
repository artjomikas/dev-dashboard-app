import { gql } from '@apollo/client'

export const ADD_USER = gql`
  mutation addUser($input: UserInput){
    addUser(input: $input){
      _id, username, imageURL, name, email
    }
  }
`