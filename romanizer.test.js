var test = require('tape');
var romanizer = require('./romanizer.js');

test('Tape está funcionando', function(t){
    t.equal(1,1,'1 deve ser igual a 1');
    t.end();
})

test('Romanizer output', function(t){
    var actual = romanizer(1);
    var expected = 'I';
    t.equal(actual,expected,'1 should output I');
    t.end();
})


test('Romanizer output', function(t){
    var actual = romanizer(2);
    var expected = 'II';
    t.equal(actual,expected,'2 should output II');
    t.end();
})

test('Romanizer output', function(t){
    var actual = romanizer(3);
    var expected = 'III';
    t.equal(actual,expected,'3 should output III');
    t.end();
})

test('Romanizer output', function(t){
    var actual = romanizer(4);
    var expected = 'IV';
    t.equal(actual,expected,'4 should output IV');
    t.end();
})

test('Romanizer output', function(t){
    var actual = romanizer(5);
    var expected = 'V';
    t.equal(actual,expected,'5 should output V');
    t.end();
})

test('Romanizer output', function(t){
    var actual = romanizer(6);
    var expected = 'VI';
    t.equal(actual,expected,'6 should output VI');
    t.end();
})

test('Romanizer output', function(t){
    var actual = romanizer(7);
    var expected = 'VII';
    t.equal(actual,expected,'7 should output VII');
    t.end();
})

test('Romanizer output', function(t){
    var actual = romanizer(8);
    var expected = 'VIII';
    t.equal(actual,expected,'8 should output VIII');
    t.end();
})

test('Romanizer output', function(t){
    var actual = romanizer(9);
    var expected = 'IX';
    t.equal(actual,expected,'9 should output IX');
    t.end();
})

test('Romanizer output', function(t){
    var actual = romanizer(10);
    var expected = 'X';
    t.equal(actual,expected,'10 should output X');
    t.end();
})

test('Romanizer output', function(t){
    var actual = romanizer(11);
    var expected = 'XI';
    t.equal(actual,expected,'11 should output XI');
    t.end();
})

test('Romanizer output', function(t){
    var actual = romanizer(12);
    var expected = 'XII';
    t.equal(actual,expected,'12 should output XII');
    t.end();
})

test('Romanizer output', function(t){
    var actual = romanizer(13);
    var expected = 'XIII';
    t.equal(actual,expected,'13 should output XIII');
    t.end();
})

test('Romanizer output', function(t){
    var actual = romanizer(14);
    var expected = 'XIV';
    t.equal(actual,expected,'14 should output XIV');
    t.end();
})

test('Romanizer output', function(t){
    var actual = romanizer(15);
    var expected = 'XV';
    t.equal(actual,expected,'15 should output XV');
    t.end();
})

test('Romanizer output', function(t){
    var actual = romanizer(20);
    var expected = 'XX';
    t.equal(actual,expected,'20 should output XX');
    t.end();
})

test('Romanizer output', function(t){
    var actual = romanizer(40);
    var expected = 'XL';
    t.equal(actual,expected,'40 should output XL');
    t.end();
})

test('Romanizer output', function(t){
    var actual = romanizer(50);
    var expected = 'L';
    t.equal(actual,expected,'50 should output L');
    t.end();
})

test('Romanizer output', function(t){
    var actual = romanizer(90);
    var expected = 'XC';
    t.equal(actual,expected,'90 should output XC');
    t.end();
})

test('Romanizer output', function(t){
    var actual = romanizer(100);
    var expected = 'C';
    t.equal(actual,expected,'100 should output C');
    t.end();
})

test('Romanizer output', function(t){
    var actual = romanizer(400);
    var expected = 'CD';
    t.equal(actual,expected,'400 should output CD');
    t.end();
})

test('Romanizer output', function(t){
    var actual = romanizer(500);
    var expected = 'D';
    t.equal(actual,expected,'500 should output D');
    t.end();
})

test('Romanizer output', function(t){
    var actual = romanizer(900);
    var expected = 'CM';
    t.equal(actual,expected,'900 should output CM');
    t.end();
})

test('Romanizer output', function(t){
    var actual = romanizer(1000);
    var expected = 'M';
    t.equal(actual,expected,'1000 should output M');
    t.end();
})

test('Romanizer output', function(t){
    var actual = romanizer(4999);
    var expected = 'MMMMCMXCIX';
    t.equal(actual,expected,'4999 should output MMMMCMXCIX');
    t.end();
})

test('Too Large Romanizer output', function(t){
    var actual = romanizer(5000);
    var expected = 'Sorry, Romans couldn\t count this high! ';
    t.equal(actual,expected,'5000 should output an error');
    t.end();
})

test('Negative Romanizer output', function(t){
    var actual = romanizer(-10);
    var expected = 'Sorry, Romans didn\t use numbers lower than 1';
    t.equal(actual,expected,'-10 should output an error');
    t.end();
})

