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
          description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
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
          description: "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro."
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
          description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
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
          description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
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
          description: "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro."
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
          description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
        }
      }]
    };
  });

  this.get('/users', function() {
    return {
      data: [{
        type: 'users',
        id: 'user1',
        attributes: {
          staffno: '1',
          firstname: 'user',
          lastname: 'user',
          username: 'user',
          password: 'user',
          position: 'Lecturer',
          role: "user"
        }
      },
      {
        type: 'users',
        id: 'user2',
        attributes: {
          staffno: '2',
          firstname: 'user1',
          lastname: 'user1',
          username: 'user1',
          password: 'user1',
          position: 'Lecturer',
          role: "user"
        }
      },
      {
        type: 'users',
        id: 'user3',
        attributes: {
          staffno: '3',
          firstname: 'admin',
          lastname: 'admin',
          username: 'admin',
          password: 'admin',
          position: 'Lecturer',
          role: "admin"
        }
      },
      {
        type: 'users',
        id: 'user4',
        attributes: {
          staffno: '4',
          firstname: 'admin1',
          lastname: 'admin1',
          username: 'admin1',
          password: 'admin1',
          position: 'Lecturer',
          role: "admin"
        }
      }]
    };
  });
}
