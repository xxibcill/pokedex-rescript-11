open Json.Decode

let mustDecode = (json, decoder) => json->decode(decoder)->Belt.Result.getExn
