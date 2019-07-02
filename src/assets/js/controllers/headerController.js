(function () {
     "use strict";

    angular.module('voilaRest', [])
        .controller('headerController', function ($scope) {
            $scope.mein = "lalala";
            $scope.menu = [
                {
                    title: "menu",
                    link: "t",
                    description: "Sit amet constetur adipisicing elit. Fugit perspiciatis."
                },
                {
                    title: "about",
                    link: "t",
                    description: "Adipisicing elit. Fugit pipsam ratione numquam"
                },
                {
                    title: "Events",
                    link: "t",
                    description: "Ratione numquam lorem ipsum dolor sit amet tetur."
                },
                {
                    title: "Reservations",
                    link: "t",
                    description: "Voluptates animi cupiditate similique sint."
                },
                {
                    title: "Contact",
                    link: "t",
                    description: "Quis nemo odio saepe ullam vitae officiis delectus."
                }
            ];
            $scope.title = "Welcome to Voila";
            $scope.text = "<p>We offer mouth watering <u>French cuisine</u></p>";
            $scope.menuLink = "t";
            $scope.findTableLink = "t";
        });
})();