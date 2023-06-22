const bonusWords = ['бонус', 'бонуса', 'бонусов'];

export const generateBonusesStringByQuantity = (quantity) => {
  if (typeof quantity !== 'number') return '-';

  return `${quantity} ${
    bonusWords[
      quantity % 10 == 1 && quantity % 100 != 11
        ? 0
        : quantity % 10 >= 2 &&
          quantity % 10 <= 4 &&
          (quantity % 100 < 10 || quantity % 100 >= 20)
        ? 1
        : 2
    ]
  }`;
};

export const formatDate = (date) => {
  const formattedDate = new Date(date);

  const day = formattedDate.getDate();
  const month = formattedDate.getMonth() + 1;
  const formattedMonth = month < 10 ? '0' + month : month;

  return `${day}.${formattedMonth}`;
};
