const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');


describe('game_console routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /game_consoles should show the list of game consoles', async () => {
    const res = await request(app).get('/game_consoles');
    expect(res.body.length).toEqual(5);
    expect(res.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
    });
  });

  it('GET /game_console/:id should show the details of a game console', async () => {
    const res = await request(app).get('/game_consoles/1');
    expect(res.body).toEqual({
      id: '1',
      name: 'Atari',
      description: 'Classically viewed as the original game console.',
      year: 1977,    
    });
  });

  afterAll(() => {
    pool.end();
  });
});
