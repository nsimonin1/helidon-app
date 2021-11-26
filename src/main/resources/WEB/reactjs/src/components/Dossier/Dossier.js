import React from "react"
import './Dossier.css'

const dossier = ({ dossier, removeDossier }) => {
  const deleteDossier = () => {
    removeDossier(dossier.id)
  }
  return (
  <div className="dossier">
    <h1>{dossier.title}</h1>
    <p>{dossier.body} <span onClick={deleteDossier}  className='close'>X</span></p>    
  </div>
)}

export default dossier