import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import bg from '../../images/background.jpg';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './chat.css'

const theme = createTheme({
    typography: { fontFamily: ["Abril Fatface"]}
  });

const Chat = () => {

    return (  
 <body>
  <Container component="main" maxWidth="xs">
  <CssBaseline/>
  <Box
    // sx={{
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    // }}
  >
    <div class="contacts">
  <i class="fas fa-bars fa-2x"></i>
  <h2>
    Contacts
  </h2>
  <div class="contact">
    <div class="pic tola"></div>
    <div class="badge">
      14
    </div>
    <div class="name">
    Anatoliy Cherednichenko
    </div>
    <div class="message">
      That is America's ass 🇺🇸🍑
    </div>
  </div>
  <div class="contact">
    <div class="pic bui"></div>
    <div class="name">
      Tri Bui
    </div>
    <div class="message">
      Uh, he's from space, he came here to steal a necklace from a wizard.
    </div>
  </div>
  <div class="contact">
    <div class="pic lorena"></div>
    <div class="badge">
      1
    </div>
    <div class="name">
    Lorena Escobosa Alcantar
    </div>
    <div class="message">
      There's an Ant-Man *and* a Spider-Man?
    </div>
  </div>
  <div class="contact">
    <div class="pic aurum"></div>
    <div class="name">
      Aurum Tran
    </div>
    <div class="badge">
      3
    </div>
    <div class="message">
      I like this one
    </div>
  </div>
  {/* <div class="contact">
    <div class="pic danvers"></div>
    <div class="badge">
      2
    </div>
    <div class="name">
      Carol Danvers
    </div>
    <div class="message">
      Hey Peter Parker, you got something for me?
    </div>
  </div> */}
  </div>
  </Box>
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <div class="chat">
  <div class="contact bar">
    <div class="pic bui"></div>
    <div class="name">
      Tri Bui
    </div>
    <div class="seen">
      Today at 12:56
    </div>
  </div>
  <div class="messages" id="chat">
    <div class="time">
      Today at 11:41
    </div>
    <div class="message parker">
      Hey, man! What's up, Mr Stark? 👋
    </div>
    <div class="message stark">
      Kid, where'd you come from? 
    </div>
    <div class="message parker">
      Field trip! 🤣
    </div>
    <div class="message parker">
      Uh, what is this guy's problem, Mr. Stark? 🤔
    </div>
    <div class="message stark">
      Uh, he's from space, he came here to steal a necklace from a wizard.
    </div>
    <div class="message stark">
      <div class="typing typing-1"></div>
      <div class="typing typing-2"></div>
      <div class="typing typing-3"></div>
    </div>
  </div>
  <div class="input">
    <i class="fas fa-camera"></i><i class="far fa-laugh-beam"></i><input placeholder="Type your message here!" type="text" /><i class="fas fa-microphone"></i>
  </div>
  </div>
  </Box>
  
  </Container>
  
 </body>
    
);
} 


export default Chat;