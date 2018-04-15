// // Testing for the toDoList

import 'C:\Users\dylan\Desktop\To-DoLists\toDoList.js';

var toDoList = [];

 
(function () {
    function Observable() {}
   
    toDoList.Observable = Observable;
}());

TestCase("ObservableAddObserverTest", {
    "test should store function": function () {
      var observable = new toDoList.Observable();
      var observer = function () {};
   
      observable.createToDo(observer);
   
      assertEquals(observer, observable.observers[0]);
    }
  });