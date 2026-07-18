import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

abstract class User {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract login(): void;
  abstract logout(): void;
}

class Student extends User {
  login(): void {
    console.log(`Welcome ${this.name}`);
  }

  logout(): void {
    console.log(`Goodbye ${this.name}`);
  }
}

class Teacher extends User {
  login(): void {
    console.log(`Welcome ${this.name}`);
  }

  logout(): void {
    console.log(`Goodbye ${this.name}`);
  }
}

class Result {
  async getUser(): Promise<User | null> {
    const userType = (await ask("Welcome, are you a teacher or student? ")).toLowerCase();

    if (userType === "student") {
      const name = await ask("Please enter your name: ");
      return new Student(name);
    } else if (userType === "teacher") {
      const name = await ask("Please enter your name: ");
      return new Teacher(name);
    } else {
      console.log("Invalid user type.");
      return null;
    }
  }
}

async function main() {
  const result = new Result();
  const person = await result.getUser();

  if (person) {
    person.login();
    person.logout();
  }

  rl.close();
}

main();