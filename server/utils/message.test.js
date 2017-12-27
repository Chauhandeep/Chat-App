var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage',()=>{
  it('should generate correct message object',()=>{
    var from = 'Deep';
    var text = 'Some message';
    var message = generateMessage(from,text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({
      from,
      text
    });
  });
});

describe('generateLocationMessage',()=>{
  it('should generate correct location object',()=>{
    var from = 'Deep';
    var latitude = 28;
    var longitude = 77;
    var url='https://www.google.com/maps?q=28,77';
    var message = generateLocationMessage(from,latitude,longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({
      from,
      url
    });
  });
});
