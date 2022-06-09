class Comment {
  constructor({
    content,
    studentName,
    studentRole = "student",
  }){
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }
  publish(){
    console.log(`${this.studentName}(${this.studentRole}) `);
    console.log(`${this.likes} likes`);
    console.log(`${this.content}`);
  }
}





class Course {
  constructor({
    id,
    name,
    status,
    isFree = false,
    lang = "spanish",
  }){
    this.id = id;
    this._name = name;
    this.status = status;
    this.isFree = isFree;
    this.lang = lang;
  }
  get name(){
    return this._name;
  }
  set name(newName){
    if(newName === 'curso malo'){
      console.error('Web... no');
    }else{
      this._name = newName;
    }
  }
}
//! OBJECT LITERAL
const natalia = {
  name: 'natalia',
  age: 36,
  coursesPassed: [
    'Ultimate SASS course',
    'Ultimate TAILWIND course',
  ],
  passCourse(course){
    this.coursesPassed.push(course);
  },
};
natalia.name = 'nat';
natalia.passCourse('Responsive Design')

//! OBJECT PROTOTYPE

function Student(name,age,coursesPassed){
  this.name = name;
  this.age = age;
  this.coursesPassed = coursesPassed;
}

Student.prototype.passCourse = function(course){
  this.coursesPassed.push(course);
}
const cricadev = new Student("Cristian Casallas", 18, ['HTML', 'CSS', 'JS']);

//! prototypes sintaxis classes

class Student2 {
  constructor({
    name,
    age,
    coursesPassed = [],
    email,
  
  }){
    this.name = name;
    this.age = age;
    this.coursesPassed = coursesPassed;
    this.email = email;
  }
  passCourse(course){
    this.coursesPassed.push(course);
  }
}

const miguelito = new Student2({
  email: 'miguelito@gmail.com',
  coursesPassed: ['HTML', 'C++', 'C'],
  age: 18,   name: 'Miguel Suarez', 

  });

  // ADVANTAGES OF OOP
function videoPlay(id){
  const url = "https://platzi.com/clases/2332-javascript-poo/38627-modulos-de-ecmascript-6/" + id;
  console.log("se está reproduceindo desde la url" + url)
}
function videoPause(id){
  const url = "https://platzi.com/clases/2332-javascript-poo/38627-modulos-de-ecmascript-6/" + id;
  console.log("se está pausando desde la url" + url)
}
 class PlatziClass {
  constructor({
    name,
    videoID,
  }){
    this.name = name;
    this.videoID = videoID;
  }
  reproduce(){
    videoPlay(this.videoID);
  }
  pause(){
    videoPause(this.videoID);
  }
}
















class LearningPath{
  constructor({
    id,
    name,
    courses = [],
  }){
    this.id = id;
    this.name = name;
    this.courses = courses;
  }
  addCourse(course){
    this.courses.push(course);
  }
  deleteCourse({course}){
    this.courses.splice(this.courses.indexOf(course), 1);
  }
}
const learnVue = new LearningPath({
  name: 'Learning Vue with easy',
  id: 2534,
  courses: [new Course({name: 'Vue Basics', id: 132, status: 'Doing'}),new Course({name: 'Vue advanced', id: 133, status: 'To do'}) ],
});
console.log(learnVue);

class StudentReal{
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    coursesPassed = [],
    learningPaths = [],
  }){
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook
    }
    this.coursesPassed  = coursesPassed;
    this.learningPaths  = learningPaths;
  }
}
const cristian2 = new StudentReal({
  name: 'Crisito',
  username: 'cricadev',
  email: 'cricadev@gmail.com',
  instagram: '@cricadev',
  learningPaths: [new LearningPath({
    name: 'Learning Vue with easy',
    id: 2534,
    courses: [new Course({name: 'Vue Basics', id: 132, status: 'Doing'}),new Course({name: 'Vue advanced', id: 133, status: 'To do'}) ],
  }), new LearningPath({
    name: 'Learning React with easy',
    id: 2534,
    courses: [new Course({name: 'React Basics', id: 132, status: 'Doing'}),new Course({name: 'React advanced', id: 133, status: 'To do'}) ],
  })]
})
cristian2.learningPaths[1].addCourse(new Course({name: 'Vue Basics', id: 132, status: 'Doing'}));
cristian2.learningPaths[1].deleteCourse({name: 'React advanced'});
console.log(cristian2);

const progBasic = new Course({
  id: 122,
  name: 'Curso Gratis de Programación Básica',
  status: 'Done',
  isFree: true,
})
const BasicEnglish = new Course({
  id: 123,
  name: 'Curso English',
  status: 'Done',
  isFree: false,
  lang: 'English',
})

class StudentIn{
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    coursesPassed = [],
    learningPaths = [],
  }){
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook
    }
    this.coursesPassed  = coursesPassed;
    this.learningPaths  = learningPaths;
  }
  publishComment(commentCont){
    const comment = new Comment({
      content: commentCont,
      studentName: this.name,
    });
    comment.publish();
  }
}
class FreeStudent extends StudentIn{
  constructor(props){
    super(props);
  }
  approveCourse(newCourse){
    if(newCourse.isFree){
      this.coursesPassed.push(newCourse);
    }else{
      console.warn(`We are sorry, ${this.name} you can only take free courses`)
    }
  }
}
class BasicStudent extends StudentIn{
  constructor(props){
    super(props);
  }  
  approveCourse(newCourse){
    if(newCourse.lang != 'English'){
      this.coursesPassed.push(newCourse);
    }else{
      console.warn(`We are sorry, ${this.name} you can only take spanish courses`)
    }
  }
}
class ExpertStudent extends StudentIn{
  constructor(props){
    super(props);
  }
  approveCourse(newCourse){   
   this.coursesPassed.push(newCourse);
  }
}

class TeacherStudent extends StudentIn{
  constructor(props){
    super(props);
  }
  approveCourse(newCourse){   
   this.coursesPassed.push(newCourse);
  }
  publishComment(commentCont){
    const comment = new Comment({
      content: commentCont,
      studentName: this.name,
      studentRole: "Teacher",
    });
    comment.publish();
  }
}

const stefanny = new FreeStudent({
  name: 'stefanny',
  username: 'tef',
  email: 'tef@gmail.com',
})
const crisitin = new BasicStudent({
  name: 'gamin',
  username: 'gamin',
  email: 'gamin@gmail.com',
})
const freddy = new TeacherStudent({
  name: 'Freddy Vega',
  username: 'freddier',
  email: 'freddier@gmail.com',
  instagram: 'freddier',

})