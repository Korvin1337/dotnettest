import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import * as net from 'node:net'

function Server() {
    /*const net = require('node:net');
    const readline = require('readline/promises');
    const { stdin: input, stdout: output, exit, removeAllListeners } = require('process');*/
    
    const rl = readline.createInterface({ input, output });
    const server = net.createServer();
    const loggedInUsers = []
    
    server.listen({
        host: 'localhost',
        port: 8080,
    })
    
    server.on('connection', (client) => {
        client.write('Welcome to the server')
        loggedInUsers.push(client)
    })
}

Server()

/*export { Server }*/


/*const createUser = async () => {
    let userName = await rl.question('Choose username: ')
    let serverChoice = await rl.question('Choose server: ')
    let checkName = await checkUserName(userName)
    if(checkName == true) {
        userList.push({userPort: `${serverChoice}`, userName: `${userName}`})
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
}*/

/*const connectToServer = async (userPort) => server.listen({
    host: 'localhost',
    port: `${userPort}`  
})

/*const clientConnection = async (userName, userPort) => {
    server.on('connection', (client) => {
        console.log(`${userName} connected to port: ${userPort}`)
        client.write('Welcome to the server')
    })
}

/*const createConnection = async (userPort, userName) => {
    net.createConnection({
    port: `${userPort}`,
    })
    loggedInUsers.push({userPort: `${userPort}`, userName: `${userName}`})
    await clientConnection(userName, userPort)
}

const sendMessage = (message, userName, userPorts) => {
    for(let i = 0; i < loggedInUsers.length; i++) {
        if(loggedInUsers[i].userPort == userPorts) {
            console.log((`${userName}: ${message}`))
        }
    }
}


const checkUserName = async (userName) => {
    checkName = true;
    
    for(let i = 0; i < userList.length; i++) {
        if(userList[i] == userName) {
            checkName = false
            return false
        }
    }

    if(checkName == true) {
        userList.push(checkName)
    }

    return true
}

const runChatProgram = async (userName, userPort) => {
    let userMessage = await rl.question('Send a message: ')
    await sendMessage(userMessage, userName, userPort)
}

goMenu = async () => {
    let userName = await rl.question('Choose your username: ')
    let userNameCheck = await checkUserName(userName)
    let userPort = Number(await rl.question('Port to connect to: '))
    
    if(userNameCheck == true) {
        let checkServers = true;
        if(servers.length < 1) {
            await connectToServer(userPort)
            servers.push(userPort)
            await createConnection(userPort, userName)
            await runChatProgram(userName, userPort)
        }

        for(let i = 0; i < servers.length; i++) {
            if(servers[i] == userPort) {
                checkServers = false;
            } 
            if(checkServers == true) {
                await connectToServer(userPort)
                servers.push(userPort)
            }
            await connectToServer(userPort)
            loggedInUsers.push({userPort: `${userPort}`, userName: `${userName}`})
            await createConnection(userPort, userName)
            await runChatProgram(userName, userPort)
        }
    } else {
        console.log("Sry something went wrong, try again!")
    }

    
}

goMenu()*/
