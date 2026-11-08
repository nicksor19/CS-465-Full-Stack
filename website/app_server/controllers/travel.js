
const travel = (req, res) => {
  res.render('travel', { title: 'Travlr Getaways - Travel', page: 'travel', isTravel: true });
};
module.exports = { travel };
