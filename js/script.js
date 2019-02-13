$(document).ready(function(){   
   // var artistId;
    //$.ajaxSetup({cache:false});
    $("#myInput").keyup(function(){
      /*   $("#results").html();
        $("#state").val(); */
        let searchField = $("#myInput").val();
        let expression = new RegExp(searchField, "i");

        let url="https://musicdemons.com/api/v1/artist";
        let names=[];
        
        console.log('reset()');
        $("#results").html('');

        fetch(url, {})
        .then((res)=>res.json())
        .then((data)=>{
      
            // reset
            // add all relevant items (again)
            for(let i=0; i<data.length; i++){
                let name = data[i].name;
                let id = data[i].id;
                
                if(name.search(expression)!=-1){
                    console.log(data[i]);
                    // let li = document.createElement('li');
                    // li.addClass('list-group-item');
                    // let a = document.createElement('a');
                    
                    // li.append(a);
                    // a.addEventListener(`click`, function(){
                    //     console.log($("a").getAttribute("href"));
                    //     console.log('id:' + artistId);   
                    // });
                    // $("#results").append(li);
                   $("#results").append(
                       `<li class="list-group-item">
                            <a id="artist-${id}" href="#${id}">${name}</a>
                        </li>`);
                    
                    //artistId = id;
                }
            }

            //a beter way to replace the for loop
            /*$.each(data,function(key,value){
                if(value.name.search(expression)!=-1){
                    console.log("found it" + value);
                $("#results").append(`<li class="list-group-item"><a href="#${id}">${name}</a></li>`);
                }
             });*/
         })
        .catch((err)=>console.log(err));              

     }); 

 /*     document.querySelector(`#show`)
        .addEventListener(`click`, function(){
            //console.log($("a").getAttribute("href"));
            console.log('id:' + document.location.hash);
            
        }); */
        let artistId = document.location.hash;
     $("a").click(function(){
       
         console.log('no reaction' + artistId);
         //console.log($("a").getAttribute("href"));
         //fetch("https://musicdemons.com/api/v1/artist")
    });
 
});  
      
         
    
     /* const createResultList = (results) => {        
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
           fetch("https://musicdemons.com/api/v1/artist", options)
           .then((res)=>res.json())
           .then((data)=>{
               console.log(data);
           })
           .catch((err)=>console.log(err));
       }); */
