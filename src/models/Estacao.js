import Sequelize, { Model } from "sequelize";

 /**
        (1, 'luminosidade'),
        (2, 'temperatura'),
        (3, 'umidade'),
        (4, 'pressao'),
        (5, 'vento'),
        (6, 'chuva');
     **/

class Estacao extends Model {

    static init(sequelize) {
        super.init(
            {
                luminosidade: Sequelize.FLOAT,
                temperatura: Sequelize.FLOAT,
                umidade: Sequelize.FLOAT,
                pressao: Sequelize.INTEGER,
                vento: Sequelize.FLOAT,
                chuva: Sequelize.FLOAT
            },
            {
              sequelize,  
            }
        );

        return this;
    }
}

export default Estacao;