<template>
<<<<<<< HEAD
	<div class="view-home">
		<Phone />
		<LandingPage />
		<CardCourse />
		<Comunity />
		<Beneficios />
		<FormHome />
		<Footer />
	</div>
</template>

<script>
import Phone from './components/Phone';
import CardCourse from './components/CardCourse';
import LandingPage from '@/components/LandingPage';
import Comunity from '@/components/Comunity';
import Beneficios from '@/components/Beneficios';
import FormHome from '@/views/Home/components/FormHome';
import Footer from '@/components/Footer';

export default {
	name: 'Home',
	components: {
		CardCourse,
		Phone,
		LandingPage,
		Comunity,
		Beneficios,
		FormHome,
		Footer,
	},
	data() {
		return {
			courses: [
				{
					id: 1,
					name: 'Desarrollo Front-End',
					description: '',
					itsBuy: true,
				},
				{
					id: 2,
					name: 'Desarrollo Front-End',
					description: '',
					itsBuy: true,
				},
				{
					id: 3,
					name: 'Desarrollo Front-End',
					description: '',
					itsBuy: true,
				},
			],
		};
	},
};
</script>

<style></style>
=======
  <div class="view-home">
    <h2>PAGINA HOME</h2>
    <CardCourse />
  </div>
</template>

<script>
import CardCourse from "./components/CardCourse";
export default {
  name: "Home",
  components: {
    CardCourse,
  },
  data() {
    return {
      courses: [
        {
          id: 1,
          name: "Desarrollo Front-End",
          description: "",
          itsBuy: true,
        },
        {
          id: 2,
          name: "Desarrollo Front-End",
          description: "",
          itsBuy: true,
        },
        {
          id: 3,
          name: "Desarrollo Front-End",
          description: "",
          itsBuy: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>
>>>>>>> b680110e15d3b56320984e656f723ae5596d1e0d
