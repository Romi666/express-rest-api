import {Router} from 'express'
import UserService from '../services/UserService'
import ResponseEntityDto from '../models/ResponseEntityDto'
import { isNullOrUndefined } from 'util'
import ResponseEntityDTO from '../models/ResponseEntityDto'
const userService = new UserService()

export default Router()
.get('/', async(req, res)=> {
    try {
        const users = await userService.findAll()
        res.json(new ResponseEntityDto(200, 'Success', users))
    } catch (error) {
        res.status(500).json({message : 'Internal Server Error'})
    }
})

.post('/', async(req, res, next)=> {
    try {
        const users = await userService.create(req.body)
        res.status(201).json(new ResponseEntityDto(201, 'Created', users))
    } catch (error) {
        res.status(500).json(new ResponseEntityDto(500, "Internale Server error"))
        
    }
})

.delete('/:id', async(req, res, next)=> {
    try {
        const users = await userService.deleteUserByID(req.params.id)
        res.status(200).json(new ResponseEntityDto(200, 'Deleted', users))
    } catch (error) {
        res.status(500).json(new ResponseEntityDto(500, 'Internal Server Error'))        
    }
})

.put('/', async(req, res, next)=> {
    try {
        const check = await userService.findOne(req.body.id)
        if(check.length==0) {
            res.status(404).json(new ResponseEntityDTO(404, "USER NOT FOUND"))
        }else {
            const userData = await userService.update(req.body)
            res.json(new ResponseEntityDto(200, 'Updated', req.body))
        }
    } catch (error) {
        res.status(500).json({message : 'internal server error'})
    }
})

.get('/getByEmail/:email', async(req, res, next)=> {
    try {
        const user = await userService.findUserByEmail(req.params.email)
        if(user.length==0) {
            res.status(404).json(new ResponseEntityDTO(404, 'Not Found'))
        }
        res.json(new ResponseEntityDto(200, 'Success', user))
    } catch (error) {
        res.status(500).json(new ResponseEntityDTO(500, "Internal server error"))
    }
})

.get('/getByFullname/:fullname', async(req, res, next)=> {
    try {
        const user = await userService.findByFullname(req.params.fullname)
        if(user.length==0) {
            res.status(404).json(new ResponseEntityDTO(404, "Not Found"))
        }else {
            res.json(new ResponseEntityDto(200, "Success", user))
        }
    } catch (error) {
        res.status(500).json(new ResponseEntityDTO(500, "Internal Server error"))
    }
})