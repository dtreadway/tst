module.exports = function(app) {
    app.directive('redditInfo', function(redditList, commonService, $http) {
        return {
            template: require('./reddit-info.html'),
            controller: function($scope) {
                var vm = this;
                var url = "https://www.reddit.com/hot.json";

                vm.getRedditData = function() {

                    $http({
                        url: url,
                        dataType: "jsonp",
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).success(function(response){
                        $scope.hotreddit = response.data.children;
                        console.log(response);
                    }).error(function(error){
                        $scope.error = error;
                    });



                    // $http.jsonp(url).
                    // success(function(data, status, headers, config) {
                    //     console.log(data);
                    // }).
                    // error(function(data, status, headers, config) {
                    //     $scope.error = true;
                    // });
                }

                vm.getRedditData();

                commonService.whatUp();
            }
        }
    })
}