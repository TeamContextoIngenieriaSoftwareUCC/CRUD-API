const conection = require("../config/conection");

class User{
    constructor({name, email, password}){
        this.name = name;
        this.email = email;
        this.password = password;
    }
    /**
     * It returns an object with a data property that contains an array of objects, each of which has a
     * name, email, and password property.
     * @returns An object with a data property.
     */
    async get(){
        try {
            const data = await conection.query(
                "SELECT name, email, password FROM users",
                {type: conection.QueryTypes.SELECT}
            );
            if(!data[0]) throw new Error('204');
            return {data};
        } catch (error) {
            return { error: error.message };
        }
    }
    /**
     * It's an async function that uses the await keyword to wait for the result of a query(insert) to the
     * database.
     * @returns The result of the query
     */
    async post(){
        try {
            const data = await conection.query(
                `INSERT INTO users (name, email, password) 
                 VALUES ("${this.name}","${this.email}","${this.password}")`,
                { type: conection.QueryTypes.INSERT }
            );
            return {data};
        } catch (error) {
            return { error: error.message };
        }
    }
    /**
     * It updates the user's name and password in the database, if the user exists.
     * @returns The result of the query.
     */
    async put(){
        try{
            const condition = ` WHERE email = "${this.email}" `;
            const query = await conection.query(
                `SELECT name FROM users ${condition};`,
	            { type: conection.QueryTypes.SELECT }
            );

            if(!query[0]) throw new Error('404');

            let sql = `UPDATE users SET`;
            let values = "";
            if (this.name != undefined) values = values + ` name = '${this.name}'`;
            if (this.password != undefined) values = values + `, password = '${this.password}'`;
            if (values[0] == ",") values = values.replace(",","");
            const updateSentence = sql + values + condition;

            let resultUpdate = await conection.query(`${updateSentence};`,
                { type: conection.QueryTypes.UPDATE });
            if(resultUpdate[1] == 0) throw new Error('400');

            return {msg: `${this.email} actualizado con exito`};
        }catch(error){
            return { error: error.message };
        }
    }
    /**
     * It deletes a user from the database if the email and password match
     * @returns The result of the query.
     */
    async delete(){
        try {
            let conditional = `WHERE email = "${this.email}"`;
            const query = await conection.query(
                `SELECT name FROM users ${conditional};`,
                {type: conection.QueryTypes.SELECT}
            );
		    if(!query[0]) throw new Error('404');
            conditional = conditional + ` and password = "${this.password}"`;
            await conection.query(
                `DELETE FROM users ${conditional};`,
			    { type: conection.QueryTypes.DELETE }
            );
            const { name } = query[0];

            return {msg: "Se elimino con exito el usuario " + name};
        } catch (error) {
            return { error: error.message };
        }
    }
}

module.exports = {User};