export const maskTelefone = (telefone) => {
    return telefone      
      .replace(/\D/g, '')      
      .replace(/(\d{2})(\d)/, '($1)$2')      
      .replace(/(\d{4})(\d)/, '$1-$2')      
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')      
      .replace(/(-\d{4})\d+?$/, '$1')

}

export const unmaskTelefone = (telefone) => {
    return telefone.replace(/\D/g, "")
}

export const  maskCpf = (cpf) => {
    // eslint-disable-next-line
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
}

export const unmaskCpf = (cpf) => {
    // eslint-disable-next-line
    return cpf.replace(/(\.|\/|\-)/g,"");
}

export const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };