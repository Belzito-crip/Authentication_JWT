const db = require("../config/db");

async function list(userId) {
  const [rows] = await db.query(
    "SELECT * FROM curation_items WHERE user_id = ?",
    [userId]
  );
  return rows;
}

async function create(userId, data) {
  const { title, url, notes, tags } = data;
  const [res] = await db.query(
    "INSERT INTO curation_items (user_id, title, url, notes, tags) VALUES (?, ?, ?, ?, ?)",
    [userId, title, url || null, notes || null, tags || null]
  );
  return res.insertId;
}

async function deleteItem(userId, itemId) {
  await db.query(
    "DELETE FROM curation_items WHERE user_id = ? AND id = ?",
    [userId, itemId]
  );
}

async function update(userId, itemId, data) {
  const { title, url, notes, tags } = data;
  await db.query(
    "UPDATE curation_items SET title = ?, url = ?, notes = ?, tags = ? WHERE user_id = ? AND id = ?",
    [title || null, url || null, notes || null, tags || null, userId, itemId]
  );
}

module.exports = { list, create, deleteItem, update };
