<template>
	<v-container>
		<div class="container">
			<div class="content-wrapper">
				<h1 class="title">
					<span>SpaceX</span>
				</h1>
				<v-card class="text-wrapper">
					<p class="text">
						Welcome to SpaceX, your gateway to the stars. Explore our impressive catalog of launches and rockets as we continue to push the boundaries of space exploration. Witness the culmination of cutting-edge technology and pioneering spirit as we soar towards the future. Join us as we embark on the next chapter of humanity's journey into space. Welcome to the adventure!
					</p>
				</v-card>
			</div>
		</div>
	</v-container>
</template>

<script setup lang="ts">
useHead({
	title: 'NuxtVGP - SpaceX',
	meta: [{ name: 'SpaceX', content: 'SpaceX Webpage.' }],
})
</script>

<style>
* {
	font-family: Poppins, Montserrat, Arial, Helvetica, sans-serif;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 90vh;
	padding: 20px;
	background: #f5f5f5;
}

.content-wrapper {
	text-align: center;
	width: 80%;
}

.title {
	margin-bottom: 20px;
	font-size: 3rem;
	font-weight: 800;
	color: #1e1e1e;
}

.icon {
	font-size: 2.5rem;
	color: #0058a3;
	margin-bottom: 10px;
}

.text-wrapper {
	margin: 20px auto;
	padding: 25px;
	width: 70%;
	background: #fff;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
}

.text {
	padding: 15px;
	text-align: justify;
	font-size: 1.1rem;
	line-height: 1.6;
	color: #444;
}

@media screen and (max-width: 800px) {
	.title {
		font-size: 2.2rem;
	}

	.icon {
		font-size: 2rem;
	}

	.text-wrapper {
		width: 85%;
		padding: 15px;
	}

	.text {
		font-size: 1rem;
		line-height: 1.5;
	}
}
</style>
