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
          avatar: "default",
          id_nivel: 3,
          id_status: 1,
          telefone: telefoneField,
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

  sendCodeRes: async (id) => {
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
      const response = await http.get(`/bebidas/buscar/${id}`, {
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

  sendConvidado: async (arrayConvidados, id_anfitriao) => {
    console.log(arrayConvidados);
    arrayConvidados.map(async (c) => {
      try {
        const response = await http.post(
          `/sala/nova-sala`,
          {
            id_usuario_anfitriao: id_anfitriao,
            id_usuario_convidado: c.id_user,
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
    });
  },
};
