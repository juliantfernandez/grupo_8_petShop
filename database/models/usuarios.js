function usuariosData(sequelize, dataTypes){

let a = 'usuario';

let c = {
    id:{},
    nombre:{},
    apellido:{},
    email:{},
    clave:{},
    imagen:{},
    admin:{},
    local_id:{}
}

let cg = {camelcase: false, timestamps: false};

const usuarios = sequelize.define(a,c,cg)

return usuarios;
}

module.exports = usuariosData;