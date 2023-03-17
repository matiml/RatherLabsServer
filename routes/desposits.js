const express = require('express');
const DepositService = require('./../services/deposits.service');

const service = new DepositService();

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    console.log(body);
    const newDeposit = await service.create(body);

    res.json(newDeposit);
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const deposits = await service.find();
    res.json(deposits);
  } catch (error) {
    next(error);
  }
});



router.get('/:userId', async (req, res, next) => {
  try {
    const pool = req.query.pool;
    const { userId } = req.params;
    console.log(userId);
    if(pool){
      const depositsPool = await service.findByPool(userId, pool);
      return depositsPool;
    }

   const deposits = await service.findByUser(userId);


    res.json(deposits);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
