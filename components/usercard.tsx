import { StyleSheet, View, Text, Image } from "react-native";

interface UserCardProps {
  username: string;
  imageSource: string;
}

export default function UserCard({ username, imageSource }: UserCardProps) {
  return (
    <View style={styles.card}>
      <Image style={styles.userImage} source={{ uri: imageSource }} />
      <Text style={styles.userName}>{username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "80%",
    padding: 16,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    backgroundColor: "lightgray",
  },

  userImage: {
    width: 100,
    height: 100,
    borderRadius: 16,
    resizeMode: "cover",
  },

  userName: {
    fontSize: 18,
  },
});
