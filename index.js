//  console.log("nikhil singh rajput");
//  console.log(true);
//  console.log( typeof true);
//  console.log(1424);
//  console.log(typeof 1424);

//   var myName;
//   console.log(myName);

// var myName = "nikhil";
//  var myNumber = 7724853618;
  
//   console.log(isNaN(myNumber));
// console.log(isNaN(myName));
//   var Nikhil_Singh = true+true;  
//   console.log( Nikhil_Singh);


//airthmatice operator
// 
//  var airth = 22/5;
//  console.log(airth);

// var num1 = 10;
// var num2 = 20;
// console.log("ther both are number are equal"+25);



//Logical operator    && OPerator 
//ther is three equation are satisfaide that we used && oprator

//  var a = 10;
//  var b = 20;
//  var c= 30;
 
// console.log((c>b)&&(c>a)&&(b>a));

//     !! Operator

// we hava used this equation to atlest one equation is teue
// var a = 10;

// var b = 20;

// var c = 30;

// console.log((c<a)||(c<b)||(b>a));







//Logical NOT (!)
   
// var age =17;
// if(age >=18){
  
//  console.log("you are eligable");

//  }
//  else{
//   console.log("not eligable");
//   }









    //          Swapin Two Number
// var b =5;
  
// var a = 10;
    
//  c = b;
//   b = a;
//   a = c;
  
//   console.log("number is a  "+ a);
//  console.log("number is b  "+ b);

//   a = a+b;
//  a = a-b;
//  b = a-b;

//  console.log("number is a  "+ a);
//   console.log("number is b  " +b);

 //if(score = true){
   //  console.log("we won this match");
// }
 //else{
 //console.log("we loss this match");
//}

    // turenary operator


//  var score = 400;
  
//  console.log(score <399)?" we won the match":"we loss the  match";
 

     //else if



    // const area ="ractangal";

    //   var PI = 3.142,l = 5,b = 4 ,r= 3;

    //   if (area  == "circle"){
    //   console.log(`this is area of circle of ${PI*r*r}`);
    //   }
    //   else if ( area =="ractangal"){
    //   console.log(`this area of ractangle of  ${l*b}`);
    //   }
    //   else if ( area =="triangel"){
    //  console.log(`this area of triangal of  ${l*b/2}`);
    //  }
    //  else{
    //  console.log(`this is invalid data re enter--`)
    //  }

 

//            //switch case 
// var area =`triangle`;
// var PI = 3.142,l=5,b=4,r=3;

// switch(area){
//     case `circle`:
//         console.log(`this is a circle ${PI*r*r}`);
//         break;
//         case `rectangle`:
//         console.log(`this is a rectangle ${l*b}`);
//         break;
//         case `triangle`:
//         console.log(`this is a triangle ${l*b/2}`);
//         break;
//          default:
//              console.log(`this is a not`);    
//   } 






//while 
// var num = 1;

//  while( num<=10)
//  {
//    console.log(`this is my number ${num}`);
//    num++;
//  }

 
//do while
// var num =12;
//   do{
//   console.log(`this is my number ${num}`);
//   num++;
//  }
//   while(num>=15);


// // 
//  var tabelof = 12;

//       for(var num =1; num<=10; num++)
//       {
//       console.log(`${tabelof} * ${num}=  ${tabelof*num}`);
//       }



    //function

//      function add(a,b ){
     
//        var total=a+b;
//      console.log(total)
      
//     }
//     add();
//    add(10,30);
//     add(50,50);


                //   anonyoms function

                //   var funexp = function(a,b){
                //       return total = a+b;
                    
                //   }
                  
                

                //   var sum = funexp(15,15);
                //     var sum1 = funexp(35,15);
                // var sum2 = funexp(65,15);

                //     console.log(sum);

                //    console.log( sum1>sum);
                //  console.log(sum2> sum <sum1);
                //     console.log (`this is sum value ${sum} this is s sum1 ${sum1} this is ${sum2} `);
             

// 
                //   ECMA SCRIPT 2015 ES--6



                //DEFULT PERAMETER

            // function mult(a, b = 5){

            // return a*b;
            // }
            // console.log(mult(25));



           // FAT ARROR FUNCTION

        //    const sum = ()=> {
        //     return ` the sum of two number is ${(a = 10)+(b = 10)}`;
        //    }
        //    console.log (sum());


//                   //ARRAY//travarsal ar
//  let myfriend =["nikhil" ,"mona", "meenu","shivani","nishatha"];
//  console.log(myfriend,(myfriend.length));

//     //FOOR IN LOOPl
//     // 
//  for( let element in myfriend){
//         console.log(element);
//      }

        //FOOR EACH LOOP

//    var myfriend =["nikhl","neha ","pooja ","nidhi","namrta"] ;
//     var name = myfriend.forEach( function(element,index,array){
   
//     console.log(`this is my element ${element}=  this my index ${index} = this is my array ${array}`);
//      });

//      var myindex = myfriend.indexOf("nidhi");
//       console.log(myindex);

// const array = [2,5,7,6,10,15,12,16];

//  const greaterThanTen = array.filter(element=>element >10);

