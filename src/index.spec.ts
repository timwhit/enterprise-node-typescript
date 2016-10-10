const test = require('tape');
const greet = require('./index.ts');

test('greeting', function (t) {
    t.plan(3);

    t.equal(greet('World'), 'Hello World', `Should return 'Hello World'`);
    t.equal(greet('There'), 'Hello There', `Should return 'Hello There'`);
    t.equal(greet('Goodbye'), 'Hello Goodbye', `Should return 'Hello Goodbye'`);
});
