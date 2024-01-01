class CustomError extends Error {
    constructor(message, name = "Custom Error", statusCode = 400){
        super(message);
        this.name = name;//default error name
        this.statusCode = statusCode;
    }
}

module.exports = CustomError;