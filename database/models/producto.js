function productosData(sequelize, Datatypes){

    let a = 'producto';
    
    let c = {
        id:{type: Datatypes.TINYINT, primaryKey: true, autoincrement: true},
        nombre:{type: Datatypes.STRING},
        precio:{type: Datatypes.DECIMAL},
        fecha_creacion:{type: Datatypes.DATE},
        fecha_baja:{type: Datatypes.DATE},
        imagen:{type: Datatypes.STRING},
        admin_id:{type: Datatypes.TINYINT},
        categoria_id:{type: Datatypes.TINYINT}
    }
    
    let cg = {camelcase: false, timestamps: false};
    
    const productos = sequelize.define(a,c,cg)
    
    return productos;
    }
    
    module.exports = productosData;