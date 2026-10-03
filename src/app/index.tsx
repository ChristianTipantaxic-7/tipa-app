import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>

      {/* Decoración del fondo */}
      <View style={styles.circleTop} />
      <View style={styles.circleBottom} />

      {/* Tarjeta principal */}
      <View style={styles.card}>

        {/* Avatar */}
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>CT</Text>
        </View>

        {/* Título */}
        <Text style={styles.welcome}>¡Bienvenido!</Text>

        <Text style={styles.name}>Christian Tipantaxi</Text>

        <Text style={styles.course}>
          3ro de Bachillerato Técnico
        </Text>

        <Text style={styles.specialty}>
          💻 Informática
        </Text>

        {/* Separador */}
        <View style={styles.line} />

        {/* Información */}
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>🚀 Semana 05</Text>
          <Text style={styles.infoText}>
            Expo + React Native + Expo Router
          </Text>
        </View>

        {/* Botón */}
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>✨ Mi proyecto</Text>
        </Pressable>

        <Text style={styles.footer}>
          Desarrollando con React Native
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  circleTop: {
    position: "absolute",
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "#2563EB",
    top: -100,
    right: -80,
    opacity: 0.5,
  },

  circleBottom: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "#7C3AED",
    bottom: -100,
    left: -80,
    opacity: 0.5,
  },

  card: {
    width: "88%",
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 28,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 15,

    elevation: 10,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
  },

  welcome: {
    fontSize: 16,
    color: "#64748B",
    marginBottom: 5,
  },

  name: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#0F172A",
    textAlign: "center",
  },

  course: {
    fontSize: 17,
    color: "#475569",
    marginTop: 10,
    textAlign: "center",
  },

  specialty: {
    fontSize: 17,
    color: "#2563EB",
    fontWeight: "600",
    marginTop: 5,
  },

  line: {
    width: "80%",
    height: 1,
    backgroundColor: "#E2E8F0",
    marginVertical: 22,
  },

  infoBox: {
    width: "100%",
    backgroundColor: "#EFF6FF",
    borderRadius: 18,
    padding: 18,
    alignItems: "center",
  },

  infoTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#1D4ED8",
  },

  infoText: {
    fontSize: 14,
    color: "#475569",
    marginTop: 6,
    textAlign: "center",
  },

  button: {
    width: "100%",
    backgroundColor: "#2563EB",
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 18,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },

  footer: {
    marginTop: 18,
    fontSize: 13,
    color: "#94A3B8",
  },
});