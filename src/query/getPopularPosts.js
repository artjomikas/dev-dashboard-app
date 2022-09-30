import {gql} from '@apollo/client'

export const GET_POPULAR_POSTS = gql`
query getPopularPosts($user : String){
  getPopularPosts(user : $user) {
    _id, title, imageURL, permaLink, readTime, createdAt, bookmarked, liked, likesCount, author{
      _id, username, name, imageURL
    }
  }
}
`