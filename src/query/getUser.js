import { gql } from '@apollo/client'

export const GET_USER_BY_ID = gql`
    query getUser($id : String){
      getUser(id: $id) {
        _id, imageURL, name, email, username, provider, bio, twitter, github, website
      }
  }
`