import { View, StyleSheet, Pressable, Text } from "react-native";
import { useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();

  return (
      <View style={styles.container}>
        <Pressable
            style={styles.linkContainer}
            onPress={() =>
                router.navigate({
                  pathname: "/user/[id]",
                  params: { id: "123" },
                })
            }
        >
          <Text style={styles.linkText}>View John Doe</Text>
        </Pressable>
        <Pressable
            style={styles.linkContainer}
            onPress={() =>
                router.navigate({
                  pathname: "/user/[id]",
                  params: { id: "456" },
                })
            }
        >
          <Text style={styles.linkText}>View Jane Smith</Text>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  linkContainer: {
    backgroundColor: "#007bff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  linkText: {
    color: "#fff",
    fontSize: 18,
  },
});
