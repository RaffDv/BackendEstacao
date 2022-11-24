import Estacao from "../models/Estacao.js";


class EstacaoController {

    // CRUD


    // CREATE
    // rota: /store - método: POST
    // insere um novo registro
    // dados passados via req.body
    async store(req, res) {
        const { temperatura } = req.body;
        const { pressao } = req.body;

        return res.json( {mensagem: `Registro incluido (${temperatura},${pressao})` } );
    }

    // READ
    // rota: /index - método: GET
    // retorna todos registros
    // podem vir de modo resumido
    async index(req, res) {
        let dados = await Estacao.findAll();
        return res.json(dados);
    }

    // READ
    // rota: /show - método: GET
    // retorna um registro em particular
    // dados passados via req.query
    async show(req, res) {

        // Encontrar uma maneira de obter os dados por tempo.
        // Em vez de usar id, usar outra informação vinda do front-end

        // Tratar datas erradas!

        const { id } = req.query;
        let dados = await Estacao.findAll({
            where: { id }
        });
        return res.json(dados);
    }

    // UPDATE
    // rota: /update - método: PUT
    // novo dado passado via req.body
    // infomação sobre o registro a ser atualizado via params (URN)
    async update(req, res) {

        const { id } = req.params;

        const { temperatura } = req.body;
        const { pressao } = req.body;

        return res.json( {mensagem: `Registro atualizado (${id}) (${temperatura},${pressao}).` } );
    }

    // DELETE
    // rota: /destroy - método: DELETE
    // infomação sobre o registro a ser deletado via req.body
    async destroy(req, res) {
        const { id } = req.body;
        return res.json( {mensagem: `Registro apagado (${id}).` } );
    }


}

export default new EstacaoController();