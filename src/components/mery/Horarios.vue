<template>
	<div class="container-schedule">
    <div class="container-schedule-detail">
      <h2 class="container-schedule-detail-title">
        Horarios
      </h2>
      <div class="button-container-main">
        <button class="button">Virtual</button>
      </div>
      <div class="button-container-schedule">
        <button class="button-container-schedul1">LUN-MIE-VIE <br>7p.m.- 9p.m.</button>
        <button class="button-container-schedul1">SAB <br>8a.m.- 3p.m.</button>        
      </div>  

    </div>
	</div>
</template>

<script>
export default {
	name: 'Horarios',
};
</script>

<style lang="scss">
.container-schedule{
  .button{
    padding: 8px 150px;
    width: 57.3%;
    font-size: 1.9rem;
    margin-bottom: 20px;
  }
  .button-container-main{
    padding: 2px 15px;  
  }
  .button-container-schedule{
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
    grid-column-gap: 15px;
    width: 55.5%;
    padding: 10px 15px;
  }
  .button-container-schedul1{
    border-radius: 7px;
    padding: 14px;
    font-size: 14px;
    font-family: sans-serif;
    border: none;
    font-size: 1.5rem;
    letter-spacing: 2px;
  }
  .container-schedule-detail{
    margin: 50px auto;
    padding-left: 15px;
    width:71%;
    h2{
      color: #000425;
      padding-left: 1.8%;
      font-size: 2.2rem;
      font-weight: bold;
      margin-bottom: 35px;
    }
  }
  .container-schedule-detail{
    width: 75%;
    margin: 50px auto;
  }
}

@media only screen and (max-width: 1150px) {
.container-schedule{
  .container-schedule-detail{
    width: 94.5%;
      .button{
        padding: 8px 150px;
        width: 98.1%;
        font-size: 1.9rem;
        margin-bottom: 20px;
      }
    }
    .button-container-schedul1{
      font-size: 1.5rem;
      letter-spacing: 2px;
    }
    .button-container-schedule{
      width: 95.4%;
    }
  }
}
@media only screen and (max-width: 1024px) {
.container-schedule{
  .container-schedule-detail{
    width: 95.5%;
      .button{
        width: 97.5%;
      }
    }

    .button-container-schedule{
      width: 94.2%;
    }
  }
}

@media only screen and (max-width: 800px) {
.container-schedule{
  .container-schedule-detail{
    width: 96.5%;
      .button{
        width: 98%;
      }
    }

    .button-container-schedule{
      width: 94%;
    }
  }
}
@media only screen and (max-width: 650px) {
.container-schedule{
  .container-schedule-detail{
    width: 96.5%;
      .button{
        width: 99%;
      }
    }

    .button-container-schedule{
      width: 94%;
    }
  }
}
@media only screen and (max-width: 414px) {
.container-schedule{
  .container-schedule-detail{
    width: 96.5%;
      .button{
        width: 98%;
      }
    }

    .button-container-schedule{
      width: 90.5%;
    }
  }
}
@media only screen and (max-width: 411px) {
.container-schedule{
  .container-schedule-detail{
    width: 96.5%;
      .button{
        width: 98.5%;
      }
    }

    .button-container-schedule{
      width: 91%;
    }
  }
}
@media only screen and (max-width: 400px) {
.container-schedule{
  .container-schedule-detail{
    width: 98%;
      .button{
        width: 94%;
      }
    }

    .button-container-schedule{
      width: 85%;
    }
  }
}
@media only screen and (max-width: 350px) {
.container-schedule{
  .container-schedule-detail{
    width: 98%;
      .button{
        width: 83.5%;
      }
    }

    .button-container-schedule{
      width: 85%;
    }
  }
}
@media only screen and (max-width: 350px) {
.container-schedule{
  .container-schedule-detail{
    width: 110%;
      .button{
        padding:10px;
       /*  width: 8%; */
      }
    }
    .button-container-schedule{
      width: 77.5%;
      font-size: 0.8rem;
    }
  }
}

</style>
