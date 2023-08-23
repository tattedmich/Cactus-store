import { Flex, Box, Spacer } from '@chakra-ui/react'
import React from 'react'

const CartWidget = () => {
  return (
    <div>
        <Flex>
            <Box>
            <span className="material-symbols-outlined">
            shopping_bag
            </span>
            </Box>
            <Spacer/>
            <Box>
                <p>3</p>
            </Box>
        </Flex>
    </div>
  )
}

export default CartWidget