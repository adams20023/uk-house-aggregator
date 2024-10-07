// File: src/controllers/mortgageController.js

exports.getMortgages = async (req, res) => {
  try {
    // Mock data for mortgages
    const mortgages = [
      {
        id: 1,
        lender: 'Bank A',
        interest_rate: 3.5,
        term: 30,
        max_ltv: 80,
      },
      {
        id: 2,
        lender: 'Bank B',
        interest_rate: 2.9,
        term: 25,
        max_ltv: 75,
      },
    ];
    res.json(mortgages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

