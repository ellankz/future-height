import { combineReducers } from 'redux';
import boys from '../data/boys.json';
import girls from '../data/girls.json';

const heightReducer = (state = [], action) => {
  switch (action.type) {
    case 'PREDICT_HEIGHT':
      const person = action.payload;
      const monthsAge = (person.years * 12) + person.months;
      let sizeFile;
      if (person.gender === 'male'){
        sizeFile = boys;
      } else if (person.gender === 'female'){
        sizeFile = girls;
      }
      const ageCol = sizeFile[monthsAge];
      let leastDiff = {
        percCol: null,
        diff: null,
        diffAbs: 999999999999999
      };
      for (let i = 5; i < 20; i ++){
        const diff = parseFloat((parseFloat(person.height, 10) - parseFloat(ageCol[i], 10)).toFixed(2));
        const diffAbs = Math.abs(diff);
        if (diffAbs < leastDiff.diffAbs){
          leastDiff.percCol = i;
          leastDiff.diff = diff;
          leastDiff.diffAbs = diffAbs;
        }
      }
      let res = [];
      for (let i = monthsAge + 1; (i < monthsAge + 25) && (i < 61); i ++){
          let ageObj = {
            age: {
              years: (i - (i % 12)) / 12,
              months: i % 12
            },
            predictHeight: parseFloat(parseFloat(sizeFile[i][leastDiff.percCol], 10) + leastDiff.diff, 10).toFixed(1)
          }
          res.push(ageObj);
      }
      return res;
    default:
      return state;
  }
}

export default combineReducers({
  heightPredictions: heightReducer
});
