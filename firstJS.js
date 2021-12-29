var sum;
var a=Number(prompt("Enter a number" ));
var b=Number(prompt("Enter the second number "));
var res;
var flag=1;
do
{
    document.write("1.Add" + "<br>");
    document.write("2.Sub" + "<br>");
    document.write("3.Mul" + "<br>");
    document.write("4.Quo" + "<br>");
    document.write("5.Exit"+ "<br>");
    var c=Number(prompt("Enter option"));
    switch(c)
    {
           case 1:
            {
                res=a+b;
                document.write("Sum is: " +res+ "<br>" );
                break;
            }
            case 2:
            {
                res=a-b;
                document.write("Sub is: " +res+ "<br>" );
              break;

            }
            case 3:
            {
                res=a*b;
                document.write("MUl is: " +res+ "<br>" );
               break;
            }                 
            case 4:
            {
                res=a/b;
                document.write("Div is: " +res+ "<br>" );
                break;
            }
            case 5:
            {
                 flag=0; break;
            }
    }

}while(flag==1);