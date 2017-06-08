const bookmarkApi = "http://localhost:3000";

angular.module('app')
  .service('loginService', ['$http', loginService])
  .service('addBookReadService', ['$http', addBookReadService])
  .service('addBookToReadService', ['$http', addBookToReadService])
  .service('getBooksFromApiService', ['$http', getBooksFromApiService])
  .service('convertService', ['$http', convertService])
  // .service('someService', ['$http'])

function loginService($http) {
  return function(loginData) {
    return $http.post(bookmarkApi + "/users/login", loginData);
  }
}

function addBookReadService($http) {
  return function(bookData) {
    return $http.post(bookmarkApi + "/booksread/2/add", bookData)
  }
}

function addBookToReadService($http) {
  return function(bookData) {
    return $http.post(bookmarkApi + "/bookstoread/2/add", bookData)
  }
}

function getBooksFromApiService($http) {
  return function(query) {
    return $http.get('https://www.goodreads.com/search/index.xml?key=GIlk8fvwqQpBvketlOTFTQ&q=' + query)
  }
}

function convertService($http) {
  return function(xml) {
    return $http.post(bookmarkApi + "/users/convert", xml)
  }
}



// const bookmarkApi = "http://localhost:3000";
//
// angular.module('app')
//   .service('loginService', service)
//
//   service.inject = ['$http', '$state'];
//
//
// function service($http, $state){
//     this.getItems = function(){
//       return $http.get('/').then(res =>{
//         return res.data
//       })
//     };
//
//         this.login = function(loginData) {
//             return $http.post(bookmarkApi + "/users/login", loginData);
//           }
//
//         this.addBook = function(bookData) {
//             return $http.post(bookmarkApi + "/users/", bookData);
//         }
//
// } //end of service master function
