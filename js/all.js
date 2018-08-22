// alert("hai");
// console.log(hoverData[0].wrapper3.third);

var app = angular.module("myApp", []);
app.controller("firstCtrl", function ($scope) {
    $scope.hoverData = [{
        wrapper1: {
            first: "wrapper1-child1",
            second: "wrapper1-child2",
            third: "wrapper1-child3",
            fourth: "wrapper1-child4"
        },
        wrapper2: {
            first: "wrapper2-child1",
            second: "wrapper2-child2",
            third: "wrapper2-child3",
            fourth: "wrapper2-child4"
        },
        wrapper3: {
            first: "wrappe3-child1",
            second: "wrapper3-child2",
            third: "wrapper3-child3",
            fourth: "wrapper3-child4"
        },
        wrapper4: {
            first: "wrapper4-child1",
            second: "wrapper4-child2",
            third: "wrappe4-child3",
            fourth: "wrapper4-child4"
        }
    }];
});