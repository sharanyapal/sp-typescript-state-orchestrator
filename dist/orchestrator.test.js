const assert = { equal(a, b) { if (a !== b)
        throw Error('not equal'); }, deepEqual(a, b) { if (JSON.stringify(a) !== JSON.stringify(b))
        throw Error('not deeply equal'); }, throws(fn) { let threw = false; try {
        fn();
    }
    catch {
        threw = true;
    } if (!threw)
        throw Error('did not throw'); } };
import { ready, replay } from './orchestrator.js';
const task = (id, deps = []) => ({ kind: 'enqueue', task: { id, deps, state: 'pending', attempts: 0 } });
const events = [task('parse'), task('train', ['parse']), { kind: 'started', id: 'parse' }, { kind: 'succeeded', id: 'parse' }, { kind: 'started', id: 'train' }, { kind: 'succeeded', id: 'train' }];
const state = replay(events);
assert.equal(state.tasks.get('train')?.state, 'succeeded');
assert.deepEqual(ready(state), []);
assert.throws(() => replay([task('a'), task('b', ['a']), { kind: 'started', id: 'b' }]));
console.log('event sourcing DAG assertions passed');
