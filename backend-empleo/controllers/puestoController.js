const Puesto = require("../model/puesto");
const validator = require("validator");

const puestoController = {
  getPuestos: (req, res) => {
    Puesto.find((err, puesto) => {
      if (err || !puesto) {
        return res.status(500).send({
          message: "Error",
        });
      }

      return res.status(202).send({
        puestos: puesto,
      });
    });
  },

  getPuesto: (req, res) => {
      const {id} = req.params;
      if(!id || id==null){
        return res.status(500).send({
            message: "Error",
          });
      }

      Puesto.findById(id,(error,puesto)=>{
        if(error || !puesto){
            return res.status(500).send({
                message:"Error"
            })
        }

        return res.status(202).send({
            puesto:puesto
        })
      })
      
  },
  createPuestos: (req, res) => {
    const params = req.body;

    try {

        var validationUbicacion = !validator.isEmpty(params.ubicacion);
        var validationPosicion = !validator.isEmpty(params.posicion);
        var validationEmpresa = !validator.isEmpty(params.empresa);
        

    } catch (error) {

        return res.status(400).send({
            status: "error",
            mesanje: "Faltan datos por enviar"
        });
    }

    if(validationUbicacion & validationPosicion & validationEmpresa== true ){
        Puesto.create(params,(error,puesto)=>{
            if(error || !puesto){
                return res.status(500).send({
                    message:"Error"
                })
            }

            return res.status(202).send({
                puesto:puesto
            })
        })
    }
  },
  updatePuesto: (req, res) => {
      const {id} = req.params;
      const params = req.body;

      Puesto.findOneAndUpdate({_id:id},params,{new:true},(error,puesto)=>{
        if(error || !puesto){
            return res.status(500).send({
                message:"Error"
            });
        }
        return res.status(202).send({
            puesto:puesto
        })
      });

  },
  deletePuesto: (req, res) => {
      const {id}= req.params;
      if(!id || id==null){
        return res.status(500).send({
            message: "Error",
          });
      }

      Puesto.findByIdAndDelete(id,(error,puesto)=>{
        if(error || !puesto){
            return res.status(500).send({
                message:"Error"
            });
        }
        return res.status(202).send({
            puesto:puesto
        })
      })

  },

};

module.exports = puestoController;
