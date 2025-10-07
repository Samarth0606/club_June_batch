import React from 'react'
import EmployeeCard from './components/ EmployeeCard'
import Cartoon from './components/Cartoon'
import Vegetables from './components/Vegetables'
import Bouquet from './components/Bouquet'
import Effect from './components/Effect'

function App() {

  const cartoons = [
      {
        id: 1,
        name: 'Mickey Mouse',
        superpower: 'Invisibility',
        magnitude: 1
      },
      {
        id: 2,
        name: 'Spongebob Squarepants',
        superpower: 'Super Strength',
        magnitude: 3
      },
      {
        id: 3,
        name: 'Bugs Bunny',
        superpower: 'Teleportation',
        magnitude: 9
      },
      {
        id: 4,
        name: 'Tom and Jerry',
        superpower: 'Intelligence',
        magnitude: 8
      },
      {
        id: 5,
        name: 'The Powerpuff Girls',
        superpower: 'Flight',
        magnitude: 10
      }
  ]
  const vegetables = [
    {
      id: 1,
      name: 'Carrots',
      pickDate: '2023-03-25',
    },
    {
      id: 2,
      name: 'Broccoli',
      pickDate: '2023-03-30',
    },
    {
      id: 3,
      name: 'Peppers',
      pickDate: '2023-03-25',
    },
    {
      id: 4,
      name: 'Tomatoes',
      pickDate: '2023-03-27',
    },
    {
      id: 5,
      name: 'Ladies Finger',
      pickDate: '2023-03-30',
    },
  ]

  const bouquet = [
    {
      id: 1,
      flowers: ['rose', 'lily', 'marigold'],
      totalFlowers: 9,
      price: 1400,
    },
    {
      id: 2,
      flowers: ['snapdragon', 'sunflower'],
      totalFlowers: 10,
      price: 3400,
    },
  ]

  return (
    <div>
      {/* <EmployeeCard name="Sam" desig="mentor" exp={5}/>
      <Cartoon cartoons={cartoons} />
      <Vegetables vegetables={vegetables} />
      <Bouquet bouquet={bouquet} /> */}
      <Effect />
    </div>
  )
}

export default App