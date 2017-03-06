type Consumer<T> = (input: T) => void;
type Mapper<T, V> = (input: T) => V;

abstract class Option<T> {
  constructor() {

  }

  static option<T>(data: T): Option<T> {
    if (data) {
      return new Some<T>(data);
    } else {
      return new Empty<T>();
    }
  }

  static empty<T>(): Option<T> {
    return new Empty<T>();
  }

  abstract get(): T;
  abstract exists(): boolean;
  abstract ifExists(f: Consumer<T>): void;
  abstract orElse(elseValue: T): T;
  abstract map<V>(f: Mapper<T, V>): Option<V>;
}

class Empty<T> extends Option<T> {
  get(): T {
    return undefined;
  }

  exists(): boolean {
    return false;
  }

  ifExists(f: Consumer<T>): void {
    // NOTHING TODO
  }

  orElse(elseValue: T): T {
    return elseValue;
  }

  map<V>(f: Mapper<T, V>): Option<V> {
    return Option.empty<V>();
  }
}

class Some<T> extends Option<T> {
  private data: T = undefined;

  constructor(input: T) {
    super();
    this.data = input;
  }

  get(): T {
    return this.data;
  }

  exists(): boolean {
    return true;
  }

  ifExists(f: Consumer<T>): void {
    f(this.data);
  }

  orElse(elseValue: T): T {
    return this.data;
  }

  map<V>(f: Mapper<T, V>): Option<V> {
    return Option.option<V>(f(this.data));
  }
}

const option = Option.option;
const empty = Option.empty;
export {option, empty};