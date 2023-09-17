import logo from "./logo.svg";
import "./App.css";
import MyAccordion from "./Components/MyAccordion";
import MyAccordion2 from "./Components/MyAccordion2";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import MyAccordion1 from "./Components/MyAccordion1";
import MyBox from "./Components/MyBox";
import React, { useState } from 'react';


export default function App() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  return (
    <Container
      maxWidth="sm"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      {/* <MyAccordion /> */}

      <Stack spacing={2}>
        <MyAccordion1 />
        <MyAccordion2 onSwitchChange={setIsSwitchOn} />
        <MyBox isSwitchOn={isSwitchOn} />
        




        {/* <MyBox/> */}
      </Stack>
    </Container>

    
  );
}
