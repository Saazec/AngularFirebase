myapp.controller("registerCtr", function ($scope, $firebaseAuth) {
    $scope.message = "Hey there";

    $scope.register = function () {
        // $scope.message = "welcome "+$scope.user.firstname;
        var username = $scope.user.email;
        var password = $scope.user.password;
        var auth = $firebaseAuth();

        if (username && password) {
            auth.$createUserWithEmailAndPassword(username, password).then(function () {
                console.log("User created successfully");
                // $scope.message = "Hi "+$scope.user.firstname + " , Thanks for registering.";
                // $location.path("/login");
            }).catch(function (err) {
                console.log(err);
                // $scope.errMsg = true;
                // $scope.errorMessage = err.message;
            });
        };
    };
});