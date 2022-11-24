function usuariosData(sequelize, Datatypes){

let a = 'usuario';

let c = {
    id:{type: Datatypes.TINYINT, primaryKey: true, autoincrement: true},
    nombre:{type: Datatypes.STRING},
    apellido:{type: Datatypes.STRING},
    email:{type: Datatypes.STRING},
    clave:{type: Datatypes.STRING},
    imagen:{type: Datatypes.STRING},
    admin:{type: Datatypes.BOOLEAN},
    local_id:{type: Datatypes.TINYINT}
}

let cg = {camelcase: false, timestamps: false};

const usuarios = sequelize.define(a,c,cg)

return usuarios;
}

module.exports = usuariosData;