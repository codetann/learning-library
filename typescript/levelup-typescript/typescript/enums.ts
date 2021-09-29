// enums
enum Type {
  Video, // 0
  Blog, // 1
  Quiz, // 2
}

enum Type2 {
  Video = "VIDEO",
  Blog = "BLOG",
  Quiz = "QUIZ",
}

const createContent = (contentType: Type2) => {
  // ... //
};

createContent(Type2.Quiz);

console.log(Type2.Video);
