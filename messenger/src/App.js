import './App.css';
import io from 'socket.io-client';


function App() {
  const socket = io('http://localhost:3001', {
    withCredentials: true
  });
socket.on('connection', () => {
  console.log('FE connected to BE')
})
socket.emit('chat message', 'Test Message')

return (
  <div>
  Hello World
  </div>
  );
}

export default App;
