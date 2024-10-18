export const statuses = [
    'todo',
    'in-progress',
    'done',
    'postponed'
  ];

export const priority = [
    'High',
    'Medium',
    'Low'
]
export interface ITask {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
  status: string;
  description: string;
  priority: string;
  time: Date;
}
export interface ApiResponse {
  limit: number;
  skip: number;
  todos: ITask[];
  total: number;
}

export const tasks = [
    {
      description: "Do something nice for someone you care about, like giving them a small gift or a kind message.",
      status: "todo",
      priority: "High",
    },
    {
      description: "Memorize a poem that you enjoy, recite it, and maybe share it with someone.",
      status: "in-progress",
      priority: "Medium",
    },
    {
      description: "Watch a classic movie from a list of well-known or highly rated films.",
      status: "done",
      priority: "Low",
    },
    {
      description: "Watch a documentary on a topic that interests you to learn something new.",
      status: "todo",
      priority: "High",
    },
    {
      description: "Research and invest a small amount in cryptocurrency as a learning experience.",
      status: "postponed",
      priority: "Low",
    },
    {
      description: "Contribute to an open-source project, either by coding or making a monetary donation.",
      status: "done",
      priority: "Medium",
    },
    {
      description: "Solve a Rubik's cube, either by practicing or learning new solving techniques.",
      status: "todo",
      priority: "High",
    },
    {
      description: "Bake pastries for yourself and share some with a neighbor as a kind gesture.",
      status: "in-progress",
      priority: "Medium",
    },
    {
      description: "Go see a Broadway production or a live theatrical performance.",
      status: "postponed",
      priority: "Low",
    },
    {
      description: "Write a heartfelt thank you letter to someone who has positively impacted your life.",
      status: "done",
      priority: "High",
    },
    {
      description: "Invite friends over for a fun game night, either with board games or video games.",
      status: "todo",
      priority: "Medium",
    },
    {
      description: "Have a friendly football scrimmage with your friends at a local park or field.",
      status: "in-progress",
      priority: "Low",
    },
    {
      description: "Send a text to a friend you haven’t talked to in a while to reconnect.",
      status: "postponed",
      priority: "Medium",
    },
    {
      description: "Organize your pantry, declutter old items, and arrange everything neatly.",
      status: "done",
      priority: "High",
    },
    {
      description: "Buy a new decoration for your house to refresh its look or add some personality.",
      status: "todo",
      priority: "Low",
    },
    {
      description: "Plan a vacation you’ve always wanted to take, researching destinations and budgeting.",
      status: "in-progress",
      priority: "High",
    },
    {
      description: "Clean out your car, remove trash, and maybe give it a wash or vacuum.",
      status: "postponed",
      priority: "Low",
    },
    {
      description: "Draw and color a mandala as a creative and relaxing activity.",
      status: "done",
      priority: "Medium",
    },
    {
      description: "Create a cookbook that includes your favorite recipes, either for yourself or to share.",
      status: "todo",
      priority: "High",
    },
    {
      description: "Bake a pie with some friends, enjoying the process and the result together.",
      status: "in-progress",
      priority: "Medium",
    },
    {
      description: "Start a compost pile to recycle organic waste and help the environment.",
      status: "postponed",
      priority: "Low",
    },
    {
      description: "Take a hike at a local park to enjoy nature and get some exercise.",
      status: "done",
      priority: "High",
    },
    {
      description: "Enroll in a class at a community center that aligns with your interests.",
      status: "todo",
      priority: "Medium",
    },
    {
      description: "Research a topic you’re interested in and expand your knowledge about it.",
      status: "in-progress",
      priority: "Low",
    },
    {
      description: "Plan a trip to another country, including destinations, activities, and budgets.",
      status: "postponed",
      priority: "Medium",
    },
    {
      description: "Practice and improve your touch typing skills to increase your speed and accuracy.",
      status: "done",
      priority: "High",
    },
    {
      description: "Learn the basics of Express.js, a web framework for Node.js, by building a small app.",
      status: "todo",
      priority: "Low",
    },
    {
      description: "Start learning calligraphy, practicing strokes, and creating beautiful lettering.",
      status: "in-progress",
      priority: "Medium",
    },
    {
      description: "Have a fun photo session with friends, capturing memories and creative shots.",
      status: "postponed",
      priority: "High",
    },
    {
      description: "Go to the gym to exercise, focusing on your health and fitness goals.",
      status: "done",
      priority: "Medium",
    }
  ];
  
  
// export interface ApiResponse {
//   message: string;
//   result: string;
//   data: any;
// }
