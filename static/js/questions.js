// Job-specific questions
const jobQuestions = {
  'Software Engineer': [
    {
      question: 'What is the time complexity of QuickSort in the average case?',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
      correct: 1
    },
    {
      question: 'Which of these is not a RESTful API method?',
      options: ['GET', 'POST', 'FETCH', 'DELETE'],
      correct: 2
    },
    {
      question: 'What does SQL stand for?',
      options: ['Structured Query Language', 'Simple Query Language', 'Standard Query Logic', 'System Query Language'],
      correct: 0
    },
    {
      question: 'Which data structure uses LIFO?',
      options: ['Queue', 'Stack', 'Array', 'Tree'],
      correct: 1
    },
    {
      question: 'What is the primary purpose of a constructor in OOP?',
      options: ['To destroy objects', 'To initialize object properties', 'To define class methods', 'To inherit from parent class'],
      correct: 1
    }
  ],
  'Software Tester': [
    {
      question: 'What type of testing validates the complete system?',
      options: ['Unit Testing', 'Integration Testing', 'System Testing', 'Module Testing'],
      correct: 2
    },
    {
      question: 'Which is not a type of software testing?',
      options: ['Black Box Testing', 'White Box Testing', 'Red Box Testing', 'Grey Box Testing'],
      correct: 2
    },
    {
      question: 'What does TDD stand for?',
      options: ['Test Driven Development', 'Test Design Development', 'Test Debug Development', 'Test Deploy Development'],
      correct: 0
    },
    {
      question: 'Which tool is commonly used for automated testing?',
      options: ['Selenium', 'Photoshop', 'Excel', 'Notepad'],
      correct: 0
    },
    {
      question: 'What is a test case?',
      options: ['A bug report', 'A set of conditions to verify functionality', 'A piece of code', 'A test environment'],
      correct: 1
    }
  ],
  'HR Manager': [
    {
      question: 'What is the primary purpose of an exit interview?',
      options: ['To process final payment', 'To gather feedback for improvement', 'To issue certificates', 'To plan farewell'],
      correct: 1
    },
    {
      question: 'Which is a key component of employee onboarding?',
      options: ['Performance review', 'Resignation process', 'Orientation program', 'Exit interview'],
      correct: 2
    },
    {
      question: 'What is HRIS?',
      options: ['HR Interview System', 'HR Information System', 'HR Internal Service', 'HR Integration System'],
      correct: 1
    },
    {
      question: 'Which law governs workplace discrimination?',
      options: ['FMLA', 'FLSA', 'Title VII', 'COBRA'],
      correct: 2
    },
    {
      question: 'What is the purpose of KPI in HR?',
      options: ['Key Performance Indicators', 'Knowledge Process Integration', 'Key Process Implementation', 'Knowledge Performance Index'],
      correct: 0
    }
  ],
  'Marketing Specialist': [
    {
      question: 'What is SEO?',
      options: ['Search Engine Optimization', 'Social Engine Operation', 'Search Engine Operation', 'Social Engine Optimization'],
      correct: 0
    },
    {
      question: 'Which metric measures email marketing success?',
      options: ['Bounce Rate', 'Click-Through Rate', 'Page Views', 'Loading Time'],
      correct: 1
    },
    {
      question: 'What is a KPI in marketing?',
      options: ['Key Product Information', 'Key Performance Indicator', 'Knowledge Process Index', 'Key Process Integration'],
      correct: 1
    },
    {
      question: 'Which platform is best for B2B marketing?',
      options: ['TikTok', 'LinkedIn', 'Instagram', 'Snapchat'],
      correct: 1
    },
    {
      question: 'What is content marketing?',
      options: ['Paid advertising', 'Direct mail', 'Creating valuable content', 'Cold calling'],
      correct: 2
    }
  ],
  'Content Writer': [
    {
      question: 'What is a call-to-action (CTA)?',
      options: ['A phone call', 'A prompt to take action', 'A website link', 'An email address'],
      correct: 1
    },
    {
      question: 'Which is most important in web content?',
      options: ['Length', 'Keywords', 'Readability', 'Images'],
      correct: 2
    },
    {
      question: 'What is a meta description?',
      options: ['Page title', 'Search result summary', 'Article category', 'Author bio'],
      correct: 1
    },
    {
      question: 'What is the ideal blog post length for SEO?',
      options: ['100-300 words', '300-600 words', '1000-1500 words', '2000+ words'],
      correct: 2
    },
    {
      question: 'What is passive voice?',
      options: ['When subject performs action', 'When action is performed on subject', 'When there is no action', 'When there is no subject'],
      correct: 1
    }
  ],
  'Atlassian Administrator/Consultant': [
    {
      question: 'What is Jira primarily used for?',
      options: ['Email management', 'Project tracking', 'File storage', 'Video conferencing'],
      correct: 1
    },
    {
      question: 'Which is not an Atlassian product?',
      options: ['Confluence', 'Jira', 'Trello', 'Asana'],
      correct: 3
    },
    {
      question: 'What is a Jira workflow?',
      options: ['Email template', 'Status progression', 'User group', 'Dashboard widget'],
      correct: 1
    },
    {
      question: 'What is Confluence used for?',
      options: ['Task tracking', 'Team collaboration', 'Time tracking', 'Resource planning'],
      correct: 1
    },
    {
      question: 'What is a Jira issue type?',
      options: ['User role', 'Work item category', 'Project filter', 'Dashboard view'],
      correct: 1
    }
  ]
};
