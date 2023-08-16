<script lang="ts">
  import type { User } from "../types/users";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let newUser: User = {
    id: Math.floor(Math.random() * 100),
    name: "",
    city: "",
    age: 0,
  };

  function handelForm(e): void {
    e.preventDefault();
    console.log("handelForm called");
  }
  function addUser(): void {
    dispatch("add", newUser);
  }
</script>

<form
  class="inputBox"
  on:submit={() => {
    handelForm(event);
    addUser();
  }}
>
  <label for="name">name</label>
  <input
    type="text"
    placeholder="John Doe"
    id="name"
    bind:value={newUser.name}
  />
  <label for="age">age</label>
  <input type="number" placeholder="40" id="age" bind:value={newUser.age} />
  <label for="city">city</label>
  <input type="text" placeholder="ohio" id="city" bind:value={newUser.city} />
  <button type="submit">Add</button>
</form>

<style>
  form {
    max-width: 900px;
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;
    gap: 10px;
    margin-top: 1em;
  }
</style>
