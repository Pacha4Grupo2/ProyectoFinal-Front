<template>
	<div class="Malla">

		<div class="container-malla">
        <h2 class="container-malla-title">Malla curricular</h2>
        <div class="container-malla-description-detail">
          <h3 class="container-malla-description-detail-title">
            Unidad 1: Introducción al JavaScript básico
          </h3>
          <div class="container-malla-description-detail1">
            <div class="container-malla-description-detail-button">
              <button class="container-malla-description-detail-button1">Semana 1</button>
              <button class="container-malla-description-detail-button2">Semana 2</button>
              <button class="container-malla-description-detail-button2">Semana 3</button>
              <button class="container-malla-description-detail-button2">Semana 4</button>               
            </div>
            <h4 class="container-malla-description-detail-title">
              INTRODUCCIÓN AL DESARROLLO
            </h4>
            <ul class="container-malla-description-detail-button">
              <li><a >Desarrollo Front-End</a></li>
              <li><a >Desarrollo Back-End</a></li>
              <li><a >Herramientas de desarrollo</a></li>
              <li><a >Desarrollo Front-End</a></li>
            </ul>
          </div>        
        </div>

        <div class="container-malla-description-detail">
          <h3 class="container-malla-description-detail-title1">
            Unidad 2: React
          </h3>
        </div>  

        <div class="container-malla-description-detail">
          <h3 class="container-malla-description-detail-title1">
            Unidad 3: React Native
          </h3>
        </div>  

        <div class="container-malla-description-detail">
          <h3 class="container-malla-description-detail-title1">
            Unidad 4: Pëticiones y Debugging
          </h3>
        </div> 

        <div class="container-malla-description-detail">
          <h3 class="container-malla-description-detail-title1">
            Unidad 5: Redux
          </h3>
        </div> 

        <div class="container-malla-description-detail">
          <h3 class="container-malla-description-detail-title1">
            Unidad 2: Proyecto Final
          </h3>
        </div>  
		</div>

	</div>
</template>

<script>
export default {
	name: 'Malla',
};
</script>

<style lang="scss">
  .container-malla {
    margin: 50px auto;
    width: 72%;
    h2{
      color: #000425;
      font-size: 2.2rem;
      font-weight: bold;
      margin-bottom: 35px;
    }
    .container-malla-description-detail {
      padding: 10px 20px 10px 20px;
      background: #EFEFEF;
      width: 54%;
      margin-bottom: 20px;
      border-radius: 10px;
      h3{
      color: #000425;
      font-size: 1.6rem;
      font-weight: bold;
      margin-bottom: 10px;
      margin-top: 10px;
      letter-spacing: 1.5px;
      }
      h4{
        margin-bottom: 20px;
        color: rgb(87, 85, 85);
        font-weight: bold;   
        font-size:1.5rem;     
      }
    }
    .container-malla-description-detail-button{
      button{
        margin-right: 10px;
        border: rgb(87, 85, 85);
        margin-top:20px;
        margin-bottom: 20px;
        padding: 10px 10px;
        color: rgb(87, 85, 85);
        font-weight: bold;   
        font-family: Roboto;
        font-size:1.7rem;
      }
        .container-malla-description-detail-button1{
        color:  rgb(86, 64, 255);
        border-color: solid 50px  rgb(86, 64, 255);
    }
      a{
        color: rgb(87, 85, 85);
        font-weight: bold; 
        font-size: 1.35rem; 
        letter-spacing: 1.1px; 
      }
      li{
        margin-bottom: 5px;
      }
    }
  }

@media only screen and (max-width: 1150px){
  .container-malla{
    width: 90%;
    .container-malla-description-detail {
      padding: 10px 20px 10px 20px;
      background: #EFEFEF;
      width: 96%;
      margin-bottom: 20px;
      border-radius: 10px;
    }
    .container-malla-description-detail1{
      display: none;
    }
  }
}
@media only screen and (max-width: 1024px){
  .container-malla{
    width: 90%;
    .container-malla-description-detail {
      width: 94.5%;
    }
    .container-malla-description-detail1{
      display: none;
    }
  }
}
@media only screen and (max-width: 532px){
  .container-malla{
    width: 90%;
    .container-malla-description-detail {
      width: 93%;
    }
    .container-malla-description-detail1{
      display: none;
    }
  }
}
@media only screen and (max-width: 490px){
  .container-malla{
    width: 90%;
    .container-malla-description-detail {
      width: 92%;
    }
    .container-malla-description-detail1{
      display: none;
    }
  }
}
@media only screen and (max-width: 400px){
  .container-malla{
    width: 83%;
    .container-malla-description-detail {
      background: #EFEFEF;
      width: 89%;
    }
    .container-malla-description-detail1{
      display: none;
    }
  }
}

</style>
