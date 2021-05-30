class Bank {
  static Verify(name, amount) {
    return name === "Bill" && amount < 100000;
  }
}

class Credit {
  credit = [{ name: "Bill", score: 800 }];

  score = 0;

  constructor(name) {
    this.credit.forEach((person) => {
      if (name === person.name) {
        this.score = person.score;
      } else {
        this.score = 400;
      }
    });
  }

  get score() {
    return this.score;
  }
}

class Background {
  status = false;

  constructor(name) {
    this.status = !(name.charAt(0) === "C");
  }

  get status() {
    return this.status;
  }
}

export default class AutoLoan {
  constructor(name) {
    this.name = name;
  }

  applyFor(amount) {
    let result = "approved";
    const bank = new Bank.Verify(this.name, amount);
    const credit = new Credit(this.name);
    const background = new Background(this.name);

    if (!bank) {
      result = "denied";
    } else if (credit.score < 600) {
      result = "denied";
    } else if (!background.status) {
      result = "denied";
    }

    return `${this.name} has been ${result} for a $${amount} auto loan.`;
  }
}
