function serviciosData(sequelize, DataTypes){

    let a = 'servicio';
    
    let c = {
        id:{type: DataTypes.TINYINT, primaryKey: true, autoincrement: true},
        nombre:{type: DataTypes.STRING}
    }
    
    let cg = {camelcase: false, timestamps: false, freezeTableName: true};
    
    const servicio = sequelize.define(a,c,cg)
    
    return servicio;
    }
    
    module.exports = serviciosData;