class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

class MyHouse {
  private tenants: Person[];

  constructor(private key: Key) {}

  openDoor(key: Key): boolean {
    return this.key.getSignature() === key.getSignature();
  }

  comeIn(person: Person) {
    if (this.openDoor(person.getKey())) {
      this.tenants.push(person);
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};