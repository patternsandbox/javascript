function Bank(name, amount) {
  return {
    verify: () => {
      return name === "Bill" && amount < 100000;
    },
  };
}

function Credit(name) {
  const credit = [{ name: "Bill", score: 800 }];
  let score = 0;

  credit.forEach((person) => {
    if (name === person.name) {
      score = person.score;
    } else {
      score = 400;
    }
  });

  return {
    get: score,
  };
}

function Background(name) {
  const status = !(name.charAt(0) === "C");
  return {
    status,
  };
}

const AutoLoan = (name) => {
  return {
    applyFor: (amount) => {
      let result = "approved";
      const bank = Bank(name, amount).verify();
      const credit = Credit(name).get;
      const background = Background(name).status;

      if (!bank) {
        result = "denied";
      } else if (credit.score < 600) {
        result = "denied";
      } else if (!background.status) {
        result = "denied";
      }

      return `${this.name} has been ${result} for a $${amount} auto loan.`;
    },
  };
};

export default AutoLoan;
