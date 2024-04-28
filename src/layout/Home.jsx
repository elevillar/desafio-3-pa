import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <Container className='pt-5 text-center'>
        <div>
          <h1 className='text-center'>Bienvenido, ¡maestro pokemón!</h1>
          <img className='pt-4' src='https://www.nme.com/wp-content/uploads/2016/12/POTY_Pikachu_3.jpg' alt='Pikachu' />
        </div>
    </Container>
  )
}

export default Home
