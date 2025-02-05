type props = {pokemon: Pokemon.pokemon_t}

let default = (props: props) =>
  <div>
    <div className="p-10 flex justify-center">
      <div>
        <h3 className="text-display1 text-red-50"> {React.string(props.pokemon.name)} </h3>
      </div>
      <div>
        <h3 className="text-display1 color-red">
          {React.string(props.pokemon.id->Belt.Int.toString)}
        </h3>
        // <img src={props.pokemon.image} />
      </div>
    </div>
  </div>

let fetchPokemon = async (id: int) => {
  open Fetch

  let response = await get(`https://pokeapi.co/api/v2/pokemon/${id->Belt.Int.toString}`)

  let json = await response->Response.json

  json->JsonUtils.mustDecode(Pokemon.decode_pokemon)
}

let getServerSideProps = _ctx => {
  let data = fetchPokemon(1)

  data->Promise.then(pokemon => {
    Promise.resolve({
      "props": {
        pokemon: pokemon,
      },
    })
  })
}
