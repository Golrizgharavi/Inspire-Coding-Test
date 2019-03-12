

app.service('authorService', function ($http, $q) {

    this.getItems = function () {


        return $http({
            method: "GET",
            url: "https://s3.amazonaws.com/api-fun/books.json",
            headers: { 'Content-Type': 'application/json' },
        }).success(function (data) {
            // alert('success' + JSON.stringify(data))
        }).error(function (data) {

            alert(data);
        });
    };

    this.SubmitEmailSubscribe = function (email) {

        // alert(email);
        return $http({

            method: "POST",
            url: "/GetData.aspx?q=1&e=" + email,
            headers: { 'Content-Type': 'application/json' },

        }).success(function (data) {

            //alert('success'+ JSON.stringify(data));

        }).error(function (data) {

            alert('Failed' + JSON.stringify(data));


        })

    }

})