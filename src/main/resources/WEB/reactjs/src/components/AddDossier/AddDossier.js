import React, { useState } from 'react'
import './AddDossier.css'

const AddDossier = ({ saveDossier }) => {
  const [dossier, setDossier] = useState()

  const handleDossierData = e => {
    setDossier({
      ...dossier,
      [e.target.id]: e.target.value,
    })
  }

  const addNewDossier = e => {
    e.preventDefault()   
    dossier.id = Math.floor(Math.random() * 11)
    setDossier(dossier)
    saveDossier(dossier)
  }

  return (
    <form onSubmit={addNewDossier} className='add-dossier'>
      <input
        type='text' 
        id='title'
        placeholder='Title'
        onChange={handleDossierData}/>
        <input
        type='text' 
        id='body'
        placeholder='Body'
        onChange={handleDossierData}/>

        <button>Add dossier</button>
    </form>
  )
}

export default AddDossier
