type TimeOfDay = 'morning' | 'afternoon' | 'night' | 'evening';

type EmojiMap = {
  DAY: number;
  NIGHT: number;
};

const emojiMap: EmojiMap = {
  DAY: 127781,
  NIGHT: 127769,
};

const getTimeOfDay = (): TimeOfDay => {
  const currentHour = new Date().getHours();

  if (currentHour >= 4 && currentHour <= 11) {
    return 'morning';
  }
  if (currentHour >= 12 && currentHour <= 16) {
    return 'afternoon';
  }
  if (currentHour >= 17 && currentHour <= 20) {
    return 'evening';
  }
  return 'night';
};

export const useTimeOfDay = () => {
  const timeOfDay = getTimeOfDay();

  if (timeOfDay === 'morning' || timeOfDay === 'afternoon') {
    return {
      tod: timeOfDay,
      emoji: emojiMap.DAY,
    };
  }
  return {
    tod: timeOfDay,
    emoji: emojiMap.NIGHT,
  };
};
