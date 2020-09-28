function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

let split = stdin.toLowerCase().split(" ");
for (let i = 0; i < split.length; i++) {
    split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
}

return split.join(" ");

let decodeNums = function(arg) {
    if (arg.length > 0 && arg[0] === "0") return 0;
    if (arg.length < 2) return 1;
    if (arg[0] === "1" || (arg[0] === "2" && parseInt(arg[1]) < 7)) {
      return decodeNums(arg.slice(1)) + decodeNums(arg.slice(2));
    }
    return decodeNums(arg.slice(1))
  }

