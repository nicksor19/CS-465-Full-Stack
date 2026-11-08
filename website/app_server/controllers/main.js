
const index = (req, res) => {
  res.render('index', { title: 'Travlr Getaways', page: 'home', isHome: true });
};
module.exports = { index };
