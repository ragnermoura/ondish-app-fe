export const initialState = {
  avatar: "",
  email: "",
  nome: "",
  apelido: "",
  senha: "",
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case "setUser":
      return {
        ...state,
        email: action.payload.email,
        nome: action.payload.nome,
        apelido: action.payload.apelido,
        senha: action.payload.senha,
      };
    default:
      return state;
  }
};
