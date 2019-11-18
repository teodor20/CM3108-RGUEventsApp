export default function() {
  this.namespace = '/api';

  this.get('/events', function() {
    return {
      data: [
        {
        type: 'events',
        id: 'hackaton-2019',
        attributes: {
          title: 'RGU Hackaton 2019',
          owner: 'RGY',
          city: 'Aberdeen',
          bedrooms: 15,
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
          description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
          users: [{
            title: "Mr. A"
          }, {
            title: "Mr. B"
          }]
        }
      }, {
        type: 'events',
        id: 'urban-living',
        attributes: {
          title: 'Urban Living',
          owner: 'Mike Teavee',
          city: 'Seattle',
          bedrooms: 1,
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
          description: "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.",
          users: [{
            title: "Mr. A"
          }, {
            title: "Mr. B"
          }]
        }
      }, {
        type: 'events',
        id: 'downtown-charm',
        attributes: {
          title: 'Downtown Charm',
          owner: 'Violet Beauregarde',
          city: 'Portland',
          bedrooms: 3,
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.",
          users: [{
            title: "Mr. A"
          }, {
            title: "Mr. B"
          }]
        }
      }, {
        type: 'events',
        id: 'hackaton-20191',
        attributes: {
          title: 'RGU Hackaton 2019',
          owner: 'RGY',
          city: 'Aberdeen',
          bedrooms: 15,
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
          description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
          users: [{
            title: "Mr. A"
          }, {
            title: "Mr. B"
          }]
        }
      }, {
        type: 'events',
        id: 'urban-living1',
        attributes: {
          title: 'Urban Living',
          owner: 'Mike Teavee',
          city: 'Seattle',
          bedrooms: 1,
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
          description: "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.",
          users: [{
            title: "Mr. A"
          }, {
            title: "Mr. B"
          }]
        }
      }, {
        type: 'events',
        id: 'downtown-charm1',
        attributes: {
          title: 'Downtown Charm',
          owner: 'Violet Beauregarde',
          city: 'Portland',
          bedrooms: 3,
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.",
          users: [{
            title: "Mr. A"
          }, {
            title: "Mr. B"
          }]
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
