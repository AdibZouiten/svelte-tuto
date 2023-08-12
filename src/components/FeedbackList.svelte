<script lang="ts">
  import type { Users } from "../types/users";
  import FeedbackItem from "./FeedbackItem.svelte";
  export let users: Users;
</script>

<table class="userDataTable">
  <thead>
    <th>ID</th>
    <th>Name</th>
    <th>City</th>
  </thead>
  <tbody>
    {#each users as user (user.id)}
      <FeedbackItem {user} />
    {/each}
  </tbody>
</table>

<style>
  .userDataTable {
    width: 100%;
  }
</style>
