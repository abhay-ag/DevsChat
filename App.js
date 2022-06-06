import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { useState } from "react";
import Routes from './routes/Routes'

const getFonts = () => Font.loadAsync({
  Dancing_Script: require('./assets/fonts/Courgette.ttf')
})

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  if (fontsLoaded) {
    return (<Routes />)
  }
  else {
    return <AppLoading 
      startAsync={getFonts}
      onFinish = {() => setFontsLoaded(true)}
      onError = {() => console.warn("")}
    />;
  }
}