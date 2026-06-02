export async function getRepos() {
  const res = await fetch(
    "https://api.github.com/users/yourname/repos",
    { next: { revalidate: 3600 } }
  );

  return res.json();
}