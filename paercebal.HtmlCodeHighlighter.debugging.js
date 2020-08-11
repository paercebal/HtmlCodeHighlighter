if(! typeof paercebal.HtmlCodeHighlighter.debugging !== 'undefined') { paercebal.HtmlCodeHighlighter.debugging = {} ; }



paercebal.HtmlCodeHighlighter.debugging.doGetHexadecimalDump = function(p_input)
{
    var iPos = 0, iPosMax = p_input.length ;
    var cChar, cInt, cIntMaj, cIntMin ;
    var strLineHex = "", strLineText = "" ;
    var aT = [] ;
    
    var numberToString = function(p_value)
    {
        var text = p_value.toString(16) ;
        if(p_value < 16) return "..." + text ;
        if(p_value < 256) return ".." + text ;
        if(p_value < 4096) return "." + text ;
        return text ;
    } ;
    
    while(true)
    {
        if((iPos > 0) && (iPos % 16 == 0))
        {
            aT.push(strLineHex, "  |  ", strLineText, "\n") ;
            strLineHex = "" ;
            strLineText = "" ;
        }
        
        if(iPos >= iPosMax) break ;
        cChar = p_input.charAt(iPos) ;
        cInt = p_input.charCodeAt(iPos) ;
        
        if(cInt >= 32)
        {
            strLineHex += " " + numberToString(cInt) + "  " ;
            strLineText += cChar
        }
        else
        {
            strLineHex += "[" + numberToString(cInt) + "] " ;
            strLineText += "." ;
        }
        
        ++iPos ;
    }

    if(strLineHex.length > 0)
    {
        aT.push(strLineHex, "  |   ", strLineText, "\n") ;
        strLineHex = "" ;
        strLineText = "" ;
    }
    
    return aT.join("") ;
}


