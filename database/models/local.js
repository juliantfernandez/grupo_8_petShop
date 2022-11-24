function localData(sequelize, Datatypes){

    let a = 'local';
    
    let c = {
        id:{type: Datatypes.TINYINT, primaryKey: true, autoincrement: true},
        nombre:{type: Datatypes.STRING}
    }
    
    let cg = {camelcase: false, timestamps: false};
    
    const local = sequelize.define(a,c,cg)
    
    return local;
    }
    
    module.exports = localData;