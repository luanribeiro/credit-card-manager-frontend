export const state = () => ({ 
  userLogged : null,
}); 

export const mutations = { 
  SET_USERLOGGED(state, userLogged) { 
    state.userLogged = userLogged; 
  } 
}; 

export const actions = { 
  setUserlogged({ commit }, userLogged) { 
    commit('SET_USERLOGGED', userLogged); 
  },
}; 
