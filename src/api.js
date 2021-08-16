export const getNotes = async () => {
  return fetch("http://localhost:3000/notes").then((res) => res.json());
};

export const postNotes = async (notes) => {
  return fetch("http://localhost:3000/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(notes),
  }).then((res) => res.json());
};
