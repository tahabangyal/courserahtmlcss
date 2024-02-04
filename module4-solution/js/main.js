(function(window)
{
    var names = window.nameobj.arr();

    for (var i = 0; i < names.length; i++)
	{
        var firstletter = names[i][0];
		
        if (firstletter === 'j' || firstletter === 'J')
		{
            window.greetings.goodbye(names[i]);
        }
		else
		{
            window.greetings.hello(names[i]);
        }
    }
})(window);