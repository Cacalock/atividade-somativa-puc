const ids = [
  "getname",
  "getidade",
  "getemail",
  "getsenha",
  "getcpf",
  "getfeedback",
  "getcelular",
];
const elements = {};

ids.forEach((id) => {
  const element = document.querySelector(`#${id}`);
  if (element) {
    elements[id] = element;
    console.log(element);
  }
});

const searchParams = new URLSearchParams(window.location.search);

for (const [key, value] of searchParams.entries()) {
  if (value === "") continue;

  const element = elements[`get${key}`];
  if (element) {
    element.innerText = value;
  }
}
