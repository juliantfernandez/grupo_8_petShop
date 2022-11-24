function turnosData(sequelize, Datatypes){

    let a = 'turno';
    
    let c = {
        id:{type: Datatypes.TINYINT, primaryKey: true, autoincrement: true},
        fecha_solicitud:{type: Datatypes.DATE},
        fecha_turno:{type: Datatypes.DATE},
        fecha_baja:{type: Datatypes.DATE},
        usuario_id:{type: Datatypes.TINYINT},
        local_id:{type: Datatypes.TINYINT},
        servicio_id:{type: Datatypes.TINYINT}
    }
    
    let cg = {camelcase: false, timestamps: false};
    
    const turno = sequelize.define(a,c,cg)
    
    return turno;
    }
    
    module.exports = turnosData;