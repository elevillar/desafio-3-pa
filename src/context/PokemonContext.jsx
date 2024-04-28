import { useEffect, useState, createContext } from 'react'

export const PokemonContext= createContext()

const PokemonProvider = ({children}) => {

  const [pokemon, setPokemon] = useState([])
  const [name, setName] = useState('')

  const getData = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
      const data = await res.json()
      setPokemon(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <PokemonContext.Provider value={{pokemon, setPokemon, name, setName}}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider
