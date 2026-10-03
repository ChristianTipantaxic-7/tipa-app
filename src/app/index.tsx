import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.nombre}>Christian Tipantaxi</Text>
      <Text style={styles.curso}>
        3ro de Bachillerato Técnico - Informática
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#87CEEB",
  },

  nombre: {
    fontSize: 28,
    fontWeight: "bold",
  },

  curso: {
    fontSize: 18,
    marginTop: 10,
  },
});