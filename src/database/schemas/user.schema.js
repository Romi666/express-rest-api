import {EntitySchema} from 'typeorm'
import User from '../../models/user.model';

const UserSchema = new EntitySchema({
    name : 'User',
    target : User,
    tableName : 'users',
    columns : {
        id: {
            type : 'varchar',
            length : 64,
            unique  : true,
            generated : 'uuid',
            nullable : false,
            primary : true
        },
        
        fullname: {
            type : 'varchar',
            length : 100
        },

        email : {
            type : 'varchar',
            length : 100
        },

        birthdate : {
            type : 'date',
            
        },

        createAt : {
            name : 'create_at',
            type : 'timestamp',
            createDate : true
        },

        updateAt : {
            name : 'update_at',
            type : 'timestamp',
            updateDate : true
        }
    }
})

export default UserSchema