<script lang="ts">
  import FeedbackList from "./components/FeedbackList.svelte";
  import type { Users } from "./types/users";

  let name: string = "adib";
  let showAdminText: boolean = false;

  export const usersData: Users = [
    {
      id: 1,
      name: "Adib zouiten",
      city: "rabat",
    },
    {
      id: 2,
      name: "Omar zouiten",
      city: "rabat",
    },
  ];

  function ChangeName(): undefined {
    showAdminText = false;
    let newName: string = prompt("Give us a new name: ");
    name = newName;
    if (newName === "admin") {
      showAdminText = true;
    }
  }

  function DeleteUser(e): void {
    let userID: number = e.detail;
    let filterUserData = usersData.filter((user) => user.id !== userID);
    console.log(filterUserData);

    usersData.length = 0;
    usersData.push(...filterUserData);
  }
</script>

<main>
  <h1 class="logo">Hello {name}!</h1>
  <button
    type="button"
    on:click={() => {
      ChangeName();
    }}>Change name</button
  >
  {#if showAdminText}
    <h3>Hey don't tell any one your the admin now 😎</h3>
    <FeedbackList users={usersData} on:DeleteUser={DeleteUser} />
  {:else}
    <h3>Nothing to see here 🙊</h3>
    <FeedbackList users={usersData} on:DeleteUser={DeleteUser} />
  {/if}
</main>

<style>
</style>
