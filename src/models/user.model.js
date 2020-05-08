export default class User{
    constructor(
        id,
        fullname,
        email,
        birthdate,
        createAt,
        updateAt
    ) {
        this.id = id;
        this.fullname = fullname;
        this.email = email;
        this.birthdate = birthdate;
        this.createAt = createAt;
        this.updateAt = updateAt
    }
}