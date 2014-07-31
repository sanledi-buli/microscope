if (Posts.find().count() === 0 ) {
  Posts.insert({
    title: "Belajar Facebook",
    author: "Elisa",
    url: "http://facebook.com"
  });

  Posts.insert({
    title: "Belajar Programming",
    author: "Sanledi",
    url: "http://merpati-karang.blogspot.com"
  });

  Posts.insert({
    title: "Clone project jadi",
    author: "Buli",
    url: "http://github.com"
  });
}