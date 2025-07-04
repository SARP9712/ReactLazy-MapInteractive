

const URL_MAP ="https://restcountries.com/v3.1";

export async function peticionPaisNombre(name){

    try{

    const res = await fetch(`${URL_MAP}/name/${encodeURIComponent(name)}?fullText=true`);
    if(!res.ok){
        throw new Error(`Error en la peticion del Pais:${res.statusText}`);
    }

    const data = await res.json();
    return data[0];
    }catch (error){
        throw new Error(error.message);
    }




}