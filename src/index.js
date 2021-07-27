module.exports = function toReadable(number) {
    const arrNumber = number.toString().split("");

    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    const dozenUnits = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const dozens = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const hundred = "hundred";

    if (arrNumber.length === 1) {
        return units[arrNumber[0]];
    } else if (arrNumber.length === 2) {
        if (arrNumber[1] == 0) {
            return dozens[arrNumber[0] - 1];
        } else if (arrNumber[0] == 1) {
            return dozenUnits[arrNumber[1] - 1];
        } else if (arrNumber[0] >= 2) {
            return (
                dozens[arrNumber[0] - 1] +
                (units[arrNumber[1]] == 0 ? "" : " " + units[arrNumber[1]])
            );
        }
    } else if (arrNumber.length === 3) {
        return arrNumber[2] + arrNumber[1] === "00"
            ? units[arrNumber[0]] + " " + hundred
            : arrNumber[1] == 0
            ? units[arrNumber[0]] + " " + hundred + " " + units[arrNumber[2]]
            : arrNumber[2] == 0
            ? units[arrNumber[0]] +
              " " +
              hundred +
              " " +
              dozens[arrNumber[1] - 1]
            : arrNumber[1] == 1
            ? units[arrNumber[0]] +
              " " +
              hundred +
              " " +
              dozenUnits[arrNumber[2] - 1]
            : units[arrNumber[0]] +
              " " +
              hundred +
              " " +
              dozens[arrNumber[1] - 1] +
              " " +
              units[arrNumber[2]];
    }
};
