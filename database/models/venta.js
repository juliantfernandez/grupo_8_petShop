function ventasData(sequelize, Datatypes){

    let a = 'venta';
    
    let c = {
        id:{type: Datatypes.TINYINT, primaryKey: true, autoincrement: true},
        monto_unitario:{type: Datatypes.DECIMAL},
        cantidad:{type: Datatypes.TINYINT},
        usuario_id:{type: Datatypes.TINYINT},
        detalle_venta_id:{type: Datatypes.TINYINT},
        producto_id:{type: Datatypes.TINYINT}
    }
    
    let cg = {camelcase: false, timestamps: false};
    
    const venta = sequelize.define(a,c,cg)
    
    return venta;
    }
    
    module.exports =  ventasData;