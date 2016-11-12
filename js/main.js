var xMax = 100;
var x = 0;

void xLessThanxMax()
{
	var y = 0;
	while (y < x)
	{
		Console.log(" ");
		if (y < xMax)
			y++;
	}
	x++;
	Console.log("x\n");
	Sleep(60);
}
void xGreaterThanZero()
{
	int y = x;
	while (y > 0)
	{
		Console.log(" ");
		if (y > 0)
			y--;
	}
	x--;
	Console.log("x\n");
	Sleep(60);
}
int main()
{
	while (1){
		while (x <= xMax)
			xLessThanxMax();
		while (x > 0)
			xGreaterThanZero();
	}
	return 0;
}
