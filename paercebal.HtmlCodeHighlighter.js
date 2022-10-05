if(! typeof paercebal !== 'undefined') { var paercebal = {} ; }
if(! typeof paercebal.HtmlCodeHighlighter !== 'undefined') { paercebal.HtmlCodeHighlighter = {} ; }
if(! typeof paercebal.HtmlCodeHighlighter.__private__ !== 'undefined') { paercebal.HtmlCodeHighlighter.__private__ = {} ; }
if(! typeof paercebal.HtmlCodeHighlighter.events !== 'undefined') { paercebal.HtmlCodeHighlighter.events = {} ; }






paercebal.HtmlCodeHighlighter.__private__.registerOnFieldKeyUpEnter = function()
{
   for(let i = 0, iMax = arguments.length; i < iMax; ++i)
   {
      document.getElementById(arguments[i]).onkeydown = paercebal.HtmlCodeHighlighter.events.onFieldKeyUpEnter;
   }
}


paercebal.HtmlCodeHighlighter.events.onFieldKeyUpEnter = function(event)
{
    var e = event || window.event;
    
    if(e.keyCode == 13)
    {
        paercebal.HtmlCodeHighlighter.events.doCodeHighlight() ;
    }
}


paercebal.HtmlCodeHighlighter.events.clearBranchFilenameAndLine = function()
{
   document.getElementById("ID_fileName").value = "";
   document.getElementById("ID_lineStart").value = "";
}

paercebal.HtmlCodeHighlighter.events.cleanBranchFilename = function()
{
   var filename = document.getElementById("ID_fileName").value ;
   var firstAntiSlash = filename.indexOf("\\") ;
   var secondAntiSlash = filename.indexOf("\\", firstAntiSlash + 1) ;
   
   if(secondAntiSlash >= 0)
   {
      filename = filename.substr(secondAntiSlash).replace(/\\/g, "/") ;
      document.getElementById("ID_fileName").value = filename ;
   }
}

paercebal.HtmlCodeHighlighter.events.doCodeHighlight = function()
{
   var oCodeSource = new paercebal.HtmlCodeHighlighter.parsing.CodeSource(document.getElementById("ID_input").value) ;
   oCodeSource.parse() ;
   var strHtmlSource = oCodeSource.toHTML() ;
   document.getElementById("ID_debug").value = oCodeSource.toDebug() ;
   document.getElementById("ID_output").innerHTML = strHtmlSource ;
   document.getElementById("ID_outputHtmlCode").value = strHtmlSource + "\n" ;
   document.getElementById("ID_outputCssHtmlCode").value = "<style>\n" + paercebal.HtmlCodeHighlighter.highlighting.getCodeStyle() + "\n</style>\n" + strHtmlSource + "\n" ;
   
   document.getElementById("ID_debugHexa").value = paercebal.HtmlCodeHighlighter.debugging.doGetHexadecimalDump(oCodeSource.m_strOriginalSource) ;
   document.getElementById("ID_debugHexaNormalized").value = paercebal.HtmlCodeHighlighter.debugging.doGetHexadecimalDump(oCodeSource.m_strOriginalSourceNormalized) ;
}

paercebal.HtmlCodeHighlighter.events.onLoad = function()
{
   document.getElementById("ID_input").value = paercebal.HtmlCodeHighlighter.samples.getScriptSample() ;
   document.getElementById("ID_outputCssCode").value = paercebal.HtmlCodeHighlighter.highlighting.getCodeStyle() ;

   paercebal.HtmlCodeHighlighter.__private__.registerOnFieldKeyUpEnter("ID_tabulationSize");
   paercebal.HtmlCodeHighlighter.__private__.registerOnFieldKeyUpEnter("ID_fileName");
   paercebal.HtmlCodeHighlighter.__private__.registerOnFieldKeyUpEnter("ID_lineStart");
}

