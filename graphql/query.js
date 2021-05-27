import gql from 'graphql-tag'

export const GET_SINGLE_CHARACTER = gql`
  query($id:ID!){
    character(id:$id){
      name
      image
      episode{
        name
        id
        episode
      }
    }
  }
`
