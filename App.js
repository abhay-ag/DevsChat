import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { useState } from "react";
import Home from "./components/Home";

const getFonts = () => Font.loadAsync({
  Dancing_Script: require('./assets/fonts/Courgette.ttf')
})

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  if (fontsLoaded) {
    return(<Home />)
  }
  else {
    return <AppLoading 
      startAsync={getFonts}
      onFinish = {() => setFontsLoaded(true)}
      onError = {() => console.warn("")}
    />;
  }
}