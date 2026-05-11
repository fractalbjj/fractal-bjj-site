export type ArchetypeKey =
  | 'leg-locker'
  | 'heavy-pressure'
  | 'dynamic-cardio'
  | 'sub-sniper'
  | 'wrestler'
  | 'scrambler'
  | 'guard-player'
  | 'all-rounder';

export interface Archetype {
  key: ArchetypeKey;
  label: string;
  colorRgb: string;
  athletes: Array<{ name: string; tagline: string }>;
  totalAthleteCount: number;
}

export const archetypes: Archetype[] = [
  {
    key: 'leg-locker',
    label: 'Leg locker',
    colorRgb: '161, 53, 37',
    totalAthleteCount: 10,
    athletes: [
      { name: 'Mateusz Szczecinski', tagline: 'Shot-gun ankle lock specialist.' },
      { name: "Eoghan O'Flanagan", tagline: 'Technical heel hook specialist.' },
      { name: 'Mikey Musumeci', tagline: "The 'Mikey Lock' and elite straight ankle game." },
    ],
  },
  {
    key: 'heavy-pressure',
    label: 'Heavy pressure',
    colorRgb: '107, 85, 32',
    totalAthleteCount: 9,
    athletes: [
      { name: 'Ffion Davies', tagline: 'Intense passing and top-side dominance.' },
      { name: 'Kaynan Duarte', tagline: 'Absolute power and heavy tripod passing.' },
      { name: 'JT Torres', tagline: "The 'Essential' top pressure and back-take game." },
    ],
  },
  {
    key: 'dynamic-cardio',
    label: 'Dynamic cardio',
    colorRgb: '213, 120, 36',
    totalAthleteCount: 10,
    athletes: [
      { name: 'Dorian Olivarez', tagline: 'Blistering speed and non-stop wrestling.' },
      { name: 'Andrew Tackett', tagline: 'Absolute Tasmanian Devil on the mats.' },
      { name: 'PJ Barch', tagline: 'High-intensity wrestling and scrambles that never stop.' },
    ],
  },
  {
    key: 'sub-sniper',
    label: 'Sub. sniper',
    colorRgb: '107, 58, 160',
    totalAthleteCount: 9,
    athletes: [
      { name: 'Kade Ruotolo', tagline: "The D'Arce and Buggy Choke king." },
      { name: 'Owen Jones', tagline: 'Highly technical European submission specialist.' },
      { name: 'Garry Tonon', tagline: "A 'glass cannon' style where he takes huge risks to find the finish." },
    ],
  },
  {
    key: 'wrestler',
    label: 'Wrestler',
    colorRgb: '138, 90, 58',
    totalAthleteCount: 6,
    athletes: [
      { name: 'Nicky Rodriguez', tagline: 'Transitioned from wrestling to elite BJJ, using explosive takedowns to dominate.' },
      { name: 'Brandon Reed', tagline: 'Elite collegiate background transitioned into a heavy No-Gi game.' },
      { name: 'Michael Pixley', tagline: 'Famous for his blend of upper body focused wrestling and throws.' },
    ],
  },
  {
    key: 'scrambler',
    label: 'Scrambler',
    colorRgb: '90, 154, 74',
    totalAthleteCount: 8,
    athletes: [
      { name: 'Jay Rodriguez', tagline: "The 'J-Rod' scramble — aggressive, explosive, and unorthodox." },
      { name: 'Renato Canuto', tagline: 'The most acrobatic scrambler in the game today.' },
      { name: 'Kennedy Maciel', tagline: 'Inherited the ability to float and recover position from any angle.' },
    ],
  },
  {
    key: 'guard-player',
    label: 'Guard player',
    colorRgb: '46, 107, 138',
    totalAthleteCount: 8,
    athletes: [
      { name: 'Levi Jones-Leary', tagline: 'The best No-Gi Bolos and K-Guard in the game today.' },
      { name: 'Paulo Miyao', tagline: 'Famous for the Berimbolo and a guard that was virtually impossible to pass.' },
      { name: 'Lachlan Giles', tagline: 'Master of the K-Guard and outside leg entries.' },
    ],
  },
  {
    key: 'all-rounder',
    label: 'All-rounder',
    colorRgb: '122, 116, 104',
    totalAthleteCount: 10,
    athletes: [
      { name: 'Jozef Chen', tagline: 'The modern prodigy of technical systems.' },
      { name: 'Gordon Ryan', tagline: 'Currently the most complete grappler in history.' },
      { name: 'Mica Galvao', tagline: 'Technical, explosive, and elite in every position.' },
    ],
  },
];

// Per-system / per-archetype strength scores.
// Values are indexed in the same order as the `archetypes` array above:
// [leg-locker, heavy-pressure, dynamic-cardio, sub-sniper, wrestler, scrambler, guard-player, all-rounder]
// 0 = baseline / no specialisation; 1, 2, 3 per the locked scoring scale.
export const systemStrengths: Record<number, number[]> = {
  1:  [0, 3, 3, 1, 1, 1, 0, 0],  // Passing System
  2:  [0, 3, 0, 0, 2, 0, 0, 0],  // Pinning System
  3:  [0, 1, 0, 2, 0, 0, 0, 0],  // Front Headlock System
  4:  [0, 1, 0, 0, 0, 0, 0, 0],  // Top Turtle System
  5:  [1, 0, 0, 1, 0, 0, 2, 0],  // Back Attack System
  6:  [0, 2, 0, 3, 0, 0, 0, 0],  // Pin Submissions
  7:  [3, 0, 0, 2, 0, 0, 2, 0],  // Offensive Leg Lock System
  8:  [2, 0, 0, 1, 0, 0, 3, 0],  // Offensive Guard System
  9:  [1, 0, 1, 0, 2, 0, 0, 0],  // Wrestle Up System
  10: [0, 0, 0, 0, 3, 0, 0, 0],  // Offensive Wrestling System
  11: [0, 0, 0, 0, 0, 0, 3, 0],  // Guard Retention
  12: [0, 0, 0, 0, 0, 0, 0, 0],  // Pin Escapes (intentionally all-zero)
  13: [0, 0, 1, 0, 2, 1, 0, 0],  // Front Headlock Defence
  14: [0, 0, 1, 0, 2, 1, 0, 0],  // Bottom Turtle Defence
  15: [0, 0, 0, 0, 0, 1, 0, 0],  // Back Control Defence
  16: [0, 0, 0, 0, 0, 0, 0, 0],  // Pin Submission Escapes (intentionally all-zero)
  17: [3, 0, 1, 0, 0, 1, 0, 0],  // Leg Lock Defence
  18: [0, 0, 1, 0, 3, 1, 0, 0],  // Defensive Wrestling
  19: [0, 0, 3, 0, 2, 3, 0, 0],  // Scrambling
};
