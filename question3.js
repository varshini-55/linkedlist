function Person(name,gender) {
    this.name = name;
    this.gender = gender;
  }
  
  
  function PeopleList() {
    this.dataStore = [];
    this.listSize = 0;
    this.add = add;
    this.findPeopleOfGender = findPeopleOfGender;
  }
  
  function add(element) {
    this.dataStore[this.listSize++] = element;
  }
  
  function findPeopleOfGender(gender) {
    for (var i = 0; i < this.dataStore.length; i ++ ) {
      if (this.dataStore[i].gender == gender) {
        console.log(this.dataStore[i].name);
      }
    }
  }
  
  var people = new PeopleList();
  people.add(new Person("VIJAYA","m"));
  people.add(new Person("VARSHINI","m"));
  people.add(new Person("PRIYANKA","m"));
  people.add(new Person("KEERTHI","m"));
  people.add(new Person("UDAY","m"));
  people.add(new Person("RAKESH","f"));
  people.add(new Person("BHAVANI","f"));
  people.add(new Person("GANESH","f"));
  people.add(new Person("SIRISHA","f"));
  people.add(new Person("TEJESH","f"));
  
  console.log("Gender Female")
  people.findPeopleOfGender("f");
  console.log("Gender Male")
  people.findPeopleOfGender("m");