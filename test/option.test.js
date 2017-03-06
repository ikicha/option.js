var expect = require('expect');

var Option = require('../dist/option');
var some = Option.option("a");
var empty = Option.empty();

expect(Option.option("A").get()).toEqual("A");
expect(Option.option().get()).toNotExist();
expect(Option.empty().get()).toNotExist();

expect(Option.option("A").exists()).toEqual(true);
expect(Option.option().exists()).toEqual(false);
expect(Option.empty().exists()).toEqual(false);


var resultA = undefined;
Option.option("A").ifExists(value => resultA = value);
expect(resultA).toEqual("A");
var resultB = "AAA";
Option.option().ifExists(value => resultB = value);
expect(resultB).toEqual("AAA");
var resultC = "AAA";
Option.empty().ifExists(value => resultC = value);
expect(resultC).toEqual("AAA");

expect(Option.option("A").orElse("B")).toEqual("A");
expect(Option.option().orElse("B")).toEqual("B");
expect(Option.empty().orElse("B")).toEqual("B");

expect(Option.option("A").map(value => value + "B").get()).toEqual("AB");
expect(Option.option().map(value => value + "B").get()).toNotExist();
expect(Option.empty().map(value => value + "B").get()).toNotExist();

console.log("Test done");