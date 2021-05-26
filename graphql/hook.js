import { GraphQLClient } from 'graphql-request'
import { useQuery } from 'react-query'

export function GetCharacter (key, query, variables, config = {}) {
  const endpoint = 'https://rickandmortyapi.com/graphql'
  const graphqlClient = new GraphQLClient(endpoint)

  const fetchData = async () => await graphqlClient.request(query, variables)
  return useQuery(key, fetchData, config)
}
