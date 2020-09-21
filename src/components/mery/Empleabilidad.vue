<template>
	<div class="empleo">

		<div class="container-empleo">
        <h2 class="container-empleo-h2">Empleabilidad</h2>
        <div class="container-empleo-p">
          <p>Al finalizar el programa y certificarte podrás acceder a ofertas laborales espcialmente identificadas para la comunidad PACHA-Q-TEC, a través de nuestra plataforma de empleabilidad IDAT JOB. Luego de aprender como crear una página web, serás capaz de desempeñarte como desarrollador web en diferentes empresas de tecnología, startups, consultorías TI y en todo equipo deseoso de incorporar desarrollo Front End como parte de oferta como oferta de valor.</p>
        </div>
		</div>

	</div>
</template>

<script>
export default {
	name: 'Certificacion',
};
</script>

<style lang="scss" >
.container-empleo {
  margin: 50px auto;
  width: 72%;
  h2{
    color: #000425;
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 35px;
  }
  .container-empleo-p{
    p{
      width: 57%;
      font-size: 1.5rem;
      font-family: Roboto;
      line-height: 20px;
      color: #000425;
      font-weight: bold;      
    }
  } 
}

@media only screen and (max-width: 1150px){
  .container-empleo{
    width: 90%;  
    .container-empleo-p{
        p{
        width: 95%;       
      }
    }
  }
}
</style>
