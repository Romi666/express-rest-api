import express from 'express'
import configure from './config/config'
import createConnection from './database/connection'
import UserService from './services/UserService'
import AppRoutes from '../src/routes'
import morgan from 'morgan'
configure();
createConnection().then(async(connection)=> {
    if(connection.isConnected) {
        console.log('DATABASE CONNECTED');

        const app = express()
        app.use(express.json());
        //logger
        app.use(morgan('dev'))

        app.use(AppRoutes)
        app.listen(process.env.APP_PORT, async()=> {
            console.log(`Application ${process.env.APP_NAME} succesfull running on ${process.env.APP_PORT}`);
            
        })
    }
    else {
        console.log('FAILED TO CONNECT');
        
    }
}).catch((error) => {
    console.error(error);
    
})