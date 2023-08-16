<script lang="ts">
  import FeedbackAdd from "./components/FeedbackAdd.svelte";
  import FeedbackList from "./components/FeedbackList.svelte";
  import type { User, Users } from "./types/users";

  let name: string = "adib zouiten";
  let showAdminText: boolean = false;

  export const usersData: Users = [
    {
      id: 1,
      name: "Adib zouiten",
      city: "rabat",
      age: 19,
    },
    {
      id: 2,
      name: "Omar zouiten",
      city: "rabat",
      age: 56,
    },
    {
      id: 3,
      name: "samia zouiten",
      city: "rabat",
      age: 21,
    },
    {
      id: 4,
      name: "ihsaan zouiten",
      city: "rabat",
      age: 17,
    },
  ];

  $: count = usersData.length;
  $: total = usersData.reduce((total, user) => total + user.age, 0);
  $: avg = total / count;
  $: data = usersData

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
  function SaveUser(e): void {
    let newUser:User = e.detail
    usersData.push(newUser);
    console.log(usersData);
    
    
  }
</script> 

<main>
  <h1 class="logo">Hello {name}!</h1>
  <h3>total users is {count}</h3>
  <h3>avg user age is {avg}</h3>
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
  <FeedbackAdd  on:add={SaveUser}/>
</main>

<style>
</style>
