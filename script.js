console.log(Math.round(4.5));
console.log(Math.ceil(1.5));
let  randNumber = Math.random()*10;
console.log(randNumber);

//convert for loop to for ..of loop
let myNumber =[10,20,30,40,50];

for(let i= 0;i< myNumber.length;i++){
    console.log(myNumber[i]);
}
//console.log(myNumber);
console.log('convert for loop to for ..of');

for(let num of myNumber){
    console.log(num);
}
//for of...
var color= ["red",'yellow','navy','black','white'];

for(choice of color){
    console.log(choice);
}
// while........
console.log('\n');
var color= ["red",'yellow','navy','black','white'];

var a = 0;
while(a<color.length){
   console.log("chekc it= "+color[a]);
    a++;
     
}
//find the first  even Number of the  array;
let  arr = [13.30,21.20,9,15,5,200];

let eveNumber = false;
for(let i = 0; i<arr.length; ++i){
    
    if(arr[i]%2==0){
        console.log("Even Number = " + arr[i]);
        eveNumber = true;
        break;
    }

}
if(!eveNumber){
    console.log("Even Number nai");
}




let arrayObj = [
    {id:1, name:"Asif",age:25},
    {id:2,name:"Rubel",age:25},
    {id:3,name:"Hasan",age:25},
    4,5
    
];
let ObjectLength = arrayObj.length;
//console.log(ObjectLength);
//console.log(arrayObj[3]);
let find = arrayObj.find(item=>item.age==25 && item.id==1);
//console.log(find);
console.log(arrayObj.find(item=>item.name=="Rubel"));
//console.log(find);=="Rubel"));
console.log(Object.keys(arrayObj));
console.log(Object.values(arrayObj));

 let amarNumber = [1,2,2,4,5];
 let finNumber  = amarNumber.find(item=>item==4);
 console.log(finNumber);

 let user = [
    {id:1,name:"Rubel",active:"Active"},
    {id:2,name:"Asik",active:"Inactive"},
    {id:3,name:"shohrab",active:"Active"}
    
 ];

 let getUser = user.find(user=>user.active=="Active");
 console.log(getUser);

  //map method....
    amarNumber =  [4, 9, 16, 25,"ee"];
  console.log(amarNumber.map(item=>item*2));
  console.log(user.map(obj=>obj.name));