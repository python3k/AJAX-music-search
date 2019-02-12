$(document).ready(function(){   
    $.ajaxSetup({cache:false});
    $("#myInput").keyup(function(){
        $("#results").html();
        $("#state").val();
        let searchField = $("#myInput").val();
        let expression = new RegExp(searchField, "i");

        let url="https://musicdemons.com/api/v1/artist";
        let names=[];
        

        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            for(let i=0; i<data.length; i++){
                let name = data[i].name;
                let id = data[i].id;
                names.push(name);
                console.log(data);
               $.each(data,function(key,value){
                  if(value.name.search(expression)!=-1){
                  $("#results").append(`<li class="list-group-item"><a href="#${id}">${name}</a></li>`);
                  }
               });
            };
          
           /*  for(let i=0; i<data.length; i++){
               let name = data[i].name;
               let id = data[i].id;
               names.push(name);
               if(name.includes(searchField)==true){
                $("ul").append(`<li class="list-group-item"><a href="#${id}">${name}</a></li>`);  
               } 
           }  */
         })
        .catch((err)=>console.log(err));              


     }); 


    

});  
      
         
    
     /* const createResultList = (results) => {
         
        $("input").focus(function(){
            let searchField = $("input").val();
            let url="https://musicdemons.com/api/v1/artist";
            let names=[];

            fetch(url)
            .then((res)=>res.json())
            .then((data)=>{
               console.log(data);
               for(let i=0; i<data.length; i++){
                   let name = data[i].name;
                   let id = data[i].id;
                   names.push(name);
                   if(name.includes(searchField)==true){
                    $("ul").append(`<li class="list-group-item"><a href="#${id}">${name}</a></li>`);  
                   } 
               } 
             })
            .catch((err)=>console.log(err));              
         }); 
    };  



      const search = value => {
        const url = ``;

    };

    const handleKeyUpSearch = e => {
        const $input = e.currentTarget;
        search($input.value);
    };

    const init = () => {
        document.querySelector(`.search`).addEventListener(`keyup`, handleKeyUpSearch);
    };

    init(); */



    // this does not work
      /*  document.querySelector("#myInput").addEventListener("keyup",function(e){
           const input = e.currentTarget;
           const options = {
               method:"POST",
               headers:{
                   "Content-type": "application/x-www-form-urlencoded"
               },
               body:name=`${input.value}`
           };
           fetch("https://musicdemons.com/api/v1/artist/autocomplete", options)
           .then((res)=>res.json())
           .then((data)=>{
               console.log(data);
           })
           .catch((err)=>console.log(err));
       }); */
