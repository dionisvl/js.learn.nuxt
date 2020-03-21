<template>
  <section>
    <h1>Users Page</h1>

    <ul>
      <li :key="user.id" v-for="user of users">
        <a @click.prevent="openUser(user)" href="#">{{user.name}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    data: () => ({
      users: []
    }),
    async mounted() {
      this.users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
    },
    methods: {
      openUser(user) {
        this.$router.push('/users/' + user)
      }
    }
  }
</script>
