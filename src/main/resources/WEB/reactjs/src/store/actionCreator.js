import * as actionTypes from './actionTypes'

export const addDossier = dossier => {
  return {
    type: actionTypes.ADD_DOSSIER,
    dossier,
  }
}

export const removeDossier = id => {
  return {
    type: actionTypes.REMOVE_DOSSIER,
    id,
  }
}

export const simulateHttpRequest = dossier => {
  return dispatch => {
    setTimeout(() => {
      dispatch(addDossier(dossier))
    }, 3000)
  }
}