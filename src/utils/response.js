class Response {
    constructor(data = null, message = null, status) {
        this.data = data
        this.message = message
        this.status = status
    }

    success(res) {
        return res.status(200).json({
            success: true,
            data: this.data,
            message: this.message ?? 'İşlem Başarılı.',
        })
    }

    created(res) {
        return res.status(201).json({
            success: true,
            data: this.data,
            message: this.message ?? 'Kayıt Oluşturuldu.'
        })
    }

    error500(res) {
        return res.status(500).json({
            success: false,
            data: null,
            message: this.message ?? 'İşlem Başarısız!'
        })
    }

    error400(res) {
        return res.status(400).json({
            success: false,
            data: null,
            message: this.message ?? 'İşlem Başarısız!'
        })
    }

    error401(res) {
        return res.status(401).json({
            success: false,
            data: null,
            message: this.message ?? 'Lütfen Oturum Açın!'
        })
    }

    error404(res) {
        return res.status(404).json({
            success: false,
            data: null,
            message: this.message ?? 'Lütfen Oturum Açın!'
        })
    }

    error429(res) {
        return res.status(429).json({
            success: false,
            data: null,
            message: this.message ?? 'Limit/İstek Sınırını Aştınız!'
        })
    }
}

export default Response