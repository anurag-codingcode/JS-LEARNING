let myPromise = new Promise(function(myResolve, myReject) {
    // 
    setTimeout(function() {

        myResolve("Success!");
    }, 2000);
});


myPromise.then(
    function(value) { 
        console.log(value); 
    },
    function(error) { 
        console.error(error);
    }
);
