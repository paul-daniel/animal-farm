import { useState, useEffect } from 'react'
import './App.css'
import Animal from './Animals';

interface AnimalObject {
  id: string;
  name: string;
  type: string;
  age :number;
  gender: string;
}

function App() {
  const [animalList, setAnimalList] = useState<AnimalObject[]>([])
  const [loading, setLoading] = useState(true)

  const search = async (animalType : string) => {
    setLoading(true)
    window.localStorage.setItem('lastQuery', animalType)
    const response = await fetch(`http://localhost:3000/animals?` + new URLSearchParams({ q: animalType }))
    const data = await response.json()
    setAnimalList(data)
    setLoading(false)
  }

  useEffect(()=>{
    const lastQuery = window.localStorage.getItem('lastQuery') ?? ''
    search(lastQuery)
  },[])

  return (
    <>

      <div>
        <input type='text' defaultValue={window.localStorage.getItem('lastQuery') ?? ''} onChange={(e)=>search(e.target.value)} />
        {loading? <p>Loading...</p> :
        animalList.length > 0 ?
          <ul>
            {animalList.map((animal) => 
              <Animal key={animal.id} {...animal}  />
            )}
          </ul>
        :
        <p>No animals found</p>
        }
      </div>
    </>
  )
}

export default App
