import getRandomInt from "../getRandomInt/getRandomInt";

const randomBoard = () => {
  const boards = [
    {
      id: 1,
      ship1: ["3B", "3C", "3D", "3E"],
      ship2: ["7E", "8E", "9E"],
      ship3: ["1F", "1G", "1H"],
      ship4: ["10J", "10I"],
      ship5: ["6C", "6B"],
      ship6: ["5H", "5G"],
      ship7: ["10C"],
      ship8: ["7H"],
      ship9: ["1C"],
      ship10: ["5E"],
    },

    {
      id: 2,
      ship1: ["6I", "7I", "8I", "9I"],
      ship2: ["9B", "9C", "9D"],
      ship3: ["2H", "3H", "4H"],
      ship4: ["1B", "2B"],
      ship5: ["4A", "4B"],
      ship6: ["1E", "1F"],
      ship7: ["6E"],
      ship8: ["7B"],
      ship9: ["4F"],
      ship10: ["8F"],
    },

    {
      id: 3,
      ship1: ["5D", "5E", "5F", "5G"],
      ship2: ["1D", "2D", "3D"],
      ship3: ["9B", "9C", "9D"],
      ship4: ["2J", "3J"],
      ship5: ["7I", "8I"],
      ship6: ["4A", "4B"],
      ship7: ["1G"],
      ship8: ["10G"],
      ship9: ["7A"],
      ship10: ["3H"],
    },

    {
      id: 4,
      ship1: ["2I", "3I", "4I", "5I"],
      ship2: ["7F", "8F", "9F"],
      ship3: ["8A", "9A", "10A"],
      ship4: ["1B", "1C"],
      ship5: ["5D", "5E"],
      ship6: ["8I", "8J"],
      ship7: ["4A"],
      ship8: ["8C"],
      ship9: ["3E"],
      ship10: ["5G"],
    },

    {
      id: 5,
      ship1: ["6D", "6E", "6F", "6G"],
      ship2: ["2H", "2I", "2J"],
      ship3: ["9E", "9F", "9G"],
      ship4: ["9A", "8A"],
      ship5: ["2C", "3C"],
      ship6: ["4I", "5I"],
      ship7: ["8I"],
      ship8: ["1A"],
      ship9: ["10J"],
      ship10: ["5B"],
    },

    {
      id: 6,
      ship1: ["6J", "7J", "8J", "9J"],
      ship2: ["7C", "8C", "9C"],
      ship3: ["5E", "5F", "5G"],
      ship4: ["8F", "8G"],
      ship5: ["9A", "10A"],
      ship6: ["4I", "5I"],
      ship7: ["7A"],
      ship8: ["3B"],
      ship9: ["2H"],
      ship10: ["10H"],
    },

    {
      id: 7,
      ship1: ["10D", "10E", "10F", "10G"],
      ship2: ["2A", "3A", "4A"],
      ship3: ["6E", "6F", "6G"],
      ship4: ["1E", "1F"],
      ship5: ["8I", "8J"],
      ship6: ["3D", "4D"],
      ship7: ["4I"],
      ship8: ["8C"],
      ship9: ["9A"],
      ship10: ["3G"],
    },

    {
      id: 8,
      ship1: ["2F", "3F", "4F", "5F"],
      ship2: ["8G", "9G", "10G"],
      ship3: ["6B", "6C", "6D"],
      ship4: ["3B", "4B"],
      ship5: ["6H", "6I"],
      ship6: ["1J", "2J"],
      ship7: ["4D"],
      ship8: ["9E"],
      ship9: ["4I"],
      ship10: ["8C"],
    },

    {
      id: 9,
      ship1: ["7A", "8A", "9A", "10A"],
      ship2: ["3A", "4A", "5A"],
      ship3: ["8J", "9J", "10J"],
      ship4: ["6I", "6J"],
      ship5: ["1A", "1B"],
      ship6: ["2J", "3J"],
      ship7: ["4F"],
      ship8: ["7D"],
      ship9: ["6F"],
      ship10: ["4C"],
    },

    {
      id: 10,
      ship1: ["4E", "5E", "6E", "7E"],
      ship2: ["8A", "8B", "8C"],
      ship3: ["2D", "2E", "2F"],
      ship4: ["8G", "9G"],
      ship5: ["1H", "2H"],
      ship6: ["6A", "6B"],
      ship7: ["2B"],
      ship8: ["4G"],
      ship9: ["5J"],
      ship10: ["10C"],
    },
  ];

  return boards[getRandomInt(0, boards.length - 1)];
};

export default randomBoard;
