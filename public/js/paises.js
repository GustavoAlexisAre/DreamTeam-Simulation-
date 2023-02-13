

document.addEventListener("DOMContentLoaded", () => {
    const selectPais = document.getElementById("paisSelector")
      fetch('https://restcountries.com/v2/all')
      .then((res) => { return res.json()})
      .then(data => {
        console.log(data)
        data.forEach(pais => selectPais.innerHTML += `<option value=${pais.name}>${pais.name}</option>` )})
      })
  