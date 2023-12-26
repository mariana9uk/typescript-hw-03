class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  public getSignature(): number {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {}
  public getKey(): Key {
    return this.key;
  }
}
abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[];

  constructor(door: boolean, key: Key) {
    this.door = door;
    this.key = key;
    this.tenants = [];
  }
  public abstract openDoor(key: Key): void;

  comeIn(tenant: Person): void {
    if (this.door) {
      this.tenants.push(tenant);
    }
  }
}
class MyHouse extends House {
  constructor(key: Key) {
    super(false, key);
  }
  public openDoor(key: Key): void {
    if (key.getSignature === this.key.getSignature) {
      this.door = true;
    }
  }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};
