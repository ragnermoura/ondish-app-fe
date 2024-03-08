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


    register: async (emailField, passwordField, nomeField, apelidoField) => {
        try {
            const response = await http.post(
                "/usuario/cadastrar",
                {
                    nome: nomeField,
                    sobrenome: apelidoField,
                    email: emailField,
                    senha: passwordField,
                    avatar: '...',
                    id_nivel: 2,
                    id_status: 1,

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
}
