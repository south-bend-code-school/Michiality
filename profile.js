
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCVEY5OiuYFtoYhvxRwFlSBidsYzN6yJ7Q",
    authDomain: "michiality-7f8da.firebaseapp.com",
    databaseURL: "https://michiality-7f8da.firebaseio.com",
    storageBucket: "michiality-7f8da.appspot.com",
    messagingSenderId: "1042181501756"
  };
  firebase.initializeApp(config);

  if(window.location.pathname.endsWith("profile.html")) {
    firebase.auth().onAuthStateChanged(function(user) {
      if(user) {
        firebase.database().ref().child(user.uid).once('value').then(function(snapshot) {
          $("#name").text(snapshot.val());
        }).catch(function(error) {
          $("#name").text("Ducky o' Pancakes");
        });
      } else {
          window.location = "logIn.html";
      }
    });
  }

$("#login").on('submit', function(e) {
  e.preventDefault();

  var email = $("#email").val();
  var password = $("#password").val();

  firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
    console.log("Logged in!");
    window.location = "profile.html";
  }).catch(function(error) {
    alert(error.message);
  });

  return false;
});

$("#signup").on('submit', function(e) {
  e.preventDefault();

  var firstName = $("#FirstName").val();
  var email = $("#email").val();
  var password = $("#password").val();

  firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
    var user = firebase.auth().currentUser;
    console.log(user);
    return firebase.database().ref().child(user.uid).set(firstName);
  }).then(function() {
    window.location = "profile.html"
  }).catch(function(error) {
    alert(error.message);
  });

  return false;
});
