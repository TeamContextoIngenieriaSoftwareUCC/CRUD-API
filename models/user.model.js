class Usuario{
    constructor(nombre, email, contraseña){
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }
    get(){
        return "Los datos de la base datos";
    }
    post(){
        return `Guardar en la base de datos ${this.email}`;
    }
    put(){
        return `Edita en la base de datos ${this.email}`;
    }
    delete(){
        return `elimina en la base de datos ${this.email}`;
    }
}

module.exports = {Usuario};