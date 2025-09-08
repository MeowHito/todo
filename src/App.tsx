import { useState } from "react";
import "./App.css";
import Buttonadd from "./components/Buttonadd";
import Buttondecrement from "./components/Buttondecrement";
import Textsize from "./components/Textsize";
import HeaderText from "./components/Header";
import Member from "./components/Member";
export default function App() {
  const [fontSize, setFontSize] = useState(16);

  return (
    <>
      <Member group="BUS" />

      <HeaderText title="CSMJU" sizeTxt={120} status={true} />
      <HeaderText title="Computer Science" sizeTxt={180} status={false} />
      <Buttonadd setFontSize={setFontSize} />
      <Buttondecrement setFontSize={setFontSize} />
      <Textsize fontSize={fontSize} />
    </>
  );
}