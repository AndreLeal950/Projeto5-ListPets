import React, { Fragment } from 'react'
import '../style/Cards.css'
import { Flex, Stack, Text, Stat, Button, Container, Circle, extendTheme } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const Cards = (props) => {
    const { name, breed, age, species, gender, url} = props
  return (
    <Fragment>
      <Container backgroundColor='grey' flexWrap={'wrap'} borderRadius='15' margin={'10'} padding='10px'>
        <Flex className='flex-cards' flexDirection={'column'} alignItems='center' gap={5} >
              <Circle as={'img'} src={url} alt='Foto dos Animais' boxSize='250px' objectFit='cover'/>
          </Flex>
          <Flex >
            <Stack>
            <Text textAlign={'left'} fontSize='26' fontStyle={'italic'} flexDirection={'column'}>Nome: {name}</Text> 
            <Text textAlign={'left'} fontSize='26' fontStyle={'italic'} flexDirection={'column'}>Raça: {breed}</Text>
            <Text textAlign={'left'} fontSize='26' fontStyle={'italic'} flexDirection={'column'}>Idade: {age}</Text>
            <Text textAlign={'left'} fontSize='26' fontStyle={'italic'} flexDirection={'column'}>Especie: {species}</Text>
            <Text textAlign={'left'} fontSize='26' fontStyle={'italic'} flexDirection={'column'}>Sexo: {gender}</Text>
            <Stat>

            </Stat>
            <Button
              fontSize={'40px'}
              alignItems={'center'}
              height='60px'
              width='355px'
              borderRadius='10' 
              backgroundColor={'Brown'}
              type='submit'>
              
              <Link to='/login'>Adotar</Link>     
                            
            </Button>
          
            </Stack>
        </Flex >
      </Container>
    </Fragment>
  )
}

export default Cards;
