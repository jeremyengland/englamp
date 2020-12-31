let user = {
  "email": "pearljamsucks@gmail.com",
  "username": "reptar-swag",
  "firstname": "Samuel",
  "lastname": "Jackson",
  "password": "password",
  "avatar": "https://gravatar.com/avatar/cb41b9851e7e0f0ca0cb40b5dd74a5b0?s=400&d=robohash&r=x",
  "bio": "I have had it... with these gosh dang snakes on this gosh dang plane"
}

let album = {
  "user": 1,
  "type": "Mixtape",
  "title": "Planes on a Snake",
  "genre": "Heavy Metal",
  "artists": ["Denzel Washington", "Mila Kunis", "John Travolta"],
  "release": (new Date(Date.now()).toISOString().replace('T',' ').replace('Z','')),
  "artwork": "https://avatars.dicebear.com/v2/female/e3da9c1abd737f15de9c72c06f5f836a.svg",
  "bio": "An album recorded on iPhone. It's really not a good album."
}

let song = {
  "album": 1,
  "title": "Pump Fiction",
  "artwork": "https://gravatar.com/avatar/c50096898fa3eaacfac9ddc872496f3e?s=400&d=robohash&r=x"
}

let section1 = {
  "song": 1,
  "section": "Intro",
  "bio": "This part goes hard"
}

let section2 = {
  "song": 1,
  "section": "Chorus",
  "bio": "This part is for selling out purposes"
}

let section1line1 = {
  "section": 1,
  "order": 1,
  "line": "Yeeeeaaaaahhhhh!"
}

let section1line2 = {
  "section": 1,
  "order": 2,
  "line": "YeeeeeeaaaaahhH!"
}

let section2line1 = {
  "section": 2,
  "order": 1,
  "line": "I smell like kerosene, oh"
}

let section2line2 = {
  "section": 2,
  "order": 2,
  "line": "Smack my boy Tarantino"
}

let demo = {
  "song": 1,
  "user": 1,
  "title": "Pump Fiction Instrumental",
  "audio": "https://soundclout.s3.us-east-2.amazonaws.com/%5BFREE%5D+Dreamville+X+JID+X+J+Cole+Type+Beat-Phantom.mp3"
}