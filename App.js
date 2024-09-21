import React, { useState } from 'react';
import Card from './Card';
import './App.css'; 

const App = () => {
  const initialCards = [
    {
      id: 1,
      title: 'Beautiful Mountain',
      features: ['Snow-covered peaks', 'Great for hiking', 'Scenic views'],
      image: 'https://c4.wallpaperflare.com/wallpaper/947/583/747/mountain-nature-hd-wallpapers-top-beautiful-desktop-nature-images-background-wallpaper-preview.jpg',
    },
    {
      id: 2,
      title: 'Serene Lake',
      features: ['Crystal clear water', 'Calm and peaceful', 'Perfect for boating'],
      image: 'https://w0.peakpx.com/wallpaper/112/440/HD-wallpaper-serene-lake-cooll-beautiful-cold-mountain-nice-mirror-blue-amazing-colors-sky-winter-lake-water-purple-snow-serene-awesome-day-nature.jpg',
    },
    {
      id: 3,
      title: 'Lush Forest',
      features: ['Diverse wildlife', 'Great for camping', 'Dense greenery'],
      image: 'https://thumbs.dreamstime.com/b/trail-tall-trees-lush-forest-shenandoah-national-park-virginia-32144123.jpg',
    },
  ];

  const [cards, setCards] = useState(
    initialCards.map(card => ({ ...card, liked: false }))
  );

  const handleLike = (id) => {
    setCards(cards.map(card =>
      card.id === id ? { ...card, liked: !card.liked } : card
    ));
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Explore Amazing Places
      </h1>
      <div className="flex flex-wrap justify-center">
        {cards.map(card => (
          <Card
            key={card.id}
            title={card.title}
            features={card.features}
            image={card.image}
            liked={card.liked}
            onLike={() => handleLike(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
