var createCounter = function (init) {
  let counterValue = init;
  return {
    increment: function () {
      counterValue++;
      return counterValue;
    },
    decrement: function () {
      counterValue--;
      return counterValue;
    },
    reset: function () {
      counterValue = init;
      return counterValue;
    },
  };
};
