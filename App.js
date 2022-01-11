import { SafeAreaView, Text, View } from 'react-native';

import Login from "./screens/Login";
import Register from "./screens/Register";

export default function App() {
  return (
    <SafeAreaView>
      <Login />
      {/* <Register /> */}
    </SafeAreaView>
  );
}
