import React from "react"
import './Dossier.css'

const dossier = ({ dossier }) => (
  <div className="dossier">
    <h1>{dossier.title}</h1>
    <p>{dossier.body}</p>
  </div>
)

export default dossier