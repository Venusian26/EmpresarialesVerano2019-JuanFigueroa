const sendmail = require("./sendmail");
const nombre = " Arjona";

const env = {
    to:"iarjona@ittepic.edu.mx",
    subject: " TAREA 4 - AE2019",
    text:` Este es un mensaje que se envio a ${nombre}`,
    html :` <table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">
	<tr>
		<td style="background-color: #ecf0f1; text-align: left; padding: 0">
			<a href="https://www.facebook.com/">
				<img width="20%" style="display:block; margin: 1.5% 3%" src="https://ytimg.googleusercontent.com/vi/6AXYmNPUr8g/mqdefault.jpg">
			</a>
		</td>
	</tr>

	<tr>
		<td style="padding: 0">
			<img style="padding: 0; display: block" src="https://i.ytimg.com/vi/GocKE7HZWIY/maxresdefault.jpg" width="100%">
		</td>
	</tr>
	
	<tr>
		<td style="background-color: #ecf0f1">
			<div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
				<h2 style="color: #e67e22; margin: 0 0 7px">Hola pistolero!</h2>
				<p style="margin: 2px; font-size: 15px">
					Casueleros somos una comunidad de PUBG Mobile, que busca buenos pistoleros, estamos buscando personas buenas para:</p>
				<ul style="font-size: 15px;  margin: 10px 0">
					<li>Batallas amistosas.</li>
					<li>Torneos Oficiales.</li>
					<li>Intercambios casuelas.</li>
					<li>Beber en un bar de pochinky</li>
					<li>Muchas sorpresas más.</li>
				</ul>
				<div style="width: 100%;margin:20px 0; display: inline-block;text-align: center">
					<img style="padding: 0; width: 200px; margin: 5px" src="https://i.ytimg.com/vi/sE1aCmAvpeQ/maxresdefault.jpg">
					<img style="padding: 0; width: 200px; margin: 5px" src="https://i.ytimg.com/vi/fCuGI9NkVjg/maxresdefault.jpg">
				</div>
                <div style="width: 100%; text-align: center">
                    <h2> Escanea el codigo QR para obtener un pase a nuesta comunidad </h2>
                    <a rel='nofollow' href='https://www.qr-code-generator.com/
            ' border='0' style='cursor:default'><img src='https://chart.googleapis.com/chart?cht=qr&chl=Comunidad%20de%20Pubg%20Mobile%20%3B)&chs=180x180&choe=UTF-8&chld=L|2' alt=''></a><br>
					<a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" href="https://www.facebook.com/">Unirse</a>	
				</div>
				<p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">Poketrainers Trujillo 2016</p>
			</div>
		</td>
	</tr>
</table>
<!--hasta aquí-->`,
attachments: [
    {
      content: 'Codigos de promocion',
      filename: 'promocion.txt',
      type: 'plain/text',
      disposition: 'attachment',
      contentId: 'mytext'
    },
  ],
}

  

sendmail.send(env);