export const getNeighbors = (position, rowLenght) => {
  const totalCards = rowLenght ** 2 - 1;
  const borderPosition = isInBorder(position, rowLenght, totalCards);
  let neighbors = [];

  if (borderPosition.validation) {
    const cornerPosition = isInCorner(position, rowLenght, totalCards);

    if (cornerPosition.validation) {
      neighbors = cornerNeighbors(cornerPosition.borderPosition, position, rowLenght);
    } else {
      neighbors = borderNeighbors(borderPosition.borderPosition, position, rowLenght);
    }
  } else {
    neighbors = [
      position - rowLenght,
      (position - rowLenght) - 1,
      (position - rowLenght) + 1,
      position,
      position - 1,
      position + 1,
      position + rowLenght,
      (position + rowLenght) - 1,
      (position + rowLenght) + 1
    ];
  }

  return neighbors;
};

const isInBorder = (position, rowLenght, finalPosition) => {
  const result = {
    validation: true,
    borderPosition: ""
  };

  if (position >= 0 && position <= (rowLenght - 1)) {
    result.borderPosition = "top";
  } else if (position >= (finalPosition - (rowLenght - 1)) && position <= finalPosition) {
    result.borderPosition = "bottom";
  } else if (position % rowLenght === 0) {
    result.borderPosition = "left";
  } else if (position % rowLenght === rowLenght - 1) {
    result.borderPosition = "right";
  } else {
    result.validation = false;
  }

  return result;
};

const isInCorner = (position, rowLenght, totalCards) => {
  const result = {
    validation: true,
    borderPosition: ""
  };

  switch (position) {
    case 0:
      result.borderPosition = "top-left";
      break;
    case rowLenght - 1:
      result.borderPosition = "top-right";
      break;
    case totalCards - (rowLenght - 1):
      result.borderPosition = "bottom-left";
      break;
    case totalCards:
      result.borderPosition = "bottom-right";
      break;
    default:
      result.validation = false;
  }

  return result;
};

const cornerNeighbors = (position, index, rowLenght) => {
  let neighbors = [];

  switch (position) {
    case "top-left":
      neighbors = [
        index,
        index + 1,
        index + rowLenght,
        (index + rowLenght) + 1
      ];
      break;
    case "top-right":
      neighbors = [
        index,
        index - 1,
        index + rowLenght,
        (index + rowLenght) - 1
      ];
      break;
    case "bottom-left":
      neighbors = [
        index,
        index + 1,
        index - rowLenght,
        (index - rowLenght) + 1
      ];
      break;
    case "bottom-right":
      neighbors = [
        index,
        index - 1,
        index - rowLenght,
        (index - rowLenght) - 1
      ];
      break;
  }

  return neighbors;
};

const borderNeighbors = (position, index, rowLenght) => {
  let neighbors = [];

  switch (position) {
    case "top":
      neighbors = [
        index,
        index + 1,
        index - 1,
        index + rowLenght,
        (index + rowLenght) + 1,
        (index + rowLenght) - 1
      ];
      break;
    case "right":
      neighbors = [
        index - rowLenght,
        (index - rowLenght) - 1,
        index,
        index - 1,
        index + rowLenght,
        (index + rowLenght) - 1
      ];
      break;
    case "left":

      neighbors = [
        index - rowLenght,
        (index - rowLenght) + 1,
        index,
        index + 1,
        index + rowLenght,
        (index + rowLenght) + 1
      ];
      break;
    case "bottom":
      neighbors = [
        index,
        index - 1,
        index + 1,
        index - rowLenght,
        (index - rowLenght) - 1,
        (index - rowLenght) + 1
      ];
      break;
  }

  return neighbors;
};
