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
    async fetch({store}) {
      if (store.getters['users/users'].length === 0) {
        await store.dispatch('users/fetch')
      }
    },
    data: () => ({
      pageTitle: 'Users page'
    }),
    computed: {
      users() {
        return this.$store.getters['users/users']
      }
    },
    methods: {
      openUser(user) {
        this.$router.push('/users/' + user.id)
      }
    }
  }
</script>
