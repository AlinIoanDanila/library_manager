const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const getRandomDate = () => {
  return parseInt(
    Date.now().toString() +
      Math.floor(Math.random() * 1000)
        .toString()
        .padStart(3, "0")
  );
};

// This will store our books in memory,
// "id" is the unique identifier,
// other fields are up to you
let books = [
  {
    id: getRandomDate(),
    title: "The Secrets of the Ancient World",
    author: "Amelia Parker",
    genre: "History",
    brief: "A captivating exploration of the mysteries and untold stories from ancient civilizations across the globe.",
  },
  {
    id: getRandomDate(),
    title: "The Art of Mindful Living",
    author: "David Mitchell",
    genre: "Self-Help",
    brief: "A guide to embracing mindfulness in daily life, helping you achieve mental clarity and emotional balance.",
  },
  {
    id: getRandomDate(),
    title: "Quantum Realities: Understanding the Universe",
    author: "Eleanor King",
    genre: "Science",
    brief: "An accessible journey into the complex world of quantum physics, unlocking the mysteries of the universe.",
  },
  {
    id: getRandomDate(),
    title: "The Culinary Odyssey",
    author: "Liam Watson",
    genre: "Cooking",
    brief:
      "A collection of exquisite recipes and culinary techniques from cultures around the world, designed for home chefs.",
  },
  {
    id: getRandomDate(),
    title: "Adventures in the Deep Blue",
    author: "Sophia Roberts",
    genre: "Travel",
    brief:
      "A travel memoir documenting underwater adventures, from snorkeling in the Pacific to deep-sea diving in the Atlantic.",
  },
  {
    id: getRandomDate(),
    title: "The Psychology of Creativity",
    author: "Oliver Scott",
    genre: "Psychology",
    brief: "A deep dive into the cognitive processes and emotional triggers that fuel human creativity and innovation.",
  },
  {
    id: getRandomDate(),
    title: "Gardening for the Urban Dweller",
    author: "Emily Green",
    genre: "Lifestyle",
    brief:
      "A practical guide for cultivating a lush garden in small urban spaces, from balcony plants to rooftop gardens.",
  },
  {
    id: getRandomDate(),
    title: "The Last Frontier: Space Exploration in the 21st Century",
    author: "Ethan Black",
    genre: "Science Fiction",
    brief:
      "A thrilling exploration of mankind's next steps in space, blending cutting-edge science with imaginative storytelling.",
  },
  {
    id: getRandomDate(),
    title: "Music of the Soul: The History of Jazz",
    author: "Isabella Turner",
    genre: "Music",
    brief:
      "A rich history of jazz music, tracing its origins and impact on culture, from its birth in New Orleans to its global influence.",
  },
  {
    id: getRandomDate(),
    title: "The Hidden Language of Trees",
    author: "Oliver Bennett",
    genre: "Nature",
    brief:
      "An exploration of the complex communication systems within forests, revealing the fascinating life of trees.",
  },
];

// Get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// Get a book by id
app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const result = books.find((book) => book.id.toString() === id);
  res.json(result);
});

// Add a new book
app.post("/books", (req, res) => {
  const book = { id: Date.now(), ...req.body };
  books.push(book);
  res.status(201).json(book);
});

// Update a book
app.put("/books/:id", (req, res) => {
  const index = books.findIndex((book) => book.id === parseInt(req.params.id));
  if (index >= 0) {
    books[index] = { ...books[index], ...req.body };
    res.json(books[index]);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// Delete a book
app.delete("/books/:id", (req, res) => {
  books = books.filter((book) => book.id !== parseInt(req.params.id));
  res.status(204).send();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
