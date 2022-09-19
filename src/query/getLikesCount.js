import { gql } from '@apollo/client'

export const GET_LIKES_COUNT = gql`
  query getLikesCount($user_id : String){
    getLikesCount(user_id : $user_id)
  }
`