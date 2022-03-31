module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },

  isUsersComment: (a, b, opts) => {
    if (a == b) {
      return opts.fn(this);
    } else {
      return opts.inverse(this);
    }
  },
};
