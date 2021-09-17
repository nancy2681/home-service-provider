import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Asdf from "./login";
import Ghjk from "./signup";
import dflt from "./default";
import Xyz from "./home";
import Mno from "./job";
import Pqr from "./Settings";
import Providers from "./providers";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDpBunY8x02OEtedDsl40ma6g6IGtbzgNI",
  databaseURL: "https://myapp-a3677-default-rtdb.firebaseio.com/",
  authDomain: "myapp-a3677.firebaseapp.com",
  projectId: "myapp-a3677",
  storageBucket: "myapp-a3677.appspot.com",
  messagingSenderId: "572241790748",
  appId: "1:572241790748:web:6d0c15673b2f2d03d79cd9",
  measurementId: "G-T1KLKD62CG",
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
export default createAppContainer(
  createSwitchNavigator(
    { dflt, Asdf, Ghjk, Xyz, Mno, Pqr, Providers },
    {
      initialRouteName: "Ghjk",
    }
  )
);
