$(document).ready(function(){   

    $("#myInput").keyup(function(){
     
        let searchField = $("#myInput").val();
        let expression = new RegExp(searchField, "i");

        let url="https://musicdemons.com/api/v1/artist";
        //let names=[];     
        $("#results").html('');

        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{    
            // reset
            for(let i=0; i<data.length; i++){
                let name = data[i].name;
                let id = data[i].id;
                
                if(name.search(expression)!=-1){
                   // console.log(data[i]);
                    $("#results").append(
                       `<li class="list-group-item">
                            <a id="artist-${id}" href="#${id}">${name}</a>
                        </li>`);
                }

                $("#artist-"+id).click(function(){       
                  
                     fetch("https://musicdemons.com/api/v1/artist/"+id+"/songs")
                    .then((res)=>res.json())
                    .then((data)=>{
                         for(let i = 0; i<data.length; i++){
                             let videoID = data[i].youtube_id;
                             let videoURL= "https://www.youtube.com/embed/"+videoID;
                             $(".songs").append(
                                `<li class="list-group-item">
                                    <iframe width="600" height="400" src=${videoURL}></iframe>
                                 </li>`
                             );
                             
                         }
                        
                    })
                    .catch((err)=>console.log(err));
                });
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


