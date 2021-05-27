export const allCharacters = () => window.fetch('https://rickandmortyapi.com/api/character')
  .then(res => {
    return !res.ok ? Promise.reject(res) : res.json()
  })

export const handlePage = (page) => window.fetch(page)
  .then(res => {
    return !res.ok ? Promise.reject(res) : res.json()
  })

export const searchByName = ({ name }) =>
  window.fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
    .then(res => {
      return !res.ok ? Promise.reject(res) : res.json()
    })
