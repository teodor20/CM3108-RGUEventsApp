import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      columns:[
        {
          "propertyName": "id",
          "title": "ID"
        },
        {
          "propertyName": "firstName",
          "title": "First Name"
        },
        {
          "propertyName": "lastName",
          "title": "Last Name"
        },
        {
          "propertyName": "position",
          "title": "Position"
        }
      ],
      data: [{
        'id': '1',
        'firstName': 'John',
        'lastName': 'Wick',
        'position': 'Lecturer'
      },
      {
        'id': '2',
        'firstName': 'John',
        'lastName': 'Wick',
        'position': 'Lecturer'
      },
      {
        'id': '3',
        'firstName': 'John',
        'lastName': 'Wick',
        'position': 'Lecturer'
      },
      {
        'id': '4',
        'firstName': 'John',
        'lastName': 'Wick',
        'position': 'Lecturer'
      },
      {
        'id': '5',
        'firstName': 'John',
        'lastName': 'Wick',
        'position': 'Lecturer'
      },
      {
        'id': '6',
        'firstName': 'John',
        'lastName': 'Wick',
        'position': 'Lecturer'
      },
      {
        'id': '7',
        'firstName': 'John',
        'lastName': 'Wick',
        'position': 'Lecturer'
      },
      {
        'id': '8',
        'firstName': 'John',
        'lastName': 'Wick',
        'position': 'Lecturer'
      },
      {
        'id': '9',
        'firstName': 'John',
        'lastName': 'Wick',
        'position': 'Lecturer'
      },
      {
        'id': '10',
        'firstName': 'John',
        'lastName': 'Wick',
        'position': 'Lecturer'
      }]
    }
  }
});
