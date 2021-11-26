import React, { useState } from "react"
import Dossier from '../components/Dossier/Dossier'
import AddDossier from '../components/AddDossier/AddDossier'


const Dossiers = () => {
  const [dossiers, setDossiers] = useState([
    {id: 1, title: 'post 1', body: 'Quisque cursus, metus vitae pharetra'},
    {id: 2, title: 'post 2', body: 'Quisque cursus, metus vitae pharetra'},
  ])

  const saveDossier = e => {
    //e.preventDefault()
    setDossiers([...dossiers, e])

  }

  return (
    <div>
      <AddDossier saveDossier={saveDossier} />
      {dossiers.map(dossier => (
        <Dossier key={dossier.id} dossier={dossier} />
      ))}
    </div>
  )
}

export default Dossiers