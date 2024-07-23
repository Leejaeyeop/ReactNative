import { View, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ThemedView style={{ flex: 1, padding: 24 }}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">ToDo App</ThemedText>
      </ThemedView>
      <ThemedView style={styles.mainContainer}>
        <ThemedView>
          <ThemedText type="title">할 일</ThemedText>
        </ThemedView>
        <ThemedView>
          <ThemedText type="title">완료된 일</ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    paddingTop: 16,
  },
  mainContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 24,
    flex: 1,
  },
});
