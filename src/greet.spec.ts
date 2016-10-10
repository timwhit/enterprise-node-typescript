import * as test from 'tape';
import greet from './greet';

test('greet', (t) => {
    t.plan(3);

    t.equal(greet('World'), 'Hello World', `Should return 'Hello World'`);
    t.equal(greet('There'), 'Hello There', `Should return 'Hello There'`);
    t.equal(greet('Goodbye'), 'Hello Goodbye', `Should return 'Hello Goodbye'`);
});
