export type TaskType = 'simple' | 'long_horizon_mobile' | 'reasoning';

export interface Task {
  id: string;
  title: string;
  description: string;
  type: TaskType;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  imageUrl?: string;
  tags: string[];
}

export const tasks: Task[] = [
  {
    id: 'cups_triangle',
    title: 'Arrange Cups in Triangle',
    description: 'Arrange three cups into an equilateral triangle configuration.',
    type: 'simple',
    difficulty: 'Easy',
    tags: ['Pick & Place', 'Precision'],
  },
  {
    id: 'open_drawer',
    title: 'Open Drawer',
    description: 'Identify the handle and pull open the drawer to a specific distance.',
    type: 'simple',
    difficulty: 'Medium',
    tags: ['Articulated Object', 'Force Control'],
  },
  {
    id: 'mobile_fetch',
    title: 'Mobile Fetch',
    description: 'Navigate to the kitchen area, find the apple, and bring it back to the table.',
    type: 'long_horizon_mobile',
    difficulty: 'Hard',
    tags: ['Mobile', 'Navigation', 'Grasping'],
  },
  {
    id: 'sort_trash',
    title: 'Trash Sorting',
    description: 'Identify objects and sort them into recyclable and non-recyclable bins.',
    type: 'reasoning',
    difficulty: 'Medium',
    tags: ['Semantic Understanding', 'Classification'],
  },
  // Add more dummy tasks as needed
];

