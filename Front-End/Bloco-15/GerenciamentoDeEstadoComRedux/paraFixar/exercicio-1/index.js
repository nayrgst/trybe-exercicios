const Redux = require('redux');
const fazerLogin = (email) => ({
  type: 'LOGIN',
  email
});

const estadoInicial = {
  login: false,
  email: "",
};

const reducer = (state = estadoInicial, action) => {
  switch (action.type) {
    case "LOGIN":
      return { 
        ...state,
        login: !state.login,
        email: action.email,
      };
      default:
      return state;
  };
  
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin("alguem@mail.com"));

console.log(store.getState());