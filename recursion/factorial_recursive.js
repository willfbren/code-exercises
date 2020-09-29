function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

let split = stdin.toLowerCase().split(" ");
for (let i = 0; i < split.length; i++) {
    split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
}

return split.join(" ");

