if(! typeof paercebal.HtmlCodeHighlighter.samples !== 'undefined') { paercebal.HtmlCodeHighlighter.samples = {} ; }

paercebal.HtmlCodeHighlighter.samples.getScriptSample = function()
{
   var strBuffer = "" ;
   strBuffer += "virtual char * Toto::mirror(const char * p_strText, unsigned int p_iLength)\n" ;
   strBuffer += "{\u000d\n" ;
   strBuffer += "\tchar cChar ;\u000d\n" ;
   strBuffer += "\tchar * pLeft = p_strText ;\n\u000d" ;
   strBuffer += "\tchar * pRight = p_strText + iLength \u002D 1 ;\n" ;
   strBuffer += "\tBOOL * bWrong = TRUE ;\n" ;
   strBuffer += "\tSCRecord oRecord ;\n" ;
   strBuffer += "   \n" ;
   strBuffer += "   while(pLeft \u003C pRight);\n" ;
   strBuffer += "   \u000bwhile(pLeft \u003C pRight)\n" ;
   strBuffer += "   \u000b{\n" ;
   strBuffer += "\t\tdouble f = .025 * 5.5 ;\n" ;
   strBuffer += "      strBuffer.clear() ;\n" ;
   strBuffer += "      cChar = *pLeft ;\n" ;
   strBuffer += "      /**pLeft = *pRight ;\n" ;
   strBuffer += "      *pRight = cCh*/ar ;\n" ;
   strBuffer += "      \n" ;
   strBuffer += "      ++pLe//ft ;\n" ;
   strBuffer += "      \u002D\u002DpRight ;\n" ;
   strBuffer += "      char * p = new char[35] ;\n" ;
   strBuffer += "      strcpy(p, \"Hello \\\"World\\\"\") ;\n" ;
   strBuffer += "      strcpy(p, \"Hello \n" ;
   strBuffer += "                      \\\"Wor\n" ;
   strBuffer += "                             ld\\\"\") ;\n" ;
   strBuffer += "      p[0] = \'X\' ;\n" ;
   strBuffer += "      p[1] = \'\\\'\' ;\n" ;
   strBuffer += "      p[1] = \'\\\"\' ;\n" ;
   strBuffer += "      delete p ;\n" ;
   strBuffer += "      p = NULL ;\n" ;
   strBuffer += "      bool bIsOk = true || false ;\n" ;
   strBuffer += "      unsigned short iShort = static_cast\u003Cunsigned short\u003E(-1) ;\n" ;
   strBuffer += "   }\n" ;
   strBuffer += "   \n" ;
   strBuffer += "   return p_strText ;\n" ;
   strBuffer += "}\n" ;

   return strBuffer ;
}
