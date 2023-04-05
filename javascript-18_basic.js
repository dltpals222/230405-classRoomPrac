const kdtMinam = {
  name : '원빈',
  age : 30,
  email : 'onlyOneBean@gmail.com',
  antother : '금이빨빼고',
};

kdtMinam.name = 'leesemin';
kdtMinam.age = 11;
kdtMinam.email = 'leesemin222@gmail.com';

delete kdtMinam.antother;

Object.freeze(kdtMinam);

console.log(kdtMinam);

kdtMinam.name = 'seminLee';
kdtMinam.age = 112;
delete kdtMinam.email;


console.log(kdtMinam);
