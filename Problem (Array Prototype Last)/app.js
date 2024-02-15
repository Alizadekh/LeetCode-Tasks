Array.prototype.last = function () {
  if (this.length >= 1) {
    return this[this.length - 1];
  } else {
    return -1;
  }
};
