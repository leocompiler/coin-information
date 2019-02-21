 class NegocioException extends Error {
    constructor(message, status) {
        super();
        this.name = "NegocioException";
        this.message = Array.isArray(message) ? message : [{message: message}];
        this.status = status || 400;
    }
}

module.exports = NegocioException