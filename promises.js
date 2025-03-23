// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("assynch operation is completed");
//         resolve()
//     },1000)
// })  
// promiseOne.then(function(){
//     console.log('consuption is done');
    
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//             console.log("second assynch completed");
//             resolve()
// },1000)
// }).then(function(){
//         console.log("promise consume second time");
        
// })

//  new Promise(function(reject,resolve){
//         setTimeout(function(){
            
//             resolve({username:"danish",emailid:"danishansari#gmail.com"})
//         },1000)
// }).then(function(user){
//     console.log(user);
// },)

// process.on('unhandledRejection', (reason, promise) => {  /////when unhandled rejection occurs
//     console.log('Unhandled Rejection at:', promise, 'reason:', reason);
// });


//  let promisefour = new Promise(function(resolve,reject){
//       setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username:"dansish",id:22122065})
            
//         }else{
//             reject("error!!")
            
//         }
//       },1000)
// })
// promisefour.then(function(user){
//     console.log(user.username);
//     return user.username;
// }).then(function(username){
// console.log(username);
// }).catch(function(error){
//    console.log(error)
// }).finally(()=>{
//     console.log("finally promises resolved ")
// })

// const promisefive= new  Promise(function(resolve,reject){
//             setTimeout(()=>{
//                 let error = false
//                 if(!error){
//                         resolve({name:"anas",id:"anasansari9696#gmail.com"})
//                 }else{
//                         reject("something went wrong!!")
//                 }})
//  },1000)

//  promisefive.then(function(user){
//         console.log(user.name);
        
//  }).catch(function(error){
//     console.log(error)
//  })
        
    // const promisefive = new Promise(function(resolve,reject){
    //         setTimeout(function(){
    //             let error  = false ;
    //             if(!error){
    //                 resolve({
    //                     username:"danish",id:"abcd@gmail.com"
    //                 })
    //             }else{
    //                 reject("there is an error")
    //             }

    //         },1000)
    // })
    // async function newfunction(user) {
    //     try {
    //         const response= await promisefive
    //     console.lod(response)
        
        
    //     } catch (error) {
    //         console.log("there is annnn error")
    //     }
    // }
    // newfunction()

 
// async function getvalues() {
//      const response =  await fetch("https://api.github.com/users/Dvansari65")
//      const data = await response.json()
//      console.log(data)
//      let error = true;
//      try {
//         console.log(data)
//      } catch (error) {
//         console.log("something went wrong");
        
//      }
// }
// getvalues()

// const promisefive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve(fetch("https://api.github.com/users/Dvansari65"))
//         }else{
//             reject("error")
//         }
//     },1000)
// })
// promisefive.then(function(user){
//     console.log(user);
    
// }).catch(function(error){
//     console.log(error)
// })
