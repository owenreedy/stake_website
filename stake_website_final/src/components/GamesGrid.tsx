import React from 'react';
import { Link } from 'react-router-dom';

// Game card component
interface GameCardProps {
  name: string;
  slug: string;
  color: string;
  icon: string;
  players: number;
}

const GameCard: React.FC<GameCardProps> = ({ name, slug, color, icon, players }) => {
  return (
    <Link to={`/game/${slug}`} className="block transition-transform hover:scale-105">
      <div 
        className="rounded-xl overflow-hidden h-48 relative" 
        style={{ background: `linear-gradient(to bottom, ${color}, ${color}CC)` }}
      >
        {/* Game icon or image */}
        <div className="absolute inset-0 flex items-start justify-center pt-[12.5%]">
          <img 
            src={icon || `/images/games/${slug}.svg`} 
            alt={name}
            className="w-20 h-20 object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/games/default.svg';
            }}
          />
        </div>
        
        {/* Game name */}
        <div className="absolute bottom-0 left-0 right-0 pb-6 px-3 text-center">
          <h3 className="text-white text-2xl font-bold tracking-wider">{name.toUpperCase()}</h3>
          <p className="text-white/80 text-xs">STAKE ORIGINALS</p>
        </div>
      </div>
    </Link>
  );
};

// Games grid component
const GamesGrid: React.FC = () => {
  const games = [
    { name: 'Plinko', slug: 'plinko', color: '#8A4FFF', icon: '', players: 1411 },
    { name: 'Blackjack', slug: 'blackjack', color: '#FF3A5E', icon: '', players: 813 },
    { name: 'Mines', slug: 'mines', color: '#3A8DFF', icon: '', players: 655 },
    { name: 'Dice', slug: 'dice', color: '#9747FF', icon: '', players: 670 },
    { name: 'Flip', slug: 'flip', color: '#00C853', icon: '', players: 322 },
    { name: 'Cases', slug: 'cases', color: '#FF2D55', icon: '', players: 268 },
    { name: 'Crash', slug: 'crash', color: '#FFBB00', icon: '', players: 323 },
    { name: 'Keno', slug: 'keno', color: '#2196F3', icon: '', players: 836 },
    { name: 'Pump', slug: 'pump', color: '#FF3A5E', icon: '', players: 194 },
    { name: 'Roulette', slug: 'roulette', color: '#00C853', icon: '', players: 181 },
    { name: 'Limbo', slug: 'limbo', color: '#FFBB00', icon: '', players: 346 },
    { name: 'Hilo', slug: 'hilo', color: '#4CAF50', icon: '', players: 162 },
    { name: 'Dragon Tower', slug: 'dragon-tower', color: '#FFC107', icon: '', players: 200 },
    { name: 'Wheel', slug: 'wheel', color: '#FF9800', icon: '', players: 110 },
    { name: 'Tome of Life', slug: 'tome-of-life', color: '#673AB7', icon: '', players: 173 },
    { name: 'Video Poker', slug: 'video-poker', color: '#FF5722', icon: '', players: 76 },
    { name: 'Baccarat', slug: 'baccarat', color: '#4CAF50', icon: '', players: 55 },
    { name: 'Scarab Spin', slug: 'scarab-spin', color: '#FF9800', icon: '', players: 78 },
    { name: 'Blue Samurai', slug: 'blue-samurai', color: '#2196F3', icon: '', players: 78 },
    { name: 'Diamonds', slug: 'diamonds', color: '#9C27B0', icon: '', players: 53 },
    { name: 'Slide', slug: 'slide', color: '#03A9F4', icon: '', players: 24 },
  ];

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-white mb-8">Stake Originals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {games.map((game) => (
          <GameCard
            key={game.slug}
            name={game.name}
            slug={game.slug}
            color={game.color}
            icon={game.icon}
            players={game.players}
          />
        ))}
      </div>
    </div>
  );
};

export default GamesGrid;
