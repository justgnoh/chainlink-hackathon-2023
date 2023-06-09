"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

function createProject() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center h-screen  gap-4">
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://images.unsplash.com/photo-1523837157348-ffbdaccfc7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2673&q=80"
          alt="Create Project"
        />

        <Stack>
          <CardBody>
            <Heading size="md">Start creating your project</Heading>

            <Text py="2">
              Kickstart your project today
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid">
              <Link href="project-owner/create-project">Get started</Link>
            </Button>
          </CardFooter>
        </Stack>
      </Card>

      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Create Project"
        />

        <Stack>
          <CardBody>
            <Heading size="md">View existing projects</Heading>
            <Text py="2">
              Check out other projects
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="gray">
              <Link href="view-projects">View Projects</Link>
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      </div>
      
    </div>
  );
}

export default createProject;
