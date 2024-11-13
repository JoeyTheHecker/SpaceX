<template>
	<v-footer class="bg-grey-lighten-1">
		<v-row justify="center" no-gutters>
			<v-btn
				v-for="link in links"
				:key="link.name"
				:to="link.url"
				class="mx-2"
				color="white"
				rounded="xl"
				variant="text"
			>
				{{ link.name }}
			</v-btn>
		</v-row>
	</v-footer>
</template>
<script setup lang="ts">
const links = [
	{ name: 'Home', url: '/' },
	{ name: 'Launches', url: '/launches' },
	{ name: 'Rockets', url: '/rockets' },
	{ name: 'Favorites', url: '/favorites' },
]
</script>
