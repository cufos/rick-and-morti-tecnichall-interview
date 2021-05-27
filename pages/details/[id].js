import { useRouter } from 'next/router'
// components
import { InfoCharacter } from '../../components/details'
import { Error } from '../../constants/error'
import { Loading } from '../../constants/loading'
// graphql
import { GetCharacter } from '../../graphql/hook'
import { GET_SINGLE_CHARACTER } from '../../graphql/query'

export default function Details () {
  const router = useRouter()
  const result = router.query.id
  const { data, isLoading, error } = GetCharacter('characters', GET_SINGLE_CHARACTER, { id: result })

  if (error) return <Error />
  if (isLoading) return <Loading />
  const { character } = data

  return (
    <InfoCharacter {...character} />
  )
}
