const express = require('express');
const router = express.Router();
const _ = require('lodash');

/* ===== GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});


/* ===== POST url parser. */
router.post('/url-parser/', (req, res, next) => {
  let {URLFormat, URLInstance} = req.body;
  console.log(`:: PARAMS :: >> \n ::Format:: ${URLFormat} \n ::Instance:: ${URLInstance} `);

  let formatArray = _.split(URLFormat, '/');
  let instanceAux = _.split(URLInstance, '?');
  let instanceArray = _.split(instanceAux[0], '/');

  console.log('::::=========::::');
  console.log(formatArray);
  console.log('::::=========::::');
  console.log(instanceArray);
  console.log('::::=========::::');

  let hashObject = {};

  for(let i = 0; i < formatArray.length; i++) {
    // if the arrays are different each other and different empty
    if(formatArray[i] !== '' && instanceArray[i] !== '' && formatArray[i] !== instanceArray[i]) {
      const key = formatArray[i].substr(1);
      hashObject[ key ] = instanceArray[i];
    }
  }

  let queryParam = _.split(instanceAux[1], '&');
  _.forEach(queryParam, (query) => {
    const val =_.split(query, '=');
    hashObject[val[0]] = val[1];
  });

  res.status(200).json(hashObject);
});


/* ===== GET Error Logger Email Sender. */
// Parser Date function to compare the minutes
const getTime = () => new Date().toISOString().substr(0, 16);
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
let startTime = getTime();
let logCalls = 0;

router.get('/log-error', async (req, res, next) => {
  // Mock to trigger the logError function each second for (randomly) 65 times
  for(let i = 0; i < 65; i++) {
    logError(`::: THIS IS THE ERROR TO SAVE :::`);
    await sleep(1000);
  }
  res.status(200).json({response: 'Every error was logged.'});
});

const logError = (error) => {
  logCalls++;
  console.log(`::::: FUNCTION TIME >> ${startTime} :::::`);
  console.log(`::::: TIME NOW >>>>>>> ${getTime()} :::::`);
  console.log(`::::: LogCalls >>>>>>> ${logCalls} :::::`);

  if (logCalls > 9 && (startTime !== getTime()) ) {
    mockEmailSender();
    // Restart the time and the calls for this function
    startTime = getTime();
    logCalls = 0;
  }
  console.log(error);
  console.log(`\n`);

};

const mockEmailSender = () => console.log(`::::: AFTER ONE MINUTE, SEND EMAIL TO NOTIFY! :::::`);


/* ===== POST Zoo. */
const AnimalFactory = require('../services/animalFactory');
router.post('/zoo/', (req, res, next) => {
  let {animalType, inputSpeak} = req.body;
  const animal = AnimalFactory.createAnimals(animalType);

  res.status(200).json({ id: animal.getId(), type: animal.getName(), speak: animal.speak(inputSpeak) });
});

module.exports = router;
