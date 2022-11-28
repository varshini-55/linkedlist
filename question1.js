function putIn(element) {
    var dataStore = [1,3,5,17];
    var insertPos = this.find(element);
    if(insertPos > dataStore)
       {
      dataStore.push(element);
    }
   
    putIn(21);
    console.log(dataStore);
  }