count = 0

for (i = 1; i < 10; i++ ){
        document.writeln("<tr>")
        for(j = 2; j < 10; j++){
            
            x = j + "*" + i +  "=" + i*j

            document.writeln("<td>" + x)
        }
        document.writeln("</tr>")
    
    }
