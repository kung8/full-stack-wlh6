SELECT p.*, u.name as author
FROM posts p
JOIN users u ON p.user_id = u.id;