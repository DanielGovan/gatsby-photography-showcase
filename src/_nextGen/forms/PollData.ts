import { PollQuestionProps } from './PollQuestion';

export const shootQuestions: PollQuestionProps[] = [
  {
    labelText: 'Lorem ipsum?',
    fieldName: 'prevShoots',
    multiAnswer: false,
    otherOption: false,
    contextImage: 'context1',
    questions: ['option1', 'option2', 'option3', 'option4'],
    explanation:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum rerum iure excepturi. Ex soluta harum iure sit ratione adipisci enim.',
  },

  {
    labelText: 'Lorem ipsum?',
    fieldName: 'posingStyle',
    contextImage: 'context3',
    multiAnswer: false,
    otherOption: false,
    questions: ['option1', 'option2', 'option3', 'option4'],
    explanation:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum rerum iure excepturi. Ex soluta harum iure sit ratione adipisci enim.',
  },
  {
    labelText: 'Lorem ipsum?',
    fieldName: 'soundTrack',
    multiAnswer: true,
    otherOption: true,
    contextImage: 'context4',
    questions: ['option1', 'option2', 'option3', 'option4'],
    explanation:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum rerum iure excepturi. Ex soluta harum iure sit ratione adipisci enim.',
  },
  {
    labelText: 'Lorem ipsum?',
    fieldName: 'roomVibe',
    contextImage: 'context5',
    multiAnswer: true,
    otherOption: true,
    questions: ['option1', 'option2', 'option3', 'option4'],
    explanation:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum rerum iure excepturi. Ex soluta harum iure sit ratione adipisci enim.',
  },
  {
    labelText: 'Lorem ipsum?',
    fieldName: 'skinAmount2',
    multiAnswer: true,
    otherOption: false,
    // contextImage: 'context8',
    questions: ['option1', 'option2', 'option3', 'option4'],
    images: [
      'face',
      'chest',
      'clubwear',
      'fancy',
      'limbs',
      'implied',
      'artistic',
      // 'erotic',
    ],
    explanation:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum rerum iure excepturi. Ex soluta harum iure sit ratione adipisci enim.',
  },
  {
    labelText: 'Lorem ipsum?',
    fieldName: 'gimmicks',
    multiAnswer: true,
    otherOption: true,
    // contextImage: 'context4',
    questions: ['option1', 'option2', 'option3', 'option4'],
    images: ['bubbles', 'doublebubble', 'smoke', 'mirror', 'lights', 'natural', 'couple'],
    explanation:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum rerum iure excepturi. Ex soluta harum iure sit ratione adipisci enim.',
  },
  {
    labelText: 'Lorem ipsum?',
    fieldName: 'timeToStudio',
    multiAnswer: false,
    otherOption: false,
    contextImage: 'context7',
    questions: ['option1', 'option2', 'option3', 'option4'],
    explanation:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum rerum iure excepturi. Ex soluta harum iure sit ratione adipisci enim.',
  },
  {
    labelText: 'Lorem ipsum?',
    fieldName: 'shootType2',
    multiAnswer: true,
    otherOption: true,
    contextImage: 'context6',
    questions: ['option1', 'option2', 'option3', 'option4'],
    explanation:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum rerum iure excepturi. Ex soluta harum iure sit ratione adipisci enim.',
  },
];
