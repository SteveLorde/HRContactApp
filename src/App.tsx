import './App.css';
import {GoToClientAPI} from "./Services/GoToClientAPI/GoToClientAPI.ts";
import Dialer from "./Components/Dialer/Dialer.tsx";

export default function App() {

  const gotoClient = new GoToClientAPI();

  return <>
    {/*Contacts List*/}
    <section>

    </section>
    <Dialer gotoClientAPI={gotoClient} />

  </>;

}
