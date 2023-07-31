import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

    return (
      <ChatEngine
        height="100vh"
        projectID="0026857c-0fa9-4c2b-9d30-246782ce3c57"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        // onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    );
  }
  
  // infinite scroll, logout, more customizations...
  
  export default App;
