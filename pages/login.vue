<template>
	<div>
		<a href="/api/auth/signin" class="buttonPrimary">Native Link Sign in</a>
		<button @click="signIn(`github`)">
			JS Sign In
		</button>
		<button @click="signOut()">
			Sign Out
		</button>
	</div>
</template>

<script setup lang="ts">
const { signIn, signOut, session, status, cookies, getProviders } = useAuth()

</script>

<style scoped></style>