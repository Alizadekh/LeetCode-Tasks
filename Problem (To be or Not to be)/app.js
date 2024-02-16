var expect = function (val) {
  return {
    toBe: function (expected) {
      if (val === expected) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (notExpected) {
      if (val !== notExpected) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};
