# A Simple Messenger App

## Overview:

This is a simple messenger app for multiple people to join and chat in a chatroom. I decided to use socket.io to achieve the real-time communication needed for a chat app. I also chose to use React as my framework, after two years of working in Angular, to better align with Guild's current tech stack.

## Getting Started:

These instructions will get a copy of the project up and running on your local machine for usage and testing purposes. You'll need to run both the React front-end and server separately.

1. Clone the repo: ``` git clone https://github.com/jessicalyn/messenger-app.git```

2. cd into directory and run npm install: ``` npm install```

3. cd into messenger to launch the front-end: ``` npm start ```

4. Open a new terminal window and cd into server to start the server: ``` npm start ```

5. Open your browser and navigate to ``` localhost:3000 ```

6. To view as another user, open another browser tab to ``` localhost:3000 ```

## Site Functionality

### User Login

Users will be prompted to login before joining the chatroom. They will need to enter their name to proceed.

### Chatroom

Users can write messages and send to the other users in the chatroom. The name of the user who sent the chat will be appended to the beginning of the message.

## Known Bugs/Things to Fix:
- Require text/a name to login input. Currently user can enter an empty string and their name will display as blank.
- Definitely need to add testing.
- Messages will overflow out of chatroom container. Need to add scrolling.
- Need to add error handling and messaging to the user.
- Improve styling :)

## Future Development and Extensions Notes:
- Add timestamp to messages.
- Add color shading to differentiate message threads, for easier readibility.
- Deploy to Heroku, etc so users do not need to start FE and BE in order to use chat app.

### Technologies Used
This app was built using:
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Socket.io](https://socket.io/)

## Credits
Credit for this project goes to:
- [Jessica Hansen](https://github.com/jessicalyn)
