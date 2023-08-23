import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    Box,
    Spacer, 
    Heading,
    ButtonGroup,
    Button
  } from '@chakra-ui/react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='4'>
                <Heading size='md'>Cactus Store</Heading>
            </Box>
            <Spacer />
            <Box p='4'>
                <Menu>
                    <MenuButton>
                        Productos
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Plantas</MenuItem>
                        <MenuItem>Macetas</MenuItem>
                        <MenuItem>Decoración</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Spacer />
            <Box p='4'>
                <CartWidget/>
            </Box>
            <ButtonGroup gap='2' p='4'>
                <Button colorScheme='teal'>Sign Up</Button>
                <Button colorScheme='teal'>Log in</Button>
            </ButtonGroup>
        </Flex>        
    </div>
  )
}

export default NavBar