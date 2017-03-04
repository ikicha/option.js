

abstract class Option<T> {
  constructor() {
    type Consumer = (input: T) => void;
    type MapFunc = (input: T) => T;
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
  abstract ifExists(f: Consumer): void;
  abstract orElse(elseValue: T): T;

}

class Empty<T> extends Option<T> {
  get(): T {
    return undefined;
  }
  exists(): boolean {
    return false;
  }
  ifExists(f: Consumer): void {

  }
  orElse(elseValue: T): T {
    return elseValue;
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
  ifExists(f: Consumer): void {
    f(this.data);
  }
  orElse(elseValue: T): T {
    return this.data;
  }
}

export default Option;