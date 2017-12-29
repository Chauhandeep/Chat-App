const expect = require('expect');

const {Users} = require('./users');

var users;

beforeEach(()=>{
  users = new Users();
  users.users = [{
    id : '1',
    name : 'Deepanshu',
    room : 'Node'
  },{
    id : '2',
    name : 'Deep',
    room : 'Node 2'
  },{
    id : '3',
    name : 'D',
    room : 'Node'
  }];
});

describe('Users',()=>{
  it('should add new user',()=>{
    var users = new Users();
    var user =  {
      id : 123,
      name : 'Deepanshu',
      room : 'temp'
    };
    var res  = users.addUser(user.id,user.name,user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user',()=>{
    var userId = '1';
    var user  = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove an user',()=>{
    var userId = '99';
    var user  = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user',()=>{
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user',()=>{
    var userId = '99';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for node course',()=>{
    var userList = users.getUserList('Node');

    expect(userList).toEqual(['Deepanshu','D']);
  });

  it('should return names for node 2 course',()=>{
    var userList = users.getUserList('Node 2');

    expect(userList).toEqual(['Deep']);
  });
});
