import React from "react"
import { connect } from "react-redux"

import Dossier from '../components/Dossier/Dossier'
import AddDossier from '../components/AddDossier/AddDossier'
import { removeDossier, simulateHttpRequest } from '../store/actionCreator'



const Dossiers = ({ dossiers, saveDossier, removeDossier }) => { 


  return (
    <div>
      <AddDossier saveDossier={saveDossier} />
      {dossiers.map(dossier => (
        <Dossier key={dossier.id} dossier={dossier} removeDossier={removeDossier} />
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
    removeDossier: id => dispatch(removeDossier(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dossiers)
