<template>
  <div>
    <p>ボードページです！</p>
    <button @click="handleLogout">ログアウト！</button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "KbnBoardView",

  methods: {
    handleLogout() {
      return this.$store
        .dispatch("logout")
        .then(() => {
          this.$router.push({ path: "/login" })
        })
        .catch(err => this.throwReject(err))
    },
    throwReject(err) {
      return Promise.reject(err)
    }
  }
}
/* eslint-enable */
</script>
