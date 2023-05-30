var arr=[];
var result=[];
var size=parseInt(prompt("Enter the size of an array to find third smallest number"));
for(let k=0;k<size;k++)
{
	arr[k]=parseInt(prompt("Enter value "+(k+1)));
}
document.write("Input array is " +arr);
document.write("<br>");

for(i=0;i<arr.length;i++)
{
	for(j=i+1;j<arr.length;j++)
	{
		if(arr[i]>arr[j])
		{
			var temp=arr[j];
			arr[j]=arr[i];
			arr[i]=temp;
			
		}
	}
	result.push(arr[i]);
}
document.write("Third Smallest number is " + result[2]);
	
		