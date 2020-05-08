import {getRepository, Equal} from 'typeorm'
import User from '../models/user.model'
import ResponseEntityDTO from '../models/ResponseEntityDto'

export default class UserService {
    userRepository() {
        return getRepository(User)
    }

    create(userData) {
        const user = this.userRepository().create(userData)
        return this.userRepository().save(user)
    }

    update(userData) {
       return this.userRepository().update(userData.id,
            {fullname : userData.fullname,
            email : userData.email,
            birthdate : userData.birthdate})
    }

    findOne(id) {
        return this.userRepository().findByIds(id);
    }

    findAll() {
        return this.userRepository().find()
    }

    findUserByEmail(email) {
        return this.userRepository().find({email})

    }

    findByFullname(fullname) {
        const user = this.userRepository().find({fullname})
        return user;
    }

    deleteUserByID(id) {
        return this.userRepository().delete({id : id})
    }

    findByBirthDateDesc() {
        return this.userRepository().find({
            order : {
                birthdate : 'DESC'
            }
        })
    }


}
