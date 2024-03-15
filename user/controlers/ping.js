const ping = async (req, res) => {

        res.status(200).json({
            message: "i am live",
        });
    
}

module.exports = ping;