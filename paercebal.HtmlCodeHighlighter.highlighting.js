if(! typeof paercebal.HtmlCodeHighlighter.highlighting !== 'undefined') { paercebal.HtmlCodeHighlighter.highlighting = {} ; }




paercebal.HtmlCodeHighlighter.highlighting.isBorderTooMuch = function()
{
   return (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) ;
   //return true ;
}

paercebal.HtmlCodeHighlighter.highlighting.getCorrectCssStyleAccordingToBrowser = function()
{
   var strBuffer = "" ;

   if(! paercebal.HtmlCodeHighlighter.highlighting.isBorderTooMuch())
   {
      strBuffer      += "body\n" ;
      strBuffer      += "{\n" ;
      strBuffer      += "   background-color  : #DDDDDD ;\n" ;
      strBuffer      += "}\n" ;
      strBuffer      += "\n" ;
   }
   
   return strBuffer;
}

paercebal.HtmlCodeHighlighter.highlighting.updateCorrectCssStyleAccordingToBrowser = function()
{
   document.getElementById("ID_styleForVariant").innerHTML = paercebal.HtmlCodeHighlighter.highlighting.getCorrectCssStyleAccordingToBrowser();
}

paercebal.HtmlCodeHighlighter.highlighting.getCodeStyle = function()
{
   var strBuffer = "" ;
   strBuffer      += "pre.cssCode\n" ;
   strBuffer      += "{\n" ;
   strBuffer      += "   color             : #000000 ;\n" ;
   strBuffer      += "   font-size         : 8pt ;\n" ;
   strBuffer      += "   font-family       : Consolas, Courrier New, Monospace ;\n" ;
   strBuffer      += "   line-height       : normal ;\n" ;

   if(! paercebal.HtmlCodeHighlighter.highlighting.isBorderTooMuch())
   {
      //strBuffer   += "   padding           : 5px ;\n" ;
      //strBuffer   += "   margin            : 5px ;\n" ;
      strBuffer   += "   border            : 1px solid #888888 ;\n" ;
      strBuffer   += "   background-color  : #E8E8E8 ;\n" ;
   }
   
   strBuffer      += "}\n" ;
   strBuffer      += "\n" ;
   strBuffer      += "pre.cssCode div.cssCodeLine                   {  line-height : normal; padding : 0; margin : 0;}\n" ;
   strBuffer      += "pre.cssCode span.cssCodeLineFilenameHeader      {  color             : #BB6600 ; padding : 0; margin : 0; font-style : italic ; }\n" ;
   strBuffer      += "pre.cssCode span.cssCodeLineNumberPrefix      {  color             : #888888 ; padding : 0; margin : 0;}\n" ;
   strBuffer      += "pre.cssCode span.cssCodeType                  {  color             : #990088 ; }\n" ;
   strBuffer      += "pre.cssCode span.cssCodeTypeWindows           {  color             : #880088 ; font-style : italic ;}\n" ;
   strBuffer      += "pre.cssCode span.cssCodeTypeSharedComponents  {  color             : #880000 ; font-style : italic ;}\n" ;
   strBuffer      += "pre.cssCode span.cssCodePreprocessor          {  color             : #0000FF ; }\n" ;
   //strBuffer      += "pre.cssCode span.cssCodeKeyWord               {  font-weight       : bold ; }\n" ;
   strBuffer      += "pre.cssCode span.cssCodeKeyWord               {  color             : #0000FF ; }\n" ;
   strBuffer      += "pre.cssCode span.cssCodeOperator              {  color             : #0000FF ; }\n" ;
   strBuffer      += "pre.cssCode span.cssCodeNumber                {  color             : #FF0000 ; }\n" ;
   strBuffer      += "pre.cssCode span.cssCodeMagicNumber           {  color             : #FF0000 ; font-weight : bold ; }\n" ;
   strBuffer      += "pre.cssCode span.cssCodeMagicNumberWindows    {  color             : #FF0000 ; font-weight : bold ; font-style : italic ; }\n" ;
   strBuffer      += "pre.cssCode span.cssCodeHighlight             {  background-color  : #FFFF00 ; }\n" ;
   strBuffer      += "pre.cssCode span.cssCodeString                {  color             : #FF00FF ; }\n" ;
   strBuffer      += "pre.cssCode span.cssCodeComment               {  color             : #008800 ; }\n" ;
   strBuffer      += "pre.cssCode span.cssCodeMacro                 {  color             : #880000 ; }\n" ;

   return strBuffer ;
}

function updateCodeStyle()
{
   document.getElementById("ID_styleForCodeStyle").innerHTML = paercebal.HtmlCodeHighlighter.highlighting.getCodeStyle();
}