//  console.log(greaterThanTen)


// var  animal = ["goat","dog","tiger","lione","leparde"];
// animal.push("cruger","cow","ox","foxe");
// console.log(animal,(animal.length));
//   console.log(animal.indexOf('cow'));
//  animal.unshift("monkey","chimpaingi","gorila","makkak");
//  console.log(animal);
// 

//  var flover = ["rose", "sunflover ","lile","white rose ","pink rose"];
//   console.log(flover.shift());
//   console.log(flover)

    //SPLICE//add and ramove karne k liye karte h


//    const month = ["january","feaburay","march","april","may",
//    "june","july","august","september","october","novmber","december"];

//    const index = month.indexOf("novmber");
//    console.log(index);
 
//  if(index != -1){
//           const update = month.splice(month,1,"AUGUST");
//       console.log(month);


//     const delet = month.splice(month,1);
//     console.log(month);

 
     
//      }
// //  
//    else
//  {

//  console.log("you are not insert right data --");
//  }
       







//                


// const array =["nishatn","neha ","neeraj"]
// const array1 =array.map((element,index,array)=>{

//     console.log(`this is a element of ${element}=this is a index of ${index}=this is a array of ${array}`)
// });






                       // SQUAR ROOT
//     //   
// var myarry =[25,16,9,4,36,49,64,81,100];
// var newarray = myarry.map((crelement)=>Math.sqrt(crelement));
// console.log(`${newarray}`);
// var my= newarray.filter((crelement)=>crelement<7);
// console.log(`${my}`);
//2 ka  or 10 se bada  number


//  let array = [2,4,6,8,3];
//   debugger;

//   let newarray=array.map((crelement)=>crelement*2 )
//   .filter((crelement)=> crelement > 10)
//   .reduce((accumalator,crelement)=>{
//     return accumalator+=crelement
//   })
// console.log(newarray );




// var array = [25,36,49,64,81];
//  var new_array = array.map((CRelemeant)=> Math.sqrt(CRelemeant));
//  debugger;
//    var new_array1 = new_array.map((CRelemeant)=>CRelemeant*2)
//    .filter((CRelemeant)=>CRelemeant>13).reduce((accumoltor,CRelemeant)=>{
//    return accumoltor+=CRelemeant;
//    })
//    console.log(new_array1);
//   console.log(new_array);







                                      //STRING IN JAVA SCRIPT 

// var nik = "Hello World This is Me Nikhil Singh Rajput";
// console.log(nik.indexOf("World"));
 
//   console.log(nik.lastIndexOf("Nikhil","Hello"));

 
//   var sarch = nik.search("This");
//   console.log(sarch);



//  var str = "banana, kiwi, apple ,mango";
//  var res = str.substr(7);

//  console.log(res);
//  console.log(str);






// var mySelf = "       Hello Every Won This Is ME NIkHIL SINGH RAJPUT          ";
//  var rep = mySelf.replace("RAJPUT","RANA");
//  console.log(rep);
//  console.log(mySelf);



//  console.log(mySelf.charAt(10));
//  console.log(mySelf.charCodeAt(10));
// console.log(mySelf.toLowerCase("NIKHIL"));
//  console.log(mySelf.trim());
//  console.log(mySelf.toUpperCase("Hello"));
 



//  var nik ="nikhil,nishant,neha,naina,namrata,nikita,neelesh,nitish";
//  console.log(nik.split());

        //Data and date

// var currTime = new Date();
// console.log(currTime);
// console.log(currTime);
// console.log(new Date());



    //In My Console Time Show Use This Peroperty

//  console.log(currTime.toLocaleString());
//  console.log(currTime.toDateString());
//  console.log(currTime.toLocaleTimeString());
//  console.log(currTime.toUTCString());



// console.log(currTime.setDate(25));
// console.log(currTime.setFullYear(2022));
// console.log(currTime.setTime(10));
// console.log(currTime.setSeconds(11));
  

//  var my =new Date(2022,2,25,2,30,3);
//  console.log(my.toLocaleDateString());
// 


              //MATH s
    
            
            //    let num = 10.499; 
            //    console.log(Math.round(num));
            //    console.log(Math.PI);



//    let num = "2,3,5";
//    console.log(Math.pow(2,3));


// console.log(Math.abs(-55));
// console.log(Math.abs( 5-55))
// 

// console.log(Math.ceil( 4.51));
// console.log(Math.round( 4.51))
// console.log(Math.ceil( 99.501))
// console.log(Math.round( 99.410))


   //OOPS in JAVA SCSRIPT 


//   let mybiodata={
//        myfname :"nikhil",
//        lastname :"Singh Rajput",
//        age :26,
//        getdata(){
//            console.log(`this is my name---${mybiodata.myfname}  this is my age ${mybiodata.age}`)
//          console.log(mybiodata.myfname);
//          console.log(this.lastname);
// // 
//      }
//   }
//  mybiodata.getdata();



        //THIS POINTER UzSE IN OBJECT


       // In a object is mainlye use in object scope{

       // } 

    //    let biodata = {
    //        myclass :"MCA" ,
    //     myname:"NIKHIL",
    //        myage:26,   
                      
       

    //    my_coontry :"INDIA",
    //    mydata(){
    //        console.log(`this my data my name is${biodata.myname} i am parsued my ${biodata.myclass} my age is ${biodata.myage}`)
    //        console.log(this.my_coontry);
    //        console.log(this.myname);
    //        console.log(this.myage);
    //        console.log(this.myclass);

    //    }
    //     }
    //    biodata.mydata();
       


   // IN A VARIABLE USE IN THIS USE FOR ONLY GLOBAL SCOPE

