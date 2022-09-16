export function formatDate(postData) {
  const date = new Date(parseInt(postData));
  const postDate = date.toString().split(" ").slice(1, 4);
  return postDate
}