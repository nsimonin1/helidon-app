import React from "react"
import { connect } from "react-redux"

import Dossier from '../components/Dossier/Dossier'
import AddDossier from '../components/AddDossier/AddDossier'
import { simulateHttpRequest } from '../store/actionCreator'



const Dossiers = ({ dossiers, saveDossier }) => { 


  return (
    <div>
      <AddDossier saveDossier={saveDossier} />
      {dossiers.map(dossier => (
        <Dossier key={dossier.id} dossier={dossier} />
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    dossiers: state.dossiers,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveDossier: dossier => dispatch(simulateHttpRequest(dossier)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dossiers)
