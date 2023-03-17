import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Cafe from "./src/components/Cafe";
import FlatListBasics from "./src/components/FlatListBasics";
import LotsOfStyles from "./src/components/LotsOfStyles";

// const YourApp = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Try editing me! 🎉</Text>
//     </View>
//   );
// };

// export default YourApp;

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <Cafe /> */}
      {/* <FlatListBasics /> */}
      <LotsOfStyles />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
