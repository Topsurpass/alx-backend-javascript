/**
 * A function that returns an array of objects, each with different values
 */
import Classroom from './0-classroom';

export default function initializeRooms() {
  return [19, 20, 34].map((x) => new Classroom(x));
}
