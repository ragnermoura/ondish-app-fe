import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Btn from "../../components/buttons/mainButton";
import { useNavigation } from "@react-navigation/native";
import { http } from "../../../services/config";
import api from "../../../services/auth/index";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    // navigation.navigate(
    //   "MainTab",
    //   { screen: "OrderInTheRestaurant" },
    //   { id: data }
    // );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // provisorio para facilitar o desenvolvimento
  setTimeout(() => {
    navigation.navigate("MainTab", {
      screen: "OrderInTheRestaurant",
      params: { id: 2 },
    });
  }, 3000);

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Ler o código QR :)</Text>
        <Text style={styles.description}>
          Leia o código QR para poder pedir na sua mesa
        </Text>
      </View>
      <View style={styles.qrMarkerContainer}>
        <View style={styles.qrMarker}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            // style={StyleSheet.absoluteFill}
            style={styles.barcodeScanner}
          />
        </View>
      </View>
      {scanned && (
        <Btn title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   width: 350,
  //   height: 350,
  //   borderRadius: 20,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   alignSelf: "center",
  //   marginTop: "auto",
  //   marginBottom: "auto",
  // },

  container: {
    position: "absolute",
    top: "-20%",
    bottom: 0,
    right: 0,
    left: 0,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  overlay: {
    position: "absolute",
    top: "30%",
    left: 0,
    right: 0,
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    color: "#cccccc",
  },

  qrMarkerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  barcodeScanner: {
    height: 140,
    width: 230,
  },

  qrMarker: {
    width: 230,
    height: 140,
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },

  button: {
    marginTop: 40,
  },
});
