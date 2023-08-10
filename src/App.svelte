<script lang="ts">
  let name: string = "adib zouiten";
  let showAdminText: boolean = false;
  interface user {
    id: number;
    name: string;
    city: string;
  }
  interface users extends Array<user> {}

  const usersData: users = [
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
    <table class="userDataTable">
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>City</th>
      </thead>
      <tbody>
        {#each usersData as user (user.id)}
          <tr>
            <td>{user.id}</td>
            <td>{user.name} </td>
            <td>{user.city}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <h3>Nothing to see here 🙊</h3>
  {/if}
</main>

<style>
  .userDataTable{
    width:100%;
  }
</style>
