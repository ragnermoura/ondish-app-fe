import axios from "axios";
import { http } from "../config";

export default {
  login: async (youEmail, youPass) => {
    try {
      const response = await http.post(
        "/login",
        {
          email: youEmail,
          senha: youPass,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      );
      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  register: async (
    emailField,
    passwordField,
    nomeField,
    apelidoField,
    telefoneField
  ) => {
    try {
      const response = await http.post(
        "/usuario/cadastrar",
        {
          nome: nomeField,
          sobrenome: apelidoField,
          email: emailField,
          senha: passwordField,
          avatar: "default-avatar.png",
          // id_nivel: 3,
          // id_status: 1,
          // telefone: telefoneField,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  getPerfil: async () => {
    try {
      const response = await http.get("/usuario", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });
      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  sendNewCont: async (nomeField, emailField) => {
    try {
      const response = await http.post(
        "/send/nova-conta",
        {
          nome: nomeField,
          email: emailField,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      );
      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  perfil: async (nomeField, emailField) => {
    try {
      const response = await http.post(
        "/perfil/cadastro",
        {
          nome: nomeField,
          email: emailField,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      );
      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  sendCode: async (idUser, telefoneField) => {
    try {
      const response = await http.post(
        `/email/user/${idUser}`,
        {
          telefone: telefoneField,
          email: emailField,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      );
      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  getRestaurant: async (id) => {
    try {
      const response = await http.get(`/restaurante/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });
      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  getPlates: async (id) => {
    try {
      const response = await http.get(`/prato/buscar/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });
      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  getBebida: async (id) => {
    try {
      const response = await http.get(`/bebidas/restaurante/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });
      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  sendValidationCode: async (id, code) => {
    try {
      const response = await http.post(
        `/usuario/verifica-code`,
        {
          id_user: id,
          code: code,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      );
      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  sendValidationCodeEmail: async (code) => {
    try {
      const response = await http.post(
        `/`,
        {
          code: code,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      );
      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  getSala: async () => {
    try {
      const response = await http.get(`/`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });
      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  sendConvidado: async (
    arrayConvidados,
    id_anfitriao,
    eventName,
    id_restaurant
  ) => {
    console.log(arrayConvidados);
    try {
      const response = await http.post(
        `/sala/nova-sala`,
        {
          id_usuario_anfitriao: id_anfitriao,
          status: "aberta",
          convidados: arrayConvidados.map((convidado) => {
            return {
              id_usuario_convidado: convidado.id_user,
              status: "pendente",
            };
          }),
          nome_sala: eventName,
          id_restaurante: id_restaurant,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      );
      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  getUsers: async () => {
    try {
      const response = await http.get(`/usuario`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });
      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  verificaConvidado: async (id) => {
    try {
      const response = await http.get(`/sala/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });
      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  cancelSala: async (id) => {
    try {
      const response = await http.delete(`/sala/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE",
        },
      });
      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  getTable: async (id) => {
    try {
      const response = await http.get(`/mesa/restaurante/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });
      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },
};
