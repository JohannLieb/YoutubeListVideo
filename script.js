let channelVideos = 'GoogleDevelopers';


$.get(
    "https://www.googleapis.com/youtube/v3/channels",{
    part : 'contentDetails', 
    forUsername : channelVideos,
    key: 'AIzaSyBZA5eeuDz-Pw4PJ5aoQAUIstHs9IRVnmU'},
    (data) => {
       $.each( data.items, ( i, item ) => {
           prtid = item.contentDetails.relatedPlaylists.uploads;
           getVideos(prtid);
       });
   }
 );
 
 //Get Videos
 let getVideos = (prtid) => {
     $.get(
         "https://www.googleapis.com/youtube/v3/search",{
         part : 'snippet', 
         maxResults : 15,
         publishedAfter: '2019-08-04T00:00:00Z',
         q : 'Javascript|Python -basics',
         order: 'date',
         playlistId : prtid,
         key: 'AIzaSyBZA5eeuDz-Pw4PJ5aoQAUIstHs9IRVnmU'},
            (data) => {
                let results;
                $.each( data.items, ( i, item ) => {
                    results = '<li>'+ item.snippet.title + " " + item.snippet.publishedAt + '</li>';
                    
                     $('#results').append(results);
             });
         }
     );
 }


