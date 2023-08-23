import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <Flex p='7'>
        <Box>
            <h1>{greeting}</h1>
        </Box>
    </Flex>
  )
}

export default ItemListContainer
