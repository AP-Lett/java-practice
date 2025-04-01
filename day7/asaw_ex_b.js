function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ]);
    }, 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { userId: 1, post: "Hello, world!" },
        { userId: 2, post: "Async/await is fun!" },
      ]);
    }, 1500);
  });
}

async function loadAndCombineData() {
  try {
    const users = await fetchUsers();
    const posts = await fetchPosts();

    const combinedData = users.map((user) => {
      const post = posts.find((p) => p.userId === user.id);
      return {
        userId: user.id,
        userName: user.name,
        post: post ? post.post : "No post found",
      };
    });

    console.log("Combined data:", combinedData);
  } catch (error) {
    console.error("Error:", error);
  }
}


console.log("Loading and combining data...");
loadAndCombineData();