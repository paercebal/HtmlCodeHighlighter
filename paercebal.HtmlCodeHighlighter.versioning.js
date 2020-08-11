if(! typeof paercebal.HtmlCodeHighlighter.versioning !== 'undefined') { paercebal.HtmlCodeHighlighter.versioning = {} ; }

paercebal.HtmlCodeHighlighter.versioning.getVersion = function()
{
   return "2.0.0000" ;
}

paercebal.HtmlCodeHighlighter.versioning.updateVersion = function()
{
   let version = paercebal.HtmlCodeHighlighter.versioning.getVersion();
	document.title = "HTML Code Highlighter - " + version ;
	document.getElementById("ID_title").innerHTML = "HTML Code Highlighter <sup>" + version + "</sup>" ;
}
