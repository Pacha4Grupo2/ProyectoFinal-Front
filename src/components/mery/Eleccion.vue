<template>
	<div class="eleccion">

		<div class="container-eleccion">
        <h2 class="container-eleccion-title">¿Por qué elegirnos?</h2>
        <div class="container-eleccion-description d-flex justify-between">
          <div class="container-eleccion-description-container">
            <div class="container-eleccion-description-detail">
              <h3 class="container-eleccion-description-detail-title1">
                Curricula
              </h3>
            </div>  

            <div class="container-eleccion-description-detail">
              <h3 class="container-eleccion-description-detail-title1">
                Profesores
              </h3>
            </div>  

            <div class="container-eleccion-description-detail active-eleccion">
              <h3 class="container-eleccion-description-detail-title1">
                Metodología
              </h3>
            </div> 

            <div class="container-eleccion-description-detail">
              <h3 class="container-eleccion-description-detail-title1">
                Herramientas
              </h3>
            </div> 
          </div>
          <div class="container-eleccion-description-p">
            <p>Hemos creado una metodología alineada a tus necesidades , enfocada en cómo crear una aplicacion móvil a través de react native. Aprenderás de manera virtual y presencial , enfrentando retos del mundo real, en compañía de expertos en desarrollo de software que te ayudarán a aterrizar lo aprendido para convertirte en un gran desarrollador.</p>
          </div>
        </div>
		</div>

	</div>
</template>

<script>
export default {
	name: 'Eleccion',
};
</script>

<style lang="scss">
.container-eleccion {
  margin: 50px auto;
  width: 72%;
  h2{
    color: #000425;
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 35px;
  }
  .container-eleccion-description-detail {
    padding: 10px 20px 10px 20px;
    background: #EFEFEF;
    width: 90%;

    border-radius: 2px;
    h3{
    color: #000425;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 10px;
    letter-spacing: 1.5px;
    }
  }
  .container-eleccion-description-p {
    p{
      width: 35%;
      padding: 15px 50px 0 70px; 
      font-size: 1.5rem;
      font-family: Roboto;
      line-height: 20px;
      color: #000425;
      font-weight: bold;      
    }
  }
  .active-eleccion{
    background: rgb(86, 64, 255);
    display:block;
    h3{
      color: white;
    }
  }
}

@media only screen and (max-width: 1150px){
  .container-eleccion{ 
    width: 90%; 
    .container-eleccion-description-container{
      width: 150%;
    }    
    .container-eleccion-description-p {
      p{
        width: 85%;
        padding: 15px 50px 0 70px; 
        font-size: 1.5rem;
        font-family: Roboto;
        line-height: 20px;
        color: #000425;
        font-weight: bold;      
      }
    }
    
  }
}
@media only screen and (max-width: 1024px){
  .container-eleccion{  
/*     width: 90%;  */
    .container-eleccion-description{
      display: block;
      width: 69.5%;
    }
    .container-eleccion-description-p {
    p{
      width: 136%;
      padding: 15px 10px 0 20px;   
    }
  }
}
@media only screen and (max-width: 1000px){
  .container-eleccion{  

    .container-eleccion-description{
      display: block;
      width: 69.5%;
    }
    .container-eleccion-description-p {
    p{
      width: 136%;
      padding: 15px 10px 0 20px;   
    }
  }
}
@media only screen and (max-width: 530px){
  .container-eleccion{  

    .container-eleccion-description{
      display: block;
      width: 68.3%;
    }
    .container-eleccion-description-p {
    p{
      width: 136%;
      padding: 15px 10px 0 20px;   
    }
  }
}

@media only screen and (max-width: 490px){
  .container-eleccion{ 
    width: 84%; 
    .container-eleccion-description-container{
      width: 148.5%;
    }    
    .container-eleccion-description-p {
      p{
        width: 130%;
        padding: 15px 50px 0 20px; 
        font-size: 1.35rem;
        font-family: Roboto;
        line-height: 20px;
        color: #000425;
        font-weight: bold;      
      }
    }
    
  }
}}}
}
@media only screen and (max-width: 400px){
  .container-eleccion{ 
    width: 84%; 
    .container-eleccion-description-container{
      width: 144.5%;
    }    
    .container-eleccion-description-p {
      p{
        width: 130%;
        padding: 15px 50px 0 20px; 
        font-size: 1.35rem;
        font-family: Roboto;
        line-height: 20px;
        color: #000425;
        font-weight: bold;      
      }
    }
    
  }
}
</style>
