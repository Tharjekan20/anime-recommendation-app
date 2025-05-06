import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/animes', (req, res) => {
  res.json([
    { id: 1, title: 'Attack on Titan' },
    { id: 2, title: 'Demon Slayer' }
  ]);
});

app.get('/animes/:id', (req, res) => {
  const { id } = req.params;
  const animeList = [
    { id: 1, title: 'Attack on Titan', description: 'Humanity vs Titans.' },
    { id: 2, title: 'Demon Slayer', description: 'Demon hunting adventure.' }
  ];

  const anime = animeList.find((a) => a.id === Number(id));
  if (anime) {
    res.json(anime);
  } else {
    res.status(404).json({ error: 'Anime not found' });
  }
});

app.get('/genres', (req, res) => {
  const genres = ['Action', 'Comedy', 'Fantasy', 'Romance', 'Horror'];
  res.json(genres);
});

app.get('/recommendations', (req, res) => {
  const recommended = [
    { id: 101, title: 'My Hero Academia' },
    { id: 102, title: 'Jujutsu Kaisen' },
    { id: 103, title: 'One Piece' }
  ];
  res.json(recommended);
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
