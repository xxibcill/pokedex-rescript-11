type pokemon_t = {
  id: int,
  name: string,
  // height: int,
  // weight: int,
  // image: string,
}

let decode_pokemon = {
  open Json.Decode

  object(field => {
    id: field.required("id", int),
    name: field.required("name", string),
  })
}
