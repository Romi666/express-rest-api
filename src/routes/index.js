import express from 'express'
import UserRoute from '../routes/user.route'

export default express.Router()
.use('/users', UserRoute)
.use((req, res, next)=>{
    res.status(404).json({message: 'NOT FOUND'});
});