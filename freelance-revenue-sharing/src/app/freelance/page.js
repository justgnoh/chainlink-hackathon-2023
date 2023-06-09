"use client"
import NavBar from '@/components/NavBar'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Button } from '@chakra-ui/react'

function FreelancerHomePage() {
  return (
    <div>
      <NavBar/>
      <div className="flex justify-center items-center h-screen gap-4">
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(500px, 1fr))'>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
</SimpleGrid>
      </div>

    </div>
  )
}

export default FreelancerHomePage