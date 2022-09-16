import { gql } from '@apollo/client'

export const GET_LIKES = gql`
  query getLikes($user_id : String){
    getLikes(user_id : $user_id) {
      id
    }
  }
`