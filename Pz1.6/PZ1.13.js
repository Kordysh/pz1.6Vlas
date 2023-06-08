/*const data = {
    ua: ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П ятниця', 'Субота'],
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  };
  
  function askLanguage() {
    const language = prompt('Виберіть мову "ua" або "en"?');
    if (language.toLowerCase() === 'ua' || language.toLowerCase() === 'en') {
      askDayNumber(language.toLowerCase());
    } else {
      alert('Неправильний ввід даних! Будь ласка, спробуйте ще раз.');
      askLanguage();
    }
  }
  
  function askDayNumber(language) {
    const dayNumber = parseInt(prompt(language === 'ua' ? 'Введіть номер дня неділі від 1 до 7?' : 'Enter the day number of the week (from 1 to 7)?'));
    if (dayNumber >= 1 && dayNumber <= 7) {
      const dayName = data[language][dayNumber - 1];
      alert(dayName);
    } else {
      alert('Неправильний ввід даних! Будь ласка, спробуйте ще раз.');
      askDayNumber(language);
    }
  }
  
  askLanguage();*/


  /*function ChessBoard(length, width) {
    this.length = length;
    this.width = width;
  
    this.drawBoard = function() {
      for (let i = length; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= width; j++) {
          if ((i + j) % 2 === 0) {
            row += '@ ';
          } else {
            row += '# ';
          }
        }
        console.log(`${i} ${row}`);
      }
      console.log('  A B C D E F G H');
    };
  }
  
  const board1 = new ChessBoard(8, 8);
  const board2 = new ChessBoard(6, 4);
  const board3 = new ChessBoard(10, 10);
  
  board1.drawBoard();
  console.log('---');
  board2.drawBoard();
  console.log('---');
  board3.drawBoard();*/



  /*class Random {
    static nextDouble(low, high) {
      return Math.random() * (high - low) + low;
    }
  
    static nextInt(low, high) {
      return Math.floor(Math.random() * (high - low)) + low;
    }
  
    static nextElement(array) {
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    }
  }
  
  const randomDouble = Random.nextDouble(0, 1);
  console.log(randomDouble);
  
  const randomInt = Random.nextInt(1, 10);
  console.log(randomInt);
  
  const randomElement = Random.nextElement(['apple', 'banana', 'orange']);
  console.log(randomElement);*/





  /*function Greetable(str) {
    this.str = str;
  }
  
  Greetable.prototype.greet = function(greeting) {
    return `${greeting}, ${this.str}!`;
  };
  
  function createGreetable(str) {
    return new Greetable(str);
  }
  
  const g = createGreetable('Oleg');
  console.log(g.greet('Hello'));*/








  
  
  /*function sequence(start = 0, step = 1) {
  let value = start;

  return function() {
    const result = value;
    value += step;
    return result;
  };
}

const generator = sequence(10, 3);
const generator2 = sequence(7, 1);

console.log(generator()); 
console.log(generator());
console.log(generator2());
console.log(generator()); 
console.log(generator2()); */






/*function pluck(array, field) {
    return array.map(item => item[field]);
  }
  
  let characters = [
    {name: "barney", age: 36},
    {name: "fred", age: 40}
  ];
  
  console.log(pluck(characters, 'name')); */







  /**function count(obj) {
    if (typeof obj === 'object' && obj !== null) {
      return Object.keys(obj).length;
    } else {
      return 0;
    }
  }
  
  let a = { a: 1, b: 2 };
  console.log(count(a)); 
  
  let b = function () {};
  console.log(count(b)); 
  
  let c = [1, 2, 3];
  console.log(count(c)); 
  
  let d = [];
  d[100] = 1;
  console.log(count(d)); */






 /* class Task {
    constructor(name, description, startDate, endDate) {
      this.name = name;
      this.description = description;
      this.startDate = startDate;
      this.endDate = endDate;
    }
  }
  
  class ExecutableTask extends Task {
    constructor(name, description, startDate, endDate, completionPercentage) {
      super(name, description, startDate, endDate);
      this.completionPercentage = completionPercentage;
      this.isCompleted = false;
    }
  }
  
  // Приклад використання:
  const graduationTask = new ExecutableTask(
    'Випускний',
    'Святкування випуску',
    '26.06.2021',
    '27.06.2021',
    87
  );
  
  graduationTask.isCompleted = false;
  
  console.log(graduationTask);*/





  /*class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    return this.rate * this.days;
  }
}

const worker = new Worker('John', 'Doe', 10, 20);
console.log(worker.getSalary()); */







/*class PowerStation {
    constructor(power) {
      this.power = power;
    }
  }
  
  class SolarPanel {
    constructor(generation) {
      this.generation = generation;
    }
  }
  
  class ResidentialBuilding {
    constructor(apartments) {
      this.apartments = apartments;
    }
  }
  
  class PowerLine {
    constructor(power, price) {
      this.power = power;
      this.price = price;
    }
  }
  
  class ElectricNetwork {
    constructor(elements) {
      this.elements = elements;
    }
  
    calculateElectricityDemand() {
      let daytimeDemand = 0;
      let nighttimeDemand = 0;
  
      for (const element of this.elements) {
        if (element instanceof ResidentialBuilding) {
          daytimeDemand += element.apartments * 4;
          nighttimeDemand += element.apartments;
        } else if (element instanceof SolarPanel) {
          daytimeDemand -= element.generation;
        }
      }
  
      return { daytimeDemand, nighttimeDemand };
    }
  
    calculateElectricityBalance(powerLines) {
      const { daytimeDemand, nighttimeDemand } = this.calculateElectricityDemand();
      let cost = 0;
  
      for (const powerLine of powerLines) {
        const excessPower = powerLine.power - daytimeDemand;
        if (excessPower > 0) {
          cost += excessPower * powerLine.price;
        } else {
          const deficitPower = -excessPower;
          cost -= deficitPower * powerLine.price;
        }
      }
  
      return cost;
    }
  }
  
  const powerStation = new PowerStation(50);
  const solarPanel = new SolarPanel(3);
  const residentialBuilding = new ResidentialBuilding(100);
  const powerLine1 = new PowerLine(30, 10);
  const powerLine2 = new PowerLine(20, 15);
  
  const electricNetwork = new ElectricNetwork([
    powerStation,
    solarPanel,
    residentialBuilding,
  ]);
  
  const powerLines = [powerLine1, powerLine2];
  const cost = electricNetwork.calculateElectricityBalance(powerLines);
  
  console.log(`Cost: ${cost}`);*/
  
