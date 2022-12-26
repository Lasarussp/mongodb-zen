//show dbs 

//use zen

//db

//show collection 

db.zen.insertMany([ {users:  "vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga "   ,
codekata:  "75, 100, 85, 60, 55, 45, 20, 90 "   ,
attendance:{present: 15   ,absent:0   ,date:6},
topics: "Javascript" ,
tasks:{name: "For loop" ,submit:12 ,notsubmit:3 },
company_drives:{name: "Amazon" ,date:7,user_appeared: "vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga "   },
mentors:{name: "Deepika" ,mentee:20}
},
{users:  "vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga "   ,
codekata:  "75, 100, 85, 60, 55, 45, 20, 90"   ,
attendance:{present: 11,absent:4,date:7},
topics: "Mapping" ,
tasks:{name: "Map the arry" ,submit:10 ,notsubmit:5  },
company_drives:{name: "Flipkart" ,date:8,user_appeared:  "vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga "}  ,
mentors:{name: "Banu" ,mentee:13}
},

{users:  "vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga "   ,
codekata:  "70, 35, 55, 70, 95, 100, 45, 85"   ,
attendance:{present:11 ,absent:4   ,date:9},
topics: "HTML" ,
tasks:{name: "Block element" ,submit:14, notsubmit: 1 },
company_drives:{name: "Zoho" ,date:10,user_appeared: "vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga "  },
mentors:{name: "Banu" ,mentee:20}
},
{users:  "vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga "  ,
codekata:  "80, 25, 40, 65, 85, 96, 100, 35 "  ,
attendance:{present:13 ,absent: 2  ,date:15},
topics: "CSS" ,
tasks:{name: "Design grid" ,submit: 11,notsubmit: 4 },
company_drives:{name: "TCS" ,date:15,user_appeared: "vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga " },
mentors:{name: "Deepika" ,mentee:16}
},
{users:   "vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga " ,
codekata:  "100, 36, 49, 27, 99, 76, 56, 29"   ,
attendance:{present:10,absent:5  ,date:16},
topics: "HTML" ,
tasks:{name: "Design a webpage" ,submit:14 ,notsubmit: 1},
company_drives:{name: "Tata" ,date:16,user_appeared:  "vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga "   },
mentors:{name: "Sai Mohan" ,mentee:19}
},
{users: "vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga "  ,
codekata:  "77, 56, 38, 96, 50, 28, 88, 51"   ,
attendance:{present:10,absent:5  ,date:17},
topics: "DOM" ,
tasks:{name: "Design pagination" ,submit:8 ,notsubmit: 7 },
company_drives:{name: "Google" ,date:19,user_appeared:  "vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga "  },
mentors:{name: "Sai Mohan" ,mentee:12}
},
{users:  "vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga "   ,
codekata:  "66, 38, 47, 50, 81, 37, 96, 44"   ,
attendance:{present:10,absent:5   ,date:18},
topics: "React JS" ,
tasks:{name: "Ui page" ,submit:9,notsubmit:6   },
company_drives:{name: "HI-Q" ,date:19,user_appeared:  "vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga "   },
mentors:{name: "Vinay" ,mentee:10}
},
{users:  "vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga "  ,
codekata:  "44, 78, 90, 67, 39, 84, 58, 28"   ,
attendance:{present:11 ,absent: 4  ,date:29},
topics: "NodeJS" ,
tasks:{name: "Create a server" ,submit:15,notsubmit:0   },
company_drives:{name: "Delta" ,date:23,user_appeared: "vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga " },
mentors:{name: "Vinay" ,mentee:18}
},
{users:  "vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga " ,
codekata:  "55, 38, 90, 78, 56, 83, 45, 78"   ,
attendance:{present:15,absent: 2  ,date:30},
topics: "ExpressJS" ,
tasks:{name: "Start a server" ,submit: 10,notsubmit: 5 },
company_drives:{name: "Coffee-Day" ,date:24,user_appeared:  "vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga "  },
mentors:{name: "Prakash" ,mentee:17}
}
]);


