function start ()
{
	var request = new XMLHttpRequest();
    var url = "https://www.breakingbadapi.com/api/characters?name=";
    console.log(url + document.getElementById("vvod").value);
    request.open('GET', url + document.getElementById("vvod").value);

    request.responseType = 'json';
    request.send();
    
    request.onload = function()
    {

    	console.log(request.response); 

    	var otvet = request.response;

        //document.getElementById("image1").src = otvet[0].img;
    	

        document.getElementById("bo").style.display = "inline";
        document.getElementById("image1").src = otvet[0].img;

        document.getElementById("name").innerHTML = otvet[0].name;

        document.getElementById("name").style.display = "inline";
        if (document.getElementById("check1").checked) 
        {
            document.getElementById("birthday").innerHTML = otvet[0].birthday;
            document.getElementById("birthday").style.display = "inline";
        }
        else
        {
            document.getElementById("birthday").style.display = "none";
        }

        if (document.getElementById("check2").checked) 
        {
            document.getElementById("actor").innerHTML = otvet[0].portrayed;
            document.getElementById("actor").style.display = "inline";
        }
        else
        {
            document.getElementById("actor").style.display = "none";
        }
        document.getElementById("occupation").innerHTML = otvet[0].occupation;
            document.getElementById("occupation").style.display = "inline";
            document.getElementById("status").innerHTML = otvet[0].status;
            document.getElementById("status").style.display = "inline";
            document.getElementById("nickname").innerHTML = otvet[0].nickname;
            document.getElementById("nickname").style.display = "inline";
            document.getElementById("appearance").innerHTML = otvet[0].appearance;
            document.getElementById("appearance").style.display = "inline";

        
    }	


}