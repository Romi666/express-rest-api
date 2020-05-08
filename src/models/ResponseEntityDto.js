class ResponseEntityDTO {
    constructor (statusCode, message, data) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }
}

export default ResponseEntityDTO;