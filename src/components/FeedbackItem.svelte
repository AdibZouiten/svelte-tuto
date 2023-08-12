<script lang="ts">
  import type { User } from "../types/users";
  import { createEventDispatcher } from "svelte";
  export let user: User;

  const dispatch = createEventDispatcher();

  function DeleteUser(id: number): void {
    dispatch("DeleteUser",id);
  }
</script>

<tr>
  <td>{user.id}</td>
  <td>{user.name} </td>
  <td>{user.city}</td>
  <td
    ><button
      on:click={() => {
        DeleteUser(user.id);
      }}>X</button
    ></td
  >
</tr>

<style>
</style>
