const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get("id");

// Função para exibir os detalhes do Pokémon
function loadPokemonDetail(pokemonId) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  fetch(url)
    .then((response) => response.json())
    .then((pokemon) => {
      document.getElementById("pokemonName").innerText = pokemon.name;
      document.getElementById("pokemonNumber").innerText = pokemon.id;
      document.getElementById("pokemonImage").src =
        pokemon.sprites.other.dream_world.front_default;

      // Exibe os tipos do Pokémon
      const types = pokemon.types
        .map((typeSlot) => typeSlot.type.name)
        .join(", ");
      document.getElementById("pokemonTypes").innerText = types;

      document.getElementById(
        "pokemonDescription"
      ).innerText = `Este é o Pokémon ${pokemon.name}.`;
    })
    .catch((error) =>
      console.error("Erro ao carregar os detalhes do Pokémon:", error)
    );
}

loadPokemonDetail(pokemonId);

// Botão voltar
document.getElementById("backButton").addEventListener("click", () => {
  window.history.back();
});
