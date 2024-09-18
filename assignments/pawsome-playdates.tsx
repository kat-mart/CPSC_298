import React, { useState } from 'react'
import { X, Heart, MessageCircle } from 'lucide-react'

// Types
type Dog = {
  id: number
  name: string
  breed: string
  age: number
  imageUrl: string
}

type Match = {
  id: number
  name: string
  imageUrl: string
}

// Mock data
const dogs: Dog[] = [
  { id: 1, name: 'Buddy', breed: 'Golden Retriever', age: 3, imageUrl: '/placeholder.svg?height=400&width=300' },
  { id: 2, name: 'Luna', breed: 'Labrador', age: 2, imageUrl: '/placeholder.svg?height=400&width=300' },
  { id: 3, name: 'Max', breed: 'German Shepherd', age: 4, imageUrl: '/placeholder.svg?height=400&width=300' },
  { id: 4, name: 'Bella', breed: 'Poodle', age: 1, imageUrl: '/placeholder.svg?height=400&width=300' },
]

const initialMatches: Match[] = [
  { id: 5, name: 'Charlie', imageUrl: '/placeholder.svg?height=50&width=50' },
  { id: 6, name: 'Daisy', imageUrl: '/placeholder.svg?height=50&width=50' },
]

// Components
const NavBar: React.FC = () => (
  <nav className="bg-primary text-primary-foreground p-4">
    <h1 className="text-2xl font-bold">Pawsome Playdates</h1>
  </nav>
)

const DogCard: React.FC<{ dog: Dog; onSwipe: (liked: boolean) => void }> = ({ dog, onSwipe }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src={dog.imageUrl} alt={dog.name} className="w-full h-64 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-semibold">{dog.name}, {dog.age}</h2>
      <p className="text-gray-600">{dog.breed}</p>
    </div>
    <div className="flex justify-between p-4 bg-gray-100">
      <button onClick={() => onSwipe(false)} className="bg-red-500 text-white p-2 rounded-full">
        <X size={24} />
      </button>
      <button onClick={() => onSwipe(true)} className="bg-green-500 text-white p-2 rounded-full">
        <Heart size={24} />
      </button>
    </div>
  </div>
)

const MatchesList: React.FC<{ matches: Match[] }> = ({ matches }) => (
  <div className="bg-white rounded-lg shadow-lg p-4">
    <h2 className="text-xl font-semibold mb-4">Your Matches</h2>
    <ul>
      {matches.map(match => (
        <li key={match.id} className="flex items-center mb-2">
          <img src={match.imageUrl} alt={match.name} className="w-10 h-10 rounded-full mr-2" />
          <span>{match.name}</span>
        </li>
      ))}
    </ul>
  </div>
)

// Main App Component
export default function PawsomePlaydates() {
  const [currentDogIndex, setCurrentDogIndex] = useState(0)
  const [matches, setMatches] = useState<Match[]>(initialMatches)

  const handleSwipe = (liked: boolean) => {
    if (liked) {
      const newMatch: Match = {
        id: dogs[currentDogIndex].id,
        name: dogs[currentDogIndex].name,
        imageUrl: dogs[currentDogIndex].imageUrl,
      }
      setMatches([...matches, newMatch])
    }
    setCurrentDogIndex(prevIndex => (prevIndex + 1) % dogs.length)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            {currentDogIndex < dogs.length && (
              <DogCard dog={dogs[currentDogIndex]} onSwipe={handleSwipe} />
            )}
          </div>
          <div>
            <MatchesList matches={matches} />
          </div>
        </div>
      </div>
    </div>
  )
}