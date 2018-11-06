var test =
{
    testMyRoute: function()
    {
        server.testMyRoute( this._showResult );
    },
    
    testUseParameter: function()
    {
        server.testUseParameter( 0, this._showResult );
    },
    
    _showResult: function( result )
    {
        var resultStr = result;
        if ( typeof(result) === 'object' )
        {
            resultStr = JSON.stringify( result );
        }
        document.getElementById('result').innerHTML = resultStr;
    }
};