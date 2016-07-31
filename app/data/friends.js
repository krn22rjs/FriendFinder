// ===============================================================================
// DATA
// Below data will hold some friends
// Initially we just set it equal to a "dummy" friend
// ===============================================================================


var listFriends = [
  {
    name:"Harry Potter",
    photo:'<a href="http://harrypotter.wikia.com/wiki/Harry_Potter" target="_blank"><img src = "http://vignette2.wikia.nocookie.net/harrypotter/images/a/a9/Dhharryroomhighreso.png/revision/latest/scale-to-width-down/250?cb=20160722220125" border = "0" alt="Harry Potter"></a>',
    scores:[5,5,5,5,5,5,5,5,5,5]
  }
];

// Note how we export the array. This makes it accessible to other files using require. 
module.exports = listFriend;   