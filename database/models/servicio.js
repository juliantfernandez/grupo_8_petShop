function serviciosData(sequelize, Datatypes){

    let a = 'servicio';
    
    let c = {
        id:{type: Datatypes.TINYINT, primaryKey: true, autoincrement: true},
        nombre:{type: Datatypes.STRING}
    }
    
    let cg = {camelcase: false, timestamps: false};
    
    const servicio = sequelize.define(a,c,cg)
    
    return servicio;
    }
    
    module.exports = serviciosData;