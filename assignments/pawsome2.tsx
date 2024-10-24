'use client'

import React, { useState } from 'react'
import { X, Heart, MessageCircle, Calendar, MapPin, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

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
  posts: string[]
}

type Playdate = {
  id: number
  hostId: number
  hostName: string
  location: string
  date: string
  description: string
}

// Mock data
const dogs: Dog[] = [
  { id: 1, name: 'Buddy', breed: 'Golden Retriever', age: 3, imageUrl: 'https://picsum.photos/seed/dog1/400/300' },
  { id: 2, name: 'Luna', breed: 'Labrador', age: 2, imageUrl: 'https://picsum.photos/seed/dog2/400/300' },
  { id: 3, name: 'Max', breed: 'German Shepherd', age: 4, imageUrl: 'https://picsum.photos/seed/dog3/400/300' },
  { id: 4, name: 'Bella', breed: 'Poodle', age: 1, imageUrl: 'https://picsum.photos/seed/dog4/400/300' },
]

const initialMatches: Match[] = [
  { 
    id: 5, 
    name: 'Charlie', 
    imageUrl: 'https://picsum.photos/seed/match1/50/50', 
    posts: [
      'https://picsum.photos/seed/post1/200/200', 
      'https://picsum.photos/seed/post2/200/200'
    ] 
  },
  { 
    id: 6, 
    name: 'Daisy', 
    imageUrl: 'https://picsum.photos/seed/match2/50/50', 
    posts: [
      'https://picsum.photos/seed/post3/200/200'
    ] 
  },
]

const initialPlaydates: Playdate[] = [
  { id: 1, hostId: 5, hostName: 'Charlie', location: 'Central Park', date: '2023-07-15', description: 'Fun in the sun!' },
  { id: 2, hostId: 6, hostName: 'Daisy', location: 'Dog Beach', date: '2023-07-20', description: 'Beach day for pups!' },
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

const PlaydatesList: React.FC<{ playdates: Playdate[] }> = ({ playdates }) => (
  <div className="bg-white rounded-lg shadow-lg p-4 mt-4">
    <h2 className="text-xl font-semibold mb-4">Nearby Playdates</h2>
    <ul>
      {playdates.map(playdate => (
        <li key={playdate.id} className="mb-4 p-2 border rounded">
          <div className="flex items-center mb-2">
            <Calendar className="mr-2" size={16} />
            <span>{playdate.date}</span>
          </div>
          <div className="flex items-center mb-2">
            <MapPin className="mr-2" size={16} />
            <span>{playdate.location}</span>
          </div>
          <p className="text-sm text-gray-600">{playdate.description}</p>
          <p className="text-sm font-semibold mt-2">Hosted by: {playdate.hostName}</p>
        </li>
      ))}
    </ul>
  </div>
)

const MatchPosts: React.FC<{ matches: Match[] }> = ({ matches }) => (
  <div className="bg-white rounded-lg shadow-lg p-4 mt-4">
    <h2 className="text-xl font-semibold mb-4">Match Posts</h2>
    <div className="grid grid-cols-2 gap-4">
      {matches.flatMap(match => 
        match.posts.map((post, index) => (
          <div key={`${match.id}-${index}`} className="relative">
            <img src={post} alt={`Post by ${match.name}`} className="w-full h-40 object-cover rounded" />
            <span className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
              {match.name}
            </span>
          </div>
        ))
      )}
    </div>
  </div>
)

const CreatePlaydateDialog: React.FC<{ onCreatePlaydate: (playdate: Omit<Playdate, 'id'>) => void }> = ({ onCreatePlaydate }) => {
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onCreatePlaydate({
      hostId: 1, // Assuming the current user's ID is 1
      hostName: 'You', // Assuming the current user's name
      location,
      date,
      description
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-4">
          <Plus className="mr-2 h-4 w-4" /> Host a Playdate
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Host a Playdate</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <Textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <Button type="submit">Create Playdate</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

// Main App Component
export default function PawsomePlaydates() {
  const [currentDogIndex, setCurrentDogIndex] = useState(0)
  const [matches, setMatches] = useState<Match[]>(initialMatches)
  const [playdates, setPlaydates] = useState<Playdate[]>(initialPlaydates)

  const handleSwipe = (liked: boolean) => {
    if (liked) {
      const newMatch: Match = {
        id: dogs[currentDogIndex].id,
        name: dogs[currentDogIndex].name,
        imageUrl: dogs[currentDogIndex].imageUrl,
        posts: []
      }
      setMatches([...matches, newMatch])
    }
    setCurrentDogIndex(prevIndex => (prevIndex + 1) % dogs.length)
  }

  const handleCreatePlaydate = (newPlaydate: Omit<Playdate, 'id'>) => {
    const playdateWithId = { ...newPlaydate, id: playdates.length + 1 }
    setPlaydates([...playdates, playdateWithId])
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
            <MatchPosts matches={matches} />
          </div>
          <div>
            <MatchesList matches={matches} />
            <PlaydatesList playdates={playdates} />
            <CreatePlaydateDialog onCreatePlaydate={handleCreatePlaydate} />
          </div>
        </div>
      </div>
    </div>
  )
}