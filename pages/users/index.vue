<template>
  <section>
    <h1>{{pageTitle}}</h1>

    <ul>
      <li :key="user.id" v-for="user of users">
        <a @click.prevent="openUser(user)" href="#">{{user.name}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    async asyncData({$axios}) {
      const users = await $axios.$get('https://jsonplaceholder.typicode.com/users')
      return {users}
    },
    data: () => ({
      pageTitle: 'Users page'
    }),
    methods: {
      openUser(user) {
        this.$router.push('/users/' + user.id)
      }
    }
  }
</script>
