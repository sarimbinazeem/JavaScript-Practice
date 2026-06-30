async function searchUser() {
  try {
    let id = prompt("Enter User ID:");

    let response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );

    if (!response.ok) {
      throw new Error("User Not Found");
    }

    let user = await response.json();

    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    console.log(`Phone: ${user.phone}`);
  } catch (error) {
    console.log(error.message);
  }
}


searchUser();