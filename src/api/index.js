import Chance from "chance";

const chance = Chance();

export const fakeDate = () => {
  return chance.name({ middle: true });
};
