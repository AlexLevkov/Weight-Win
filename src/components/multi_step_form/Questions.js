export const questions = [
  {
    section: 1,
    items: [
      {
        label: 'Hello and wellcome to Weight Win! What is your name?',
        type: 'text',
        value: 'userName'
      },
      // {
      //   label: 'password',
      //   type: 'password',
      //   value: 'password'
      // }
    ]
  },
  {
    section: 2,
    items: [
      {
        label: 'What is your current weight?',
        type: 'text',
        value: 'currWeight'
      },
      {
        label: 'What is your ideal weight?',
        type: 'text',
        value: 'goalWeight'
      },
      // {
      //   label: 'State',
      //   type: 'select',
      //   value: 'state',
      //   options: [ 'State 1', 'State 2']
      // }
    ]
  },
  {
    section: 3,
    items: [
      {
        label: `What is your motivation for getting in the right weight?
        Please complete the following sentence, I want to... `,
        type: 'text',
        value: 'affirm'
      }
    ]
  },
  {
    section: 4,
    items: [
      {
        label: 'Well done! We are ready to start',
        type: 'information',
        value: 'username'
      },
      // {
      //   label: 'password',
      //   type: 'password',
      //   value: 'password'
      // }
    ]
  },
]
