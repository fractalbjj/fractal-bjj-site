export type SubBlockCategory =
  | 'sub-system'
  | 'mechanics'
  | 'specific-dilemmas'
  | 'sub-positions'
  | 'system-adjacent';

export type SubBlockStatus = 'stub' | 'in-dev' | 'live';

export interface SubBlock {
  slug: string;
  parent_system: string;
  parent_block?: string;
  category: SubBlockCategory;
  title: string;
  preview: string;
  status: SubBlockStatus;
}

export const subblocks: SubBlock[] = [
  // Back Attack — sub-systems
  { slug: 'straitjacket-system', parent_system: 'back-attack-system', category: 'sub-system', title: 'Straitjacket System', preview: 'Primary framework for the rear naked choke.', status: 'stub' },

  // Back Attack — mechanics
  { slug: 'rnc-mechanics', parent_system: 'back-attack-system', category: 'mechanics', title: 'RNC mechanics', preview: 'The finish itself, single- and two-handed.', status: 'stub' },
  { slug: 'rear-triangle-mechanics', parent_system: 'back-attack-system', category: 'mechanics', title: 'Rear triangle mechanics', preview: 'Triangle entries and finishes from the back.', status: 'stub' },
  { slug: 'mandible-strangle', parent_system: 'back-attack-system', category: 'mechanics', title: 'Mandible strangle', preview: 'Jaw-line attack from the underhook side.', status: 'stub' },
  { slug: 'scottish-twister', parent_system: 'back-attack-system', category: 'mechanics', title: 'Scottish twister', preview: 'Spinal lock when the back goes to the mat.', status: 'stub' },
  { slug: 'side-switch-protocol', parent_system: 'back-attack-system', category: 'mechanics', title: 'Side switch protocol', preview: 'Crossing sides without losing control.', status: 'stub' },

  // Back Attack — specific dilemmas
  { slug: 'underhook-vs-overhook-side', parent_system: 'back-attack-system', category: 'specific-dilemmas', title: 'Underhook vs overhook side', preview: 'Side-selection trade-offs in attack and retention.', status: 'stub' },

  // Back Attack — sub-positions
  { slug: 'body-triangle', parent_system: 'back-attack-system', category: 'sub-positions', title: 'Body triangle', preview: 'The lower-body lock and how to attack from it.', status: 'stub' },
  { slug: 'crucifix', parent_system: 'back-attack-system', category: 'sub-positions', title: 'Crucifix', preview: 'Trapped-arm position from turtle breakdown.', status: 'stub' },
  { slug: 'belly-down-back-control', parent_system: 'back-attack-system', category: 'sub-positions', title: 'Belly-down back control', preview: 'When the opponent fully exposes the back.', status: 'stub' },

  // Back Attack — system-adjacent
  { slug: 'the-truck', parent_system: 'back-attack-system', category: 'system-adjacent', title: 'The Truck', preview: 'Hybrid bridging back attack and leg locks.', status: 'stub' },
];

export function getSubBlocksForSystem(
  systemSlug: string,
  parentBlock: string | null = null
): SubBlock[] {
  return subblocks.filter(
    sb => sb.parent_system === systemSlug && (sb.parent_block ?? null) === parentBlock
  );
}

export function getNestedCount(subblockSlug: string): number {
  return subblocks.filter(sb => sb.parent_block === subblockSlug).length;
}
