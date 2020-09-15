var model = {
    taskGroup: [
      { groupName: "Homeworks", tasks:  [
                                          { name: "Task1", done: false },
                                          { name: "Task1,5", done: true },
                                          { name: "Task2", done: false }
                                        ], totalDone: 1},
      { groupName: "Shopping", tasks:  [
                                          { name: "Task3", done: false },
                                          { name: "Task3,5", done: true },
                                          { name: "Task3,99", done: true },
                                          { name: "Task4", done: false }
                                        ], totalDone: 2},
      { groupName: "Others", tasks:  [
                                          { name: "Task5", done: true },
                                          { name: "Task6", done: false }
                                        ], totalDone: 1}
    ]
};

var todoList = angular.module("todoList", []);
    todoList.controller("taskController", function ($scope) {
    $scope.list = model;
    $scope.addGroupTask = function (textGroup) {
        $scope.list.taskGroup.push({ groupName: textGroup, tasks: [], totalDone: 0 });
    };
    $scope.addTask = function (textTask) {
        $scope.list.taskGroup[$scope.data.mode].tasks.push({ name: textTask, done: false });
    }
    $scope.data = {};
    $scope.setFile = function () {
      if($scope.data.mode>=0)
      {
        $scope.list2 = model.taskGroup[$scope.data.mode];
        return 'taskList.html';
      }
    };
    $scope.updateDoneTask = function () {
      for(var i = 0; i<$scope.list.taskGroup.length; i++)
      {
        model.taskGroup[i].totalDone = countOfDoneTasks(model.taskGroup[i].tasks);
      }
    }
});

function countOfDoneTasks(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
   if (array[i].done === true) {
     count += 1;
     }
   }
   return count;
};
