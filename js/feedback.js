$(document).ready(function () {

    $("#myInput").keyup(function () {

        let searchField = $("#myInput").val();
        let expression = new RegExp(searchField, "i");

        let url = "https://musicdemons.com/api/v1/artist";
        $("#results").html('');

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                // reset
                for (let i = 0; i < data.length; i++) {
                    let name = data[i].name;
                    let id = data[i].id;

                    if (name.search(expression) != -1) {
                        $("#results").append(
                            `<li class="list-group-item">
                            <a id="${id}" href="#${id}" class="artist">${name}</a>
                        </li>`);
                    }
                }
            })
            .catch((err) => console.log(err));
    });

    $(".artist").click(function (event) {
        const aHref = event.target;
        const id = aHref.id;
        fetch("https://musicdemons.com/api/v1/artist/" + id + "/songs")
            .then((res) => res.json())
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    let videoID = data[i].youtube_id;
                    let videoURL = "https://www.youtube.com/embed/" + videoID;
                    $(".songs").append(
                        `<li class="list-group-item">
                                    <iframe width="600" height="400" src=${videoURL}></iframe>
                                 </li>`
                    );

                }

            })
            .catch((err) => console.log(err));
    });


});



