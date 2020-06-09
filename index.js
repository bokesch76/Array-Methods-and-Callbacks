import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //
//***DONE*** */
/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

/*A*/
const home2014 = fifaData.filter((home) => {
    return home.Year === 2014 && home.Stage === 'Final';
  }, [])
  
  console.log(home2014[0]['Home Team Name'])

  /*B*/
  const away2014 = fifaData.filter((away) => {
    return away.Year === 2014 && away.Stage === 'Final';
  }, [])
  
  console.log(away2014[0]['Away Team Name'])

  /*C*/
  const homeGoals14 = fifaData.filter((homeGoal) => {
    return homeGoal.Year === 2014 && homeGoal.Stage === 'Final';
  }, [])
  
  console.log(homeGoals14[0]['Home Team Goals'])

  /*D*/
  const awayGoals14 = fifaData.filter((awayGoal) => {
    return awayGoal.Year === 2014 && awayGoal.Stage === 'Final';
  }, [])
  
  console.log(awayGoals14[0]['Away Team Goals'])

  /*E*/
  function winner2014(data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].Year === 2014 && data[i].Stage === 'Final' ) {
        console.log(data[i]['Win conditions']);
      }
    }
  }
  
  winner2014(fifaData)

//***DONE */
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter((state) => {return state.Stage === 'Final'})
};

console.log(getFinals(fifaData));

//***DONE*** */
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback, data) {
    const years = callback(data).map(item => item.Year);
    return years;
  };
  
  console.log(getYears(getFinals, fifaData));
// ***DONE***
/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    let winners = [];
    return callback.reduce((win, state) => {
        if (state['Home Team Goals'] === state['Away Team Goals'] && state.Stage === 'Final') {
        win.push(state['Win conditions']);
        }
        else if(state['Home Team Goals'] > state['Away Team Goals'] && state.Stage === 'Final') {
        win.push(state['Home Team Name']);
        } 
        else if (state['Away Team Goals'] > state['Home Team Goals'] && state.Stage === 'Final') {
        win.push(state['Away Team Name']);
        }
        return winners;
        }, []);
  };
  
  console.log(getWinners(fifaData));


/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(data, getWinners, getYears, getFinals) {
    const result = [];
    const winner = getWinners(data, getFinals);
    const years = getYears(data, getFinals);

    for (let i = 0; i < winners.length; i++) {
        result.push(`In ${years[i]}, ${winner[i]} won the World Cup!`);
    }
    return result;
}
console.log(getWinnersByYear(fifaData, getWinners, getYears, getFinals));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let startinggoals = 0;
    let homescores = data.reduce(function(acc, goal)  {
        return  acc + goal['Home Team Goals']
      },startinggoals) 
      
    let awayscores = data.reduce(function(acc, goal)  {
        return  acc + goal['Away Team Goals']
      },startinggoals) 
     console.log(Math.round(homescores / data.length));
      console.log(Math.round(awayscores / data.length));
    }
  
  
  getAverageGoals(fifaData)

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
