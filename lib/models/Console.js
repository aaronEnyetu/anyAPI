const pool = require('../utils/pool');



module.exports = class Console {
  id;
  name;
  description;
  year;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.description = row.description;
    this.year = row.year;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT id, name FROM game_consoles;');
    return rows.map((row) => new Console(row));
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM game_consoles WHERE id=$1;', [id]);
    if (!rows[0]) return null;

    return new Console(rows[0]);
  }
};
