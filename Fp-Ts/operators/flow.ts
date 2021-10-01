import { flow } from 'fp-ts/lib/function';
import { User } from './pipe';

export interface Player extends User {
  position: string;
  videos: number;
}

function fillInfo(
  name: string,
  lastName: string,
  age: number,
  position: string,
  videos: number
) {
  const player: Player = {
    name,
    lastName,
    age,
    position,
    videos,
  };
  return player;
}

function getPlayerlevel(player: Player) {
  let level: string;
  switch (player.videos) {
    case 1:
      level = `${player.name} ${player.lastName} is at a low level`;
      break;
    case 2:
      level = `${player.name} ${player.lastName} is at a medium level`;
      break;
    case 3:
      level = `${player.name} ${player.lastName} is at a high level`;
      break;
    default:
      level = `The level of the player is unknown`;
  }
  return level;
}

const callFuntions = flow(fillInfo, getPlayerlevel);

console.log(callFuntions('oloufemi', 'ADEKS', 28, 'Forward', 2));
