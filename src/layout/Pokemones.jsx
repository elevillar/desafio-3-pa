import { Button, Container } from 'react-bootstrap'
import { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { useNavigate } from 'react-router-dom'

const Pokemones = () => {
  const { pokemon, name, setName } = useContext(PokemonContext)

  const navigate = useNavigate()

  const verPokemones = () => {
    navigate(`/pokemones/${name}`)
  }

  const select = (e) => setName(e.target.value)

  return (
    <Container className='text-center pt-5'>
      <div>
        <h2 className='pb-4'>Selecciona un pokemon</h2>
        <select className='select form-select text-center' onChange={select} value={name}>
          <option value=''>Pokemones</option>
            {pokemon.map((poke) => {
              return(
                <option key={poke.name} value={poke.name}>{poke.name}</option>
              )
            })}
        </select>
        <div className='pt-4 text-center'>
          <Button className='btn btn-dark' disabled={name === ''} onClick={verPokemones}>Ver Detalle</Button>
        </div>
      </div>
    </Container>
  )
}

export default Pokemones
