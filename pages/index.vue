<script setup lang="ts">
const { signIn, signOut, session, status, cookies, getProviders } = useAuth()
definePageMeta({ middleware: "auth", auth: { guestRedirectTo: "/login" } })
</script>

<template>
  <div>
    <div>
      <pre>{{ status }}</pre>
      <pre>{{ session?.user }}</pre>
      <pre>{{ cookies }}</pre>
    </div>
  </div>
</template>