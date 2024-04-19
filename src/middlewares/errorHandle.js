import APIError from '../utils/errors.js'

const errorHandleMiddleware = (err, req, res, next) => {
    if (err instanceof APIError) {
        // instanceof, bir objenin belirli bir sınıfa ait olup olmadığını kontrol eder.
        return res.status(err.status || 400).json({
            success: false,
            message: err.message,
        })
    }
    return res.status(500).json({
        success: false,
        message: "Lütfen API'nizi kontrol edin.",
    })
}

export default errorHandleMiddleware