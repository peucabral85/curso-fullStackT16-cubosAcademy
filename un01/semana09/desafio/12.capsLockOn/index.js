const input = "CAPS";

if (input === input.toUpperCase()) {
    console.log(input.toLowerCase());
} else if (input === input.toLowerCase()) {
    console.log(input);
} else {
    if (input.slice(1) === input.slice(1).toUpperCase()) {
        console.log(input.charAt(0).toUpperCase() + input.slice(1).toLowerCase());
    } else {
        console.log(input);
    }
}