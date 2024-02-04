(function(window)
{
    var names = ["Taha", "Talha", "Saif", "Bilal", "Abdullah", "Jaweria", "Tayyaba", "Ayesha",];

    var nameobj;
	
	nameobj = {
        arr: function()
		{
            return names;
        }
    };

    window.nameobj = nameobj;

})(window);

(function(window)
{
    var greetings;
	
	greetings = {
        hello: function(name)
		{
            console.log("Hello " + name);
        },
        goodbye: function(name)
		{
            console.log("Goodbye " + name);
        }
    };

    window.greetings = greetings;

})(window);