//    var myname="NIKHIL SINGH RAJPU ";
//           function getdata(){
          
//              console.log(this.myname);
   
//           }
//            console.log(this.myname);
//           getdata();
          


        //  ECMA 2016..ES5


       // ARRAY DISTUCTRING

        //  const mybio = ["nikhil","singh rajput",26,"pipariya", mydegree="MCA"];
        //  let[name,lname,age,place]=mybio;
        //  console.log(age,lname,mydegree);

            // OBJECT DISTRUCTRING


    //         let biodata = {        
    //         myclass :"MCA" ,
    //      myname:"NIKHIL",
    //    myage:26,   
    //         }
    //          let{myclass,myname,myage,mydegree="SIRT"}=biodata;
    //          console.log(myname,myclass,myage,mydegree);              



                 //ARRAY ...SPARED ..object same h

    //   const mycolor =["black","yellow","pink","orange","brown"];
     
    
    //  let add=["aqua","lemone","green"];

    //  const myfcolor =[...mycolor,"aqua","lemonw","green"];
    //  console.log(myfcolor);

    // const fist = ["nikhil","rajput","neha"];
    // const secode =["kimi","namrata"];

    // const thred=[...fist,"kimi","namrata"];
    // console.log(thred);


            //   flat () use in Reduse ()
 
            //   let array=[
            //       ['zone1','zone2'],
            //       ['zone3','zone4'],

            //       ['zone5','zone6'],
            //       ['zone7',['zone1', ['zone1','zone2'],
            //       'zone2'],
            //       'zone8'],

            //   ]
            // //   console.log(array);


            //   console.log(array.flat(Infinity));

// 

           //         Event propagation 

           // HOSTING 


        //    console.log("nikhil");
        //    var myname;
        //   myname="nikhil";

                            //lexing  scoping


// let a = "hello every one ";

// const first = ()=>{
//     let b = "this me nikhil singh rajput..."
            
//     const sec = ()=>{
     
//         let c ="i am a java script devloper ..2021"
        
    
//     }
//     console.log
// }


         // syncronus programing


 
    //    const fun2 = ()=>{
    //        setTimeout(()=>{
    //            console.log("function  2 is called");

    //         },2000);
    //     }
    //                    const fun1 =() =>{
    //                  console.log("function 1 is called...");
    //         fun2();
    //         console.log("function one is cllesd...")
    //     }

    //      fun1();


                         //function curring

// function sum(num1){
//    console.log("num1 is called");
//   return function(num2){
//       console.log("num2 is called");

//         return function(num3){
//             console.log(num1+num2+num3);
//         }
//     }

// }
// sum (5)(8)(3);



                  // in hand

// const sum = (num1)=>(num2)=>(num3)=>console.log(num1+num2+num3);
// sum (5)(8)(3);                  

                                 //  OBJECT TO JSON CONVERTION 

//  let my_object = {
// myname:"nikhil",
// my_lname :"singh rajput",
// my_city :"pipariya ",
// key_4:true
// }

// var my_object_string = JSON.stringify(my_object);  
    
// console.log(my_object_string);
// console.log(typeof(my_object_string))

                            // JSON TO OBJECT 
 
// var myjson ={"myname":"nikhil","my_lname":"singh rajput","my_city":"pipariya ","key_4":true}

// var my_string_convert=JSON.parse(myjson);
// console.log(my_string_convert);
//  console.log(typeof(my_string_convert));






// const sum =(num1)=>(num2)=>(num3)=>console.log(num1+num2+num3);

// sum(5)(3)(8);



// const myNumber =[16,25,36,49,64,81,100];

// const newn = myNumber.map((crelement)=>Math.sqrt(crelement));
// console.log(newn);
// const newnum = newn.map((crelement)=>crelement*2)
// .filter((crelement)=>crelement>12).reduce((accumlator,crelement)=>{
//     return accumlator+=crelement;
// });
// console.log(newnum);




class nikhil{
    constructor(name,age,cls){
        this.myname=name;
        this.myage=age;
        this.mycls=cls;
    }
    myboidata(){
        console.log(`this is my name ${this.myname} this is my age ${this.myage} this is my class${this.mycls}`)
    }

}

class player extends nikhil{
     constructor(name,age,cls,game){
         super(name,age,cls)
         this.mygame=game;
     }
     studentgame(){
         console.log(`i love this game ${this.mygame}`)
     }
}
let obj1 =new nikhil('neha',26,'mca');
let obj2 =new player('neha1',26,'mca',"cricate");
obj1.myboidata();
obj2.studentgame();


























































