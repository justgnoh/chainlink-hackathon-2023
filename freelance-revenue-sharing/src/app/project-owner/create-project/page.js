"use client";
import NavBar from '@/components/NavBar'
import React from 'react'
import { FormControl, FormLabel, Input, Textarea, Select, Button, Grid, GridItem } from "@chakra-ui/react";

function CreateProject() {
    const handleSubmit = (event) => {
      console.log("Submitted!")
      event.preventDefault();
        // Handle form submission logic here
        };

  return (
    <div>
        <NavBar/>
        <div className='mx-20 mt-10'>
        <form onSubmit={handleSubmit}>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Project Title</FormLabel>
              <Input type="text" placeholder="Enter project title" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Project Description</FormLabel>
              <Textarea placeholder="Enter project description" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Key Deliverables</FormLabel>
              <Textarea placeholder="Enter key deliverables" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Start Date</FormLabel>
              <Input type="date" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>End Date</FormLabel>
              <Input type="date" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Payment Plan</FormLabel>
              <Select placeholder="Select payment plan">
                <option value="interval">Payment Interval</option>
                <option value="bulk">Bulk Payment</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <Button type="submit" colorScheme="teal" variant="outline">Submit</Button>
          </GridItem>
        </Grid>
      </form>
        </div>
    </div>
  )
}

export default CreateProject