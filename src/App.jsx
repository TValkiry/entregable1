import './App.css'
import phrases from './data/phrase.json'
import PhraseBox from './components/PhraseBox'
import { useState } from 'react'


const listBg = ['bg1', 'bg2', 'bg3', 'bg4']


function App() {
  
  const getRandom = (list) => {
    const randomIndex = Math.floor(Math.random() * list.length)
    return list[randomIndex]
  }

  const [phrase, setPhrase] = useState(getRandom(phrases))

  const [currentBg, setcurrentBg] = useState(getRandom(listBg))

  const handleChangePhrase = () => {
    setPhrase(getRandom(phrases));
    setcurrentBg(getRandom(listBg))

  }



  return (

    <main className= {`App ${currentBg}`}>

      <PhraseBox handleChangePhrase ={handleChangePhrase} phrase={phrase} />
    


      
    </main>
  )
}

export default App
