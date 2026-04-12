const ratelimit = require("../config/upstash.js");

const rateLimiter = async (req, res, next) => {
    try {

        const identifier = req.ip;

        const { success } = await ratelimit.limit(identifier);
        
        if (!success) {
            return res.status(429).json({ message: "Too many requests. Please try again later." });
        }
        next();
       }catch (error) {
        console.error("Rate limit error:", error);
        next(error);
        // return res.status(500).json({ message: "Internal server error." });
      }
};

module.exports = rateLimiter;