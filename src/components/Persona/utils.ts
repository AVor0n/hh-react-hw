export const getPlaceholderAvatarUrl = (name: string) => {
  const mainLetters = name
    .split(' ', 2)
    .map(word => word[0])
    .join('');

  return `https://placehold.co/30x30/blue/white?text=${mainLetters || '?'}`;
};
