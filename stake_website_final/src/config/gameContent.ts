import { BarChart2, TrendingUp, DollarSign, BookOpen, Diamond, Target, Dices } from 'lucide-react';

export interface GameContentType {
  description: string;
  rules: string[];
  strategy: string[];
  stats: {
    rtp: string;
    volatility: string;
    minBet: string;
    maxBet: string;
    maxMultiplier: string;
    houseEdge?: string;
  };
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const defaultGameContent: GameContentType = {
  description: "Experience the thrill of this exciting game on Stake.us, where you can play for free using Stake's virtual currency.",
  rules: [
    "Place your bet and select your preferred game settings.",
    "Click the play button to start the game.",
    "Follow the game-specific mechanics to determine your outcome.",
    "Collect your winnings if successful."
  ],
  strategy: [
    "Start with smaller bets to understand the game mechanics.",
    "Gradually increase your bets as you become more comfortable with the game.",
    "Set a budget and stick to it to ensure responsible gaming.",
    "Take advantage of bonuses and promotions to maximize your gameplay."
  ],
  stats: {
    rtp: "96%",
    volatility: "Medium",
    minBet: "0.1",
    maxBet: "100",
    maxMultiplier: "100x"
  },
  icon: Dices
};

export const gameContent: Record<string, GameContentType> = {
  "tome-of-life": {
    description: "Tome of Life is an enchanting slot game that takes players on a magical journey through ancient spellbooks and mystical artifacts. With its beautiful graphics and engaging gameplay, this game offers an immersive experience with the potential for significant rewards.",
    rules: [
      "Select your bet amount using the controls at the bottom of the screen.",
      "Click the spin button to start the game and set the reels in motion.",
      "Match symbols across the paylines to win prizes according to the paytable.",
      "Land three or more scatter symbols to trigger the free spins feature.",
      "Wild symbols substitute for any regular symbol to help create winning combinations.",
      "Special book symbols can transform into matching symbols for bigger wins."
    ],
    strategy: [
      "Start with smaller bets to extend your gameplay and understand the game mechanics.",
      "Look for the free spins feature, as this is where the biggest wins typically occur.",
      "Pay attention to the special book symbols, as they can lead to significant payouts when they transform.",
      "Consider using the autoplay feature to maintain consistent betting patterns.",
      "Set win and loss limits when using autoplay to manage your bankroll effectively.",
      "Remember that slots are games of chance, so no strategy can guarantee wins."
    ],
    stats: {
      rtp: "96.5%",
      volatility: "Medium-High",
      minBet: "0.1",
      maxBet: "100",
      maxMultiplier: "5000x"
    },
    icon: BookOpen
  },
  "pump": {
    description: "Pump is an exciting game that combines elements of skill and chance. Players must time their actions perfectly to maximize their potential returns in this fast-paced, adrenaline-pumping experience.",
    rules: [
      "Place your bet using the controls at the bottom of the screen.",
      "Watch as the multiplier begins to increase from 1.00x.",
      "Click the 'Cash Out' button at any time to secure your current multiplier.",
      "If you wait too long and the pump bursts, you lose your bet.",
      "The longer you wait, the higher your potential reward, but also the higher the risk.",
      "Use the auto cash-out feature to automatically secure your winnings at a predetermined multiplier."
    ],
    strategy: [
      "Start with smaller bets while you get a feel for the game's timing and patterns.",
      "Consider setting an auto cash-out at a reasonable multiplier (e.g., 1.5x-2.0x) for consistent returns.",
      "Watch for patterns in burst points, though remember each round is independent.",
      "Don't get greedy – consistent modest wins are better than occasional big wins followed by multiple losses.",
      "Manage your bankroll by setting strict limits on how much you're willing to bet and lose.",
      "Consider varying your cash-out points rather than always aiming for the same multiplier."
    ],
    stats: {
      rtp: "97%",
      volatility: "High",
      minBet: "0.1",
      maxBet: "1000",
      maxMultiplier: "1000x",
      houseEdge: "3%"
    },
    icon: Target
  },
  "blackjack": {
    description: "Blackjack is a classic casino card game where players compete against the dealer to get a hand value as close to 21 as possible without exceeding it. With its low house edge and element of skill, Blackjack is a favorite among strategic players.",
    rules: [
      "The goal is to beat the dealer by having a hand value closer to 21 without going over.",
      "Cards 2-10 are worth their face value, face cards (J, Q, K) are worth 10, and Aces can be worth 1 or 11.",
      "Each player receives two cards, and the dealer gets one face up and one face down.",
      "Players can 'Hit' to take another card or 'Stand' to keep their current hand.",
      "Players can 'Double Down' to double their bet and receive exactly one more card.",
      "If the first two cards are of the same value, players can 'Split' them into two separate hands.",
      "The dealer must hit on 16 or less and stand on 17 or more.",
      "A 'Blackjack' is an Ace and a 10-value card as the first two cards, paying 3:2."
    ],
    strategy: [
      "Always stand on hard 17 or higher.",
      "Always hit on hard 8 or lower.",
      "Double down on 11 when the dealer shows 2-10.",
      "Double down on 10 when the dealer shows 2-9.",
      "Double down on 9 when the dealer shows 3-6.",
      "Always split Aces and 8s.",
      "Never split 10s or 5s.",
      "Split 2s and 3s when the dealer shows 4-7.",
      "Split 6s when the dealer shows 2-6.",
      "Use a basic strategy chart for optimal play in all situations."
    ],
    stats: {
      rtp: "99.43%",
      volatility: "Low",
      minBet: "1",
      maxBet: "500",
      maxMultiplier: "3:2",
      houseEdge: "0.57%"
    },
    icon: DollarSign
  },
  "crash": {
    description: "Crash is an exciting multiplier game where players watch a line climb higher and higher, increasing the potential payout multiplier. The key is to cash out before the line crashes, as waiting too long results in losing your bet.",
    rules: [
      "Place your bet before the round begins.",
      "Watch as the multiplier starts at 1.00x and begins to increase.",
      "Cash out at any time to secure your winnings (your bet multiplied by the current multiplier).",
      "If you don't cash out before the crash, you lose your bet.",
      "The game features an 'Auto Cash-out' option where you can set a target multiplier.",
      "You can also set up automatic betting for consecutive rounds."
    ],
    strategy: [
      "Start with smaller bets to get a feel for the game's rhythm and patterns.",
      "Consider setting an auto cash-out at a reasonable multiplier (e.g., 1.5x-2.0x) for consistent returns.",
      "Be cautious of extremely high multipliers with only small bets remaining – it's often bait.",
      "Watch for consistent wins – they often precede an 'Instaloss' (crash between 1.00x and 1.04x).",
      "Target the 1.05x - 1.25x range for consistent returns with lower risk.",
      "Never chase losses with larger bets – stick to your strategy.",
      "Consider waiting for an Instaloss before resuming betting."
    ],
    stats: {
      rtp: "96%",
      volatility: "High",
      minBet: "0.1",
      maxBet: "2000",
      maxMultiplier: "1000x",
      houseEdge: "4%"
    },
    icon: TrendingUp
  },
  "dice": {
    description: "Dice is a simple yet engaging game where players predict whether a randomly generated number will be over or under their selected target. With adjustable risk levels and instant results, Dice offers a customizable gaming experience.",
    rules: [
      "Select your bet amount using the controls.",
      "Choose whether to bet on 'Over' or 'Under' a specific target number.",
      "Adjust your target number to change the risk and potential reward.",
      "Click 'Roll' to generate a random number between 0 and 100.",
      "If your prediction is correct (the rolled number is over or under your target), you win.",
      "Your payout is determined by the probability of your prediction being correct."
    ],
    strategy: [
      "Adjust your target number based on your risk tolerance – lower targets for 'Under' bets or higher targets for 'Over' bets mean higher risk but bigger potential rewards.",
      "For conservative play, aim for targets that give you around 70-80% win probability (e.g., Over 25 or Under 75).",
      "For balanced risk-reward, aim for targets with around 50% win probability (e.g., Over/Under 50).",
      "For high-risk play, aim for targets with 10-30% win probability for potentially large multipliers.",
      "Consider using the auto-bet feature with a consistent strategy to remove emotion from your gameplay.",
      "Set stop-loss and take-profit limits when using auto-bet to protect your bankroll."
    ],
    stats: {
      rtp: "99%",
      volatility: "Adjustable",
      minBet: "0.1",
      maxBet: "1000",
      maxMultiplier: "9900x",
      houseEdge: "1%"
    },
    icon: Dices
  },
  "plinko": {
    description: "Plinko is an exciting game inspired by the classic Japanese Pachinko machines. Players drop a ball from the top of a triangular pin pyramid, watching it bounce unpredictably until it lands in one of the multiplier slots at the bottom.",
    rules: [
      "Select your bet amount and risk level (Low, Medium, or High).",
      "Choose the number of rows for the pin pyramid (8-16).",
      "Click to drop the ball from the top of the pyramid.",
      "Watch as the ball bounces through the pins and lands in one of the multiplier slots.",
      "Your winnings are calculated by multiplying your bet by the multiplier where the ball lands.",
      "You can use autoplay to drop multiple balls automatically."
    ],
    strategy: [
      "Choose your risk level based on your playing style and bankroll management:",
      "Low Risk: More consistent smaller wins with multipliers up to 16x",
      "Medium Risk: Balanced approach with multipliers up to 110x",
      "High Risk: Volatile gameplay with potential multipliers up to 1,000x",
      "More rows mean more pins that can change the trajectory, increasing randomness.",
      "Use the autoplay feature to maintain consistent betting patterns.",
      "Toggle animations off for faster gameplay if you're playing multiple rounds.",
      "Use hotkeys (spacebar) for quicker reactions and to maximize plays."
    ],
    stats: {
      rtp: "99%",
      volatility: "Adjustable",
      minBet: "0.1",
      maxBet: "1000",
      maxMultiplier: "1000x",
      houseEdge: "1%"
    },
    icon: BarChart2
  },
  "mines": {
    description: "Mines is a thrilling grid-based game where players uncover tiles hoping to find gems, not mines. With each safe tile revealed, your potential winnings increase, but hitting a mine ends the game and results in losing your bet.",
    rules: [
      "Select your bet amount and the number of mines (1-24) to place on the 5×5 grid.",
      "Click on tiles to reveal them one by one.",
      "Each safe tile you uncover increases your potential winnings multiplier.",
      "You can cash out at any time to secure your current winnings.",
      "If you hit a mine, the game ends and you lose your bet.",
      "After the game ends, all mine locations are revealed."
    ],
    strategy: [
      "The fewer mines you select, the higher your chances of winning, but with smaller multipliers.",
      "More mines mean higher potential multipliers but lower chances of winning.",
      "For low-risk play, set 1-5 mines for win rates between 80-96%.",
      "For medium-risk play, set 6-15 mines for balanced risk-reward.",
      "For high-risk play, set 16-24 mines for potential large multipliers.",
      "Consider cashing out after revealing a few safe tiles rather than pushing your luck.",
      "Start with smaller bets to learn the game mechanics.",
      "Use the auto-bet feature for consistent play.",
      "Set stop-loss and take-profit limits to manage your bankroll."
    ],
    stats: {
      rtp: "99%",
      volatility: "Adjustable",
      minBet: "0.1",
      maxBet: "1000",
      maxMultiplier: "24.75x",
      houseEdge: "1%"
    },
    icon: Diamond
  }
};
