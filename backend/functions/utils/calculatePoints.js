module.exports = function calculatePoints(servicePrice, multiplier = 1) {
  if (!servicePrice || isNaN(servicePrice) || servicePrice <= 0) {
    return 0;
  }

  const baseRate = 10; // R$10 = 1 ponto
  const rawPoints = servicePrice / baseRate;
  const totalPoints = Math.floor(rawPoints * multiplier);

  return totalPoints;
};