//1. Find all the topics and tasks which are thought in the month of October
db.zen.find({},{_id:0,topics:1,tasks:{name:1}})
[
{
    topics: 'Javascript',
    tasks: { name: 'For loop' }
  },
  {
    topics: 'Mapping',
    tasks: { name: 'Map the array' }
  },
  {
    topics: 'HTML',
    tasks: { name: 'Block element' }
  },
  {
    topics: 'CSS',
    tasks: { name: 'Design grid' }
  },
  {
    topics: 'HTML',
    tasks: { name: 'Design a webpage' }
  },
  {
    topics: 'DOM',
    tasks: {
      name: 'Design pagination'
    }
  },
  {
    topics: 'React JS',
    tasks: { name: 'Ui page' }
  },
  {
    topics: 'NodeJS',
    tasks: { name: 'Create a server' }
  },
  {
    topics: 'ExpressJs',
    tasks: { name: 'Start a server' }
  }
]
//2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.zen.find({
   "company_drives.date": {
    $gte: 15, $lte:31
   }
}, 
   {
    _id:0, company_drives:{
        name:1, date:1
    }
   }
)
[
    { company_drives: { name: 'TCS', date: 15 } },
    { company_drives: { name: 'Tata', date: 16 } },
    { company_drives: { name: 'Google', date: 19 } },
    { company_drives: { name: 'HI-Q', date: 19 } },
    { company_drives: { name: 'Delta', date: 23 } },
    { company_drives: { name: 'Coffee-Day', date: 24 } }
  ]

  //3.Find all the company drives and students who are appeared for the placement.
  db.zen.find({},{_id:0,company_drives:{name: 1, user_appeared:1}})
  [
    {
      company_drives: {
        name: 'Amazon',
        user_appeared: 'vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga '       
      }
    },
    {
      company_drives: {
        name: 'Flipkart',
        user_appeared: 'vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga '       
      }
    },
    {
      company_drives: {
        name: 'Zoho',
        user_appeared: 'vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga '       
      }
    },
    {
      company_drives: {
        name: 'TCS',
        user_appeared: 'vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga '       
      }
    },
    {
      company_drives: {
        name: 'Tata',
        user_appeared: 'vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga '       
      }
    },
    {
      company_drives: {
        name: 'Google',
        user_appeared: 'vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga '       
      }
    },
    {
      company_drives: {
        name: 'HI-Q',
        user_appeared: 'vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga '       
      }
    },
    {
      company_drives: {
        name: 'Delta',
        user_appeared: 'vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga '       
      }
    },
    {
      company_drives: {
        name: 'Coffee-Day',
        user_appeared: 'vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga '       
      }
    }
  ] 

  //4.Find the number of problems solved by the user in codekata
  db.zen.find({},{_id:0,users:1, codekata:1})
  [
    {
      users: 'vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga ',
      codekata: '70, 35, 55, 70, 95, 100, 45, 85 '
    },
    {
      users: 'vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga ',
      codekata: '75, 100, 85, 60, 55, 45, 20, 90'
    },
    {
      users: 'vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga ',
      codekata: '70, 35, 55, 70, 95, 100, 45, 85'
    },
    {
      users: 'vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga ',
      codekata: '80, 25, 40, 65, 85, 96, 100, 35 '
    },
    {
      users: 'vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga ',
      codekata: '100, 36, 49, 27, 99, 76, 56, 29'
    },
    {
      users: 'vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga ',
      codekata: '77, 56, 38, 96, 50, 28, 88, 51'
    },
    {
      users: 'vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga ',
      codekata: '66, 38, 47, 50, 81, 37, 96, 44'
    },
    {
      users: 'vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga ',
      codekata: '44, 78, 90, 67, 39, 84, 58, 28'
    },
    {
      users: 'vijay, rajesh, ajay, tamil, sundar, bob, jhothi, ranga ',
      codekata: '55, 38, 90, 78, 56, 83, 45, 78'
    }
  ]

  //5.Find all the mentors with who has the mentees count more than 15
  db.zen.find({"mentors.mentee":{$gt:15}},{_id:0,mentors:1}).sort({"mentors.mentee":1})

  [
    { mentors: { name: 'Deepika', mentee: 16 } },
    { mentors: { name: 'Prakash', mentee: 17 } },
    { mentors: { name: 'Vinay', mentee: 18 } },
    { mentors: { name: 'Sai Mohan', mentee: 19 } },
    { mentors: { name: 'Deepika', mentee: 20 } },
    { mentors: { name: 'Banu', mentee: 20 } }
  ]

  //6. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
  db.zen.find({"attendance.date":{$gte: 15 , $lte: 31}},{_id:0,attendance:{absent:1, date:1}, task:{notsubmit:1}})
[
    { attendance: { absent: 2, date: 15 }, tasks: { notsubmit: 4 } },
    { attendance: { absent: 5, date: 16 }, tasks: { notsubmit: 1 } },
    { attendance: { absent: 5, date: 17 }, tasks: { notsubmit: 7 } },
    { attendance: { absent: 5, date: 18 }, tasks: { notsubmit: 6 } },
    { attendance: { absent: 4, date: 29 }, tasks: { notsubmit: 0 } },
    { attendance: { absent: 2, date: 30 }, tasks: { notsubmit: 5 } }
  ]