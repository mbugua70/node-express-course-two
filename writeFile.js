//  creating large text of data into blog text
const fs = require("fs");
for (let i = 0; i < 10000; i++) {
  fs.writeFileSync(
    "./doc/blog.txt",
    `Consectetur excepteur ullamco pariatur dolor. Adipisicing ipsum pariatur ea consequat commodo magna incididunt est sint irure eu eu. Commodo pariatur aliquip ea nostrud in qui mollit est. Aliqua pariatur do ut fugiat occaecat. Officia cillum exercitation velit aliquip anim do tempor et in dolor. Eiusmod nulla officia proident aliquip voluptate deserunt aliqua aliquip Lorem ipsum deserunt magna. Eiusmod fugiat aliquip aliqua sint tempor et mollit incididunt nostrud consectetur magna. ${i} \n`,
    {
      flag: "a",
    }
  );
}
