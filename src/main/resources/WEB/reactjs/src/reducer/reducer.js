import * as actionTypes from '../store/actionTypes'

const initialState = {
  dossiers: [
    {id: 1, title: 'post 1', body: 'Quisque cursus, metus vitae pharetra'},
    {id: 2, title: 'post 2', body: 'Quisque cursus, metus vitae pharetra'},
  ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_DOSSIER:
      const newDossier = {
        id: Math.floor(Math.random() * 100),
        title: action.dossier.title,
        body: action.dossier.body,
      }
      return {
        ...state,
        dossiers: state.dossiers.concat(newDossier),
      } 
    case actionTypes.REMOVE_DOSSIER:
      return {
        ...state,
        dossiers: state.dossiers.filter(item => item.id !== action.id)
      }
    default:
      return state;
  }  
}

export default reducer