import { Server } from "./server.js"
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import * as net from 'node:net'

/*const net = require('node:net');
const readline = require('readline/promises');
const { stdin: input, stdout: output, exit, removeAllListeners } = require('process');*/

let myUserName = ''
let myServer = ''

const rl = readline.createInterface({ input, output });

const client = net.createConnection({
    port: 8080,
})

client.on('data', (data) => {
    console.log(`Message recieved from server: ${data}`);
})

const createUser = async () => {
    let userName = await rl.question('Choose username: ')
    let serverChoice = await rl.question('Choose server: ')
    let checkName = await checkUserName(userName)
    if(checkName == true) {
        userList.push({userPort: `${serverChoice}`, userName: `${userName}`})
        myUserName = userName
        myServer = serverChoice
    } else {
        console.log("Username already exicst. try again!")
    }
}

const checkUserName = async (userName) => {
    checkMyName = true
    
    for(let i = 0; i < userList.length; i++) {
        if(userList[i].userName == userName) {
            checkMyName = false
            return false
        }
    }

    return true
}

const sendMessage = async (message, userName, myServers) => {
    for(let i = 0; i < loggedInUsers.length; i++) {
        if(loggedInUsers[i].userPort == myServers) {
            console.log((`${userName}: ${message}`))
        }
    }
}

const runChatProgram = async (myUserName, myServer) => {
    let userMessage = await rl.question('Send a message: ')
    await sendMessage(userMessage, myUserName, myServer)
}

/*createUser()
runChatProgram()*/