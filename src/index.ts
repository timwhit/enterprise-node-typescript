const greet = (name: string): string => {
    return `Hello ${name}`;
};

// tslint:disable-next-line:no-console
console.log(greet('World'));

module.exports = greet;
