import { useRouter } from 'next/router'
import { GetCharacter } from '../../graphql/hook'
import { GET_CHARACTER } from '../../graphql/query'

export default function SingleCharacter () {
  const router = useRouter()
  const { name } = router.query
  const character = name.substring(1)
  const { data, isLoading, error } = GetCharacter('characters', GET_CHARACTER, { name: character })
  console.log(error)
  console.log(data)
  console.log(isLoading)

  return (
    <h1>Hi there</h1>
  )
}
