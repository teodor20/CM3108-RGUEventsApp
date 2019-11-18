export default function() {
  this.namespace = '/api';

  this.get('/events', function() {
    return {
      data: [
        {
        type: 'events',
        id: 'hackaton-2019',
        attributes: {
          title: 'RGU Hackaton 14/10/2019',
          owner: 'RGY',
          city: ' Sir Ian Wood Building',
          bedrooms: 50,
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
          users: [{
            title: "Mr. A"
          }, {
            title: "Mr. B"
          }],
          description: 'The RGU Hackathon will give students the chance to compete with other students outside the University to compete against each other and see who has the better knowleadge about computer security.'
        }
      }, {
        type: 'events',
        id: 'urban-living',
        attributes: {
          title: 'Student Flats 30/10/2019',
          owner: 'Mike Teavee',
          city: 'Sir Ian Wood Building',
          bedrooms: 50,
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
          users: [{
            title: "Mr. A"
          }, {
            title: "Mr. B"
          }],
          description: "Student Life and living in student flats, explain how to live together with others and how to solve problems."
        }
      }, {
        type: 'events',
        id: 'downtown-charm',
        attributes: {
          title: 'Placement Options Oversea 11/11/2019',
          owner: 'Violet Beauregarde',
          city: 'Health Building',
          bedrooms: 150,
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          users: [{
            title: "Mr. A"
          }, {
            title: "Mr. B"
          }],
          description: "Talk to Student about Placement options overseas mostly focused on Compert Science Students and Cyber Security Students."
        }
      }, {
        type: 'events',
        id: 'hackaton-20191',
        attributes: {
          title: 'RGU Hackaton 10/10/2020',
          owner: 'RGY',
          city: 'Sir Ian Wood Building',
          bedrooms:100,
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
          users: [{
            title: "Mr. A"
          }, {
            title: "Mr. B"
          }],
          description: 'RGU Hackathon will give students the chance to compete with other students outside the University to compete against each other and see who has the better knowleadge about computer security.'
        }
      }, {
        type: 'events',
        id: 'urban-living1',
        attributes: {
          title: 'Student Flats 15/11/2020',
          owner: 'Mike Teavee',
          city: 'Health Building',
          bedrooms: 200,
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
          users: [{
            title: "Mr. A"
          }, {
            title: "Mr. B"
          }],
          description: "Talk about legal issues and how to solve them. Focuses on Scotland Law for Renting and how to approach your landlord. Teaches Students what they should look out for when renting a flat."
        }
      }, {
        type: 'events',
        id: 'downtown-charm1',
        attributes: {
          title: 'Placement Options Oversea 02/12/2020',
          owner: 'Violet Beauregarde',
          city: 'Health Building',
          bedrooms: 20,
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          users: [{
            title: "Mr. A"
          }, {
            title: "Mr. B"
          }],
          description: "Talk to Student about Placement options overseas mostly focused on Compert Science Students and Cyber Security Students."
        }
      }]
    };
  });

  this.get('/users', function() {
    return {
      data: [{
        type: 'users',
        id: 1,
        attributes: {
          staffid: '1856997',
          firstname: 'Rima',
          lastname: 'Goff',
          username: '1856997',
          password: '1856997',
          position: 'Lecturer',
          role: "staff",
          gender: "Female",
          email: "R.Goff@rgu.ac.uk",
          mobile: "0785214785",
          skills: [{
            title: "Maths"
          },
          {
            title: "Accounting"
          },
          {
            title: "Graphic Design"
          },
          {
            title: "Data Analysis"
          }],
          events: [{
            title: "Christmas Party"
          },
          {
            title: "New Year's Eve"
          },
          {
            title: "RGU Hackaton"
          }]
        }
      },
      {
        type: 'users',
        id: 2,
        attributes: {
          staffid: '1227845',
          firstname: 'Amanda',
          lastname: 'Alfaro',
          username: '1227845',
          password: '1227845',
          position: 'Lecturer',
          role: "staff",
          gender: "Female",
          email: "A.Alfaro@rgu.ac.uk",
          mobile: "0782214785",
          skills: [{
            title: "Sales"
          },
          {
            title: "Marketing"
          },
          {
            title: "IT Skills"
          },
          {
            title: "Diplomacy"
          }],
          events: [{
            title: "Christmas Party"
          },
          {
            title: "New Year's Eve"
          },
          {
            title: "RGU Hackaton"
          }]
        }
      },
      {
        type: 'users',
        id: 3,
        attributes: {
          staffid: '1668749',
          firstname: 'Aryan',
          lastname: 'Rivera',
          username: '1668749',
          password: '1668749',
          position: 'Student',
          role: "student",
          gender: "Male",
          email: "A.Rivera@rgu.ac.uk",
          mobile: "0785214785",
          skills: [{
            title: "Strategic Thinking"
          },
          {
            title: "Research"
          },
          {
            title: "Driving"
          },
          {
            title: "Foreign Languages"
          }],
          events: [{
            title: "Christmas Party"
          },
          {
            title: "New Year's Eve"
          },
          {
            title: "RGU Hackaton"
          }]
        }
      },
      {
        type: 'users',
        id: 4,
        attributes: {
          staffid: '1588745',
          firstname: 'Maria',
          lastname: 'Stone',
          username: '1588745',
          password: '1588745',
          position: 'Student',
          role: "student",
          gender: "Female",
          email: "M.Stone@rgu.ac.uk",
          mobile: "0785214785",
          skills: [{
            title: "Sales"
          },
          {
            title: "Driving"
          },
          {
            title: "Graphic Design"
          }],
          events: [{
            title: "Christmas Party"
          },
          {
            title: "New Year's Eve"
          },
          {
            title: "RGU Hackaton"
          }]
        }
      },
      {
        type: 'users',
        id: 5,
        attributes: {
          staffid: '1605204',
          firstname: 'Teodor',
          lastname: 'Narliyski  ',
          username: '1605204',
          password: '1605204',
          position: 'IT Support',
          role: "admin",
          gender: "Male",
          email: "t.narliyski@rgu.ac.uk",
          mobile: "0785214785",
          skills: [],
          events: []
        }
      }]
    };
  });

  this.get('/tasks', function() {
    return {
      "data": [{
        "type": 'task',
        "id": '1',
        "attributes": {
          "name": 'Task 001',
          "event-id": 'hackaton-2019',
          "task-owner": 'User 001',
          "task-status": 'In Progress'
        }
      },{
        "type": 'task',
        "id": '2',
        "attributes": {
          "name": 'Task 002',
          "event-id": 'hackaton-2019',
          "task-owner": 'User 002',
          "task-status": 'In Progress'
        }
      }]
    };
  });
}
