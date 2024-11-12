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
			<v-col class="text-center mt-4" cols="12">
				{{ new Date().getFullYear() }} —
				<strong>SpaceX</strong>
			</v-col>
		</v-row>
	</v-footer>
</template>
<script>
export default {
	data: () => ({
		links: [
			{ name: 'Home', url: '/' },
			{ name: 'Launches', url: '/launches' },
			{ name: 'Rockets', url: '/rockets' },
			{ name: 'Favorites', url: '/favorites' },
		],
	}),
}
</script>
