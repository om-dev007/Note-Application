import jwt from "jsonwebtoken"

export const authMiddleware = (req, res, next) => {

    try {

        const token = req.cookies.token

        if (!token) {
            return res.status(401).json({ message: "Token missing" })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.userId = decoded.id

        next()

    } catch (error) {

        res.status(401).json({ message: "Invalid token" })

    }
}