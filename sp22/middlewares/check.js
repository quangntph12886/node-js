const jwt = require('jsonwebtoken')
export const userAuth = (req,res,next) =>{
    try {
        if(!req.header("Authorization")){
            return res.status(403).json({msg: 'bạn chưa đăng nhập admin'})
        }
        const token = req.header("Authorization").split(' ')[1]

        if(!token) return res.status(401).json({msg: 'Invalid Authentication.'})

        jwt.verify(token,"123456", (err, user) => {
            if(err) return res.status(403).json({msg: 'Invalid_Authentication'})

            req.user = user
            next();
        })
    } catch (error) {
        console.log(error)
    }
}

export const roleAuth = (req,res,next) =>{
    console.log(req.user)
    const role = req.user.role
        if(role === "admin"){
            next();
        }else{
            return res.status(401).json({ msg: "Can't access"})
        }
}
