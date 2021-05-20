document.write("<tr><td>","</td>");
for(var i=1;i<10;i++)
document.write("<td>",i,"</td>");

for(var i=1;i<10;i++){
    document.write("<tr>");
    document.write("<td>",i,"</td>");
        for(var j=1;j<10;j++)
        {	
            document.write("<td>",i*j,"</td>");
        }
    document.write("</tr>");
    }
document.write("</table>");
