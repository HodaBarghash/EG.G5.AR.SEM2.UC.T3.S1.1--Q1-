function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5zrjAOWTLTa":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxNvcglsyf46-64xIM-Cm4EcvL3ecSMdYZ242zy4LH8f7f2PkiBMaqLn2SoHQzsM0Q/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

