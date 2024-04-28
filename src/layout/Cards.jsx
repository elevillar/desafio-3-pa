import { useEffect, useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Cards = () => {
  const [dataPoke, setDataPoke] = useState('')
  const { name } = useParams()

  const getPokemon = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const data = await res.json()
      const src = data.sprites.back_default
      const abilities = data.abilities.map((item) => item.ability.name)
      const altura = data.height
      const peso = data.weight
      const type = data.types.map((item) => item.type.name)
      setDataPoke({ src, abilities, name, altura, peso, type })
    } catch (error) {
      console.log(error)
    }
  };
  console.log(dataPoke)

  useEffect(() => {
    getPokemon();
  }, [])

  const navigate = useNavigate()
  const volver = () => {
    navigate('/pokemones/')
  };

  return (
    <Container className='pt-5'>
      {dataPoke ? (
        <Card>
            <Row>
              <Col md={4}>
                <Card.Img src={dataPoke.src} />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title className='pb-2 cardTitle'>{dataPoke.name.toUpperCase()}</Card.Title>
                  <p><strong>Peso:</strong> {dataPoke.peso / 10 + 'kg'}</p>
                  <p><strong>Altura:</strong> {dataPoke.altura / 10 + 'mts'}</p>
                  <p><strong>Tipo:</strong></p>
                  <ul>
                    {dataPoke.type.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p><strong>Habilidades:</strong></p>
                  <ul>
                    {dataPoke.abilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Col>
            </Row>
        </Card>
      ) : (
        'Cargando...'
      )}
      <div className='text-center pt-4'>
        <Button onClick={volver} variant='dark'>Volver</Button>
      </div>
    </Container>
  )
}

export default Cards
