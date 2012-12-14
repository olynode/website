var getHeaderImage = function() {
    var json = [
        {
            url: "/img/headers/spar/spar-1170.jpg",
            srcUrl: "http://www.flickr.com/photos/21843970@N00/3430143494/",
            srcAuthor: "Patrick Donovan"
        },
        {
            url: "/img/headers/ohs/ohs-1170.jpg",
            srcUrl: "http://www.flickr.com/photos/wsl-libdev/3424481082/",
            srcAuthor: "Ahniwa Ferrari"
        }
    ];
    return json[Math.floor(Math.random() * json.length)];
};

exports.getHeaderImage = getHeaderImage;
