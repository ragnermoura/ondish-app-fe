import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default ({ route }) => {
  const { sala, salaInfo } = route.params;

  const navigation = useNavigation();

  const handleYes = () => {
    navigation.reset({
      routes: [
        {
          name: "MainTab",
          state: {
            routes: [
              {
                name: "OrderInTheRestaurant",
                params: {
                  id: 1,
                  sala: sala,
                  salaInfo: salaInfo,
                },
              },
            ],
          },
        },
      ],
    });
  };

  const handleNot = () => {
    navigation.reset({
      routes: [{ name: "MainTab" }],
    });
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
