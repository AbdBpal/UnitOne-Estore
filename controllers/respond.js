module.exports = function respond({status="sucessful",code="200",message="Operation Success.",payload={},error=[]}){
    return {
        status: status,
        code: code,
        message: message,
        payload: payload,
        error: error
    };
}