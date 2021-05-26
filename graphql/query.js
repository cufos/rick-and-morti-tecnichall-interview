import gql from 'graphql-tag'
export const GET_CHARACTER = gql`
query ($name:String!)
{
  characters(filter:{name: $name}){
    results{
      name
      status
      origin{
        name
      }
      type
      gender
      image
    }
  }
}
`
