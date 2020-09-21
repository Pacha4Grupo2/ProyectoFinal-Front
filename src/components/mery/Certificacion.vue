<template>
	<div class="certificacion">

		<div class="container-certificacion">
        <h2 class="container-certificacion-h2">Certificaciones</h2>
        <div class="container-certificacion-p">
          <p>Tu certficado indicará que has cursado el programa de especialización en desarrollo FRONT-END y estará a nombre de Idat.</p>
        </div>
        <figure class="container-certificacion-img">
          <img src="https://pachaqtec.edu.pe/images/certificado.png">
        </figure>  
		</div>

	</div>
</template>

<script>
export default {
	name: 'Certificacion',
};
</script>

<style lang="scss">
.container-certificacion {
  margin: 50px auto;
  width: 71%;
  h2{
    color: #000425;
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 35px;
  }
  .container-certificacion-p {
    p{
      width: 56%;
      font-size: 1.5rem;
      font-family: Roboto;
      line-height: 20px;
      color: #000425;
      font-weight: bold; 
      margin-bottom: 20px;     
    }
  }
  .container-certificacion-img{
    margin-bottom: 45px;
    img {
      width: 56%;
      max-height: 400px;
      object-fit: cover;
  }
  }
}

@media only screen and (max-width: 1150px){
  .container-certificacion{
    width: 90%;
    .container-certificacion-p{
        p{
        width: 95%;       
      }
    }
    .container-certificacion-img{
      margin-bottom: 45px;
      img {
        width: 90%;
        object-fit: cover;
      }
    }  
  }
}
</style>
