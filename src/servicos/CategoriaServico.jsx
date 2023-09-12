export const getCategoriaServico = async () => {
    const response = 
    await fetch(`${process.env.REACT_APP_ENDERECO_API}/categoria`,
    {
        method : "GET",
        headers : {
            "Content-Type" : "application/json"
        }
    });
    const data = await response.json();
    return data;
}

export const getCategoriaServicoPorCodigoAPI = async codigo => {
    const response = 
    await fetch(`${process.env.REACT_APP_ENDERECO_API}/categoria/${codigo}`,
    {
        method : "GET",
        headers : {
            "Content-Type" : "application/json"
        }
    });
    const data = await response.json();
    return data;
}

export const deleteCategoriaServico = async codigo => {
    const response = 
    await fetch(`${process.env.REACT_APP_ENDERECO_API}/categoria/${codigo}`,
    {
        method : "DELETE",
        headers : {
            "Content-Type" : "application/json"
        }
    });
    const data = await response.json();
    return data;
}


export const cadastraCategoriaServico = async (objeto, metodo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/categoria`, {
        method: metodo,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(objeto),
    })
    const data = await response.json();
    return data;
}