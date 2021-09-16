const resultCard = require('../config/models/resultPINs');
const resultPIN = (req, res) => {
    const PIN = Math.floor((Math.random() * 10000003001) + 8);
    const serial = Math.floor((Math.random() * 104351) + 103) + 'trf' + Math.floor((Math.random() * 301));

    const newCard = new resultCard({
            resultCard: {

                PIN,
                serial
            }
        })
        // save the result card to database
    newCard.save()
        .then(card => {
            console.log(card);
            return res.render('card', {
                card: card.resultCard
            })
        })
}

module.exports = resultPIN;