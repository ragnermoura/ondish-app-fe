import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import api from "../../../services/auth/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default ({ route }) => {
  const { sala, salaInfo } = route.params;
  // console.log(sala, salaInfo);

  const navigation = useNavigation();

  const handleYes = () => {
    const getObject = async (key) => {
      try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (error) {
        console.error("Error retrieving object", error);
      }
      return null;
    };
    getObject("perfil").then((perfil) =>
      api.aceiteConvite(sala, perfil.perfil.id_user, "Aceito").then((res) => {
        if (res.status == 200) {
          console.log(res.data);

          api.getTable(res.data.convite.id_restaurante).then((response) => {
            console.log(response);
            if (response.status == 200) {
              response.data.map((table) => {
                console.log(table);
                if (table.numero == res.data.convite.numero_mesa) {
                  navigation.reset({
                    routes: [
                      {
                        name: "MainTab",
                        state: {
                          routes: [
                            {
                              name: "OrderInTheRestaurant",
                              params: {
                                id: res.data.convite.id_restaurante,
                                sala: sala,
                                salaInfo: salaInfo,
                                table: table,
                              },
                            },
                          ],
                        },
                      },
                    ],
                  });
                }
              });
            }
          });
        }
      })
    );
  };

  const handleNot = () => {
    const getObject = async (key) => {
      try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (error) {
        console.error("Error retrieving object", error);
      }
      return null;
    };
    getObject("perfil").then((perfil) =>
      api.aceiteConvite(sala, perfil.perfil.id_user, "Recusado").then((res) => {
        if (res.status == 200) {
          navigation.reset({
            routes: [{ name: "MainTab" }],
          });
        }
      })
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 40 }}>
        Você foi convidado!
      </Text>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#ed2024",
            width: "40%",
            height: 50,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => handleYes()}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            Sim
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#ed2024",
            width: "40%",
            height: 50,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => handleNot()}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            Não
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
