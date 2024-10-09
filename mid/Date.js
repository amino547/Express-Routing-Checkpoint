const Datee = (req, res, next) => {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();

    
    if (!(day >= 1 && day <= 5 && hour >= 9 && hour < 17)) {
     
       res.send('The web application is only available during working hours (Monday to Friday, 9 AM to 5 PM).');
    }
    next()
};

module.exports = Datee;
