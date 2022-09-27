export function getTodasCotas (telefone){
    const response = '';

    api.post('/busca-cotas/19991978949')
       .then((response) => {
        setPost(response.data);
      });

    return response;
  }