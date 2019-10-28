const saturdayFun = function(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
};

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
};

const wrapAdjective = function(s = '*') {
    return function(adj = 'special') {
        return `You are ${s}${adj}${s}!`
    }
};

const Calculator = {
    add: function (num1, num2) {
        return num1 + num2
    },
    subtract: function (num1, num2) {
        return num1 - num2
    },
    multiply: function (num1, num2) {
    return num1 * num2
    },
    divide: function (num1, num2) {
    return num1 / num2
    }
};

const actionApplyer = function(i, array) {
    for (const element of array) {
            i = element(i);
        }
    return i
};