import * as utils from '../utils';

export const tasks = [
  {
    id: 1,
    priority: 1,
    description: 'Pay phone bill',
    location: 'Online',
    entryDate: utils.getFormattedDate(-30),
    dueDate: utils.getFormattedDate(0),
    expedited: true
  },
  {
    id: 2,
    priority: 2,
    description: 'Pick up dry cleaning',
    location: 'Laundromat',
    entryDate: utils.getFormattedDate(-1),
    dueDate: utils.getFormattedDate(1),
    expedited: false
  },
  {
    id: 3,
    priority: 3,
    description: 'Open savings account',
    location: 'Credit union',
    entryDate: utils.getFormattedDate(-15),
    dueDate: utils.getFormattedDate(15),
    expedited: false
  },
  {
    id: 4,
    priority: 4,
    description: 'Take dog to vet',
    location: 'Animal hospital',
    entryDate: utils.getFormattedDate(-180),
    dueDate: utils.getFormattedDate(5),
    expedited: false
  },
  {
    id: 5,
    priority: 5,
    description: 'Return movie rentals',
    location: 'Redbox',
    entryDate: utils.getFormattedDate(-2),
    dueDate: utils.getFormattedDate(-1),
    expedited: false
  },
  {
    id: 6,
    priority: 6,
    description: 'Paint house',
    location: 'Home',
    entryDate: utils.getFormattedDate(-60),
    dueDate: utils.getFormattedDate(25),
    expedited: false
  },
  {
    id: 7,
    priority: 7,
    description: 'Learn React.js',
    location: 'Online',
    entryDate: utils.getFormattedDate(-30),
    dueDate: utils.getFormattedDate(18),
    expedited: false
  }
];