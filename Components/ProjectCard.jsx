import { Card, CardHeader, CardBody, CardFooter,Heading,Stack,Text, Divider } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const ProjectCard = ({data}) => {

    const {html_url,name,forks_count,stargazers_count,language} = data

  return (
    <Card maxW='sm' bg={"grey"}>
  <CardBody>
  
    <Stack mt='6' spacing='3'>
      <Heading size='md'> <Link href={html_url}>{name}</Link></Heading>
      <Divider />
      <Text>
      Star count : {stargazers_count}
      </Text>
      <Text>
      Fork Count : {forks_count}
      </Text>
      <Text>
      language : {language}
      </Text>
      
    </Stack>
  </CardBody>
</Card>
  )
}

export default ProjectCard