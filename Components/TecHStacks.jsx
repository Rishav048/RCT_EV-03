import React from 'react'

import { Grid, GridItem } from '@chakra-ui/react'

const Skills = ["HTML","CSS", "JAVASCRIPT", "REDUX","REACT","TYPESCRIPT","NEXTJS","STORYBOOK","CHAKRAUI","MATERIAL UI"]

const TecHStacks = () => {
  return (
<Grid templateColumns='repeat(3, 1fr)' width={"70%"} margin={"auto"} gap={3}>
{Skills.map((el) => (
    <GridItem bg='GREY' textAlign={"center"} height='23px' key={el}>{el}</GridItem>
))}

</Grid>
  )
}

export default TecHStacks