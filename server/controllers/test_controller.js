/*global module*/
/*global console*/

module.exports =
{
    //sends a JSON object back as a response
    //mySite.com/test/myRoute
    myRoute: function( request, response )
    {
        response.status(200).json( { success: true } );
    },
    
    //renders a Pug page as a response (page found at views/myPugPage.pug)
    //mySite.com/test/myPageRenderRoute
    myPageRenderRoute: function( request, response )
    {
        response.render( "myPugPage" );
    },
    
    //times out!
    //mySite.com/test/timeout    
    timeout: function( request, repsonse )
    {
        console.log( "This will time out since we don't call the response!" );
    },
    
    //takes URL parameters to do something with it, and barfs if not provided with a required one
    //mySite.com/test/useParameter?id=whatever
    useParameter: function( request, response )
    {
        if ( !request.query.id )
        {
            response.status(500).json( { success: false, error: "id is a required parameter." } );
        }
        else
        {
            response.status(200).json( { success: true } );
        }
    },
    
    sub:
    {
        //sends a JSON object back as a response
        //mySite.com/test/sub/myRoute
        myRoute: function( request, response )
        {
            response.status(200).json( { success: true } );
        }
    }
